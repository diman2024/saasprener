// Сервис интеграции с YooKassa
// /backend/src/services/yookassaService.js

const { YooKassa } = require('@appigram/yookassa-node');
const { v4: uuidv4 } = require('uuid');
const logger = require('./logger');

// Инициализация YooKassa
const yookassa = new YooKassa({
  shopId: process.env.YOOKASSA_SHOP_ID,
  secretKey: process.env.YOOKASSA_SECRET_KEY
});

const SITE_URL = process.env.SITE_URL || 'https://saasprener.online';

/**
 * Создание платежа в YooKassa
 * @param {Object} paymentData - Данные платежа
 * @param {number} paymentData.amount - Сумма в рублях
 * @param {string} paymentData.description - Описание платежа
 * @param {string} paymentData.email - Email клиента
 * @param {string} paymentData.phone - Телефон клиента
 * @param {string} paymentData.name - Имя клиента
 * @param {string} [paymentData.returnUrl] - URL возврата после оплаты
 * @returns {Promise<Object>} - Объект платежа YooKassa
 */
async function createPayment(paymentData) {
  const {
    amount,
    description = 'Оплата услуги на SAASPRENER',
    email,
    phone,
    name,
    returnUrl = `${SITE_URL}/payment-success`
  } = paymentData;

  // Генерируем уникальный ключ идемпотентности
  const idempotenceKey = uuidv4();

  try {
    const paymentPayload = {
      amount: {
        value: amount.toFixed(2),
        currency: 'RUB'
      },
      confirmation: {
        type: 'redirect',
        return_url: returnUrl
      },
      capture: true,
      description,
      receipt: {
        customer: {
          email: email
        },
        items: [
          {
            description: description.substring(0, 128), // Максимум 128 символов
            quantity: '1.00',
            amount: {
              value: amount.toFixed(2),
              currency: 'RUB'
            },
            vat_code: 1, // НДС не облагается
            payment_mode: 'full_payment',
            payment_subject: 'service'
          }
        ]
      },
      metadata: {
        email,
        phone,
        name,
        created_via: 'saasprener_website'
      }
    };

    // Добавляем телефон в чек если есть
    if (phone) {
      paymentPayload.receipt.customer.phone = phone.replace(/\D/g, '');
    }

    logger.info('Создание платежа в YooKassa', { 
      amount, 
      email, 
      description 
    });

    const payment = await yookassa.createPayment(paymentPayload, idempotenceKey);

    logger.yookassaResponse(payment);

    return {
      success: true,
      payment_id: payment.id,
      confirmation_url: payment.confirmation.confirmation_url,
      status: payment.status,
      amount: payment.amount,
      created_at: payment.created_at
    };

  } catch (error) {
    logger.error('Ошибка создания платежа в YooKassa', error, { 
      amount, 
      email 
    });
    
    throw error;
  }
}

/**
 * Получение информации о платеже
 * @param {string} paymentId - ID платежа YooKassa
 * @returns {Promise<Object>} - Информация о платеже
 */
async function getPaymentInfo(paymentId) {
  try {
    const payment = await yookassa.getPayment(paymentId);
    
    logger.debug('Получена информация о платеже', {
      payment_id: paymentId,
      status: payment.status
    });

    return payment;

  } catch (error) {
    logger.error('Ошибка получения информации о платеже', error, { 
      payment_id: paymentId 
    });
    
    throw error;
  }
}

/**
 * Подтверждение платежа (если capture: false)
 * @param {string} paymentId - ID платежа
 * @param {number} amount - Сумма для подтверждения
 * @returns {Promise<Object>} - Результат подтверждения
 */
async function capturePayment(paymentId, amount) {
  try {
    const idempotenceKey = uuidv4();
    
    const payment = await yookassa.capturePayment(paymentId, {
      amount: {
        value: amount.toFixed(2),
        currency: 'RUB'
      }
    }, idempotenceKey);

    logger.info('Платеж подтвержден', {
      payment_id: paymentId,
      amount: amount,
      status: payment.status
    });

    return payment;

  } catch (error) {
    logger.error('Ошибка подтверждения платежа', error, { 
      payment_id: paymentId 
    });
    
    throw error;
  }
}

/**
 * Отмена платежа
 * @param {string} paymentId - ID платежа
 * @returns {Promise<Object>} - Результат отмены
 */
async function cancelPayment(paymentId) {
  try {
    const idempotenceKey = uuidv4();
    
    const payment = await yookassa.cancelPayment(paymentId, idempotenceKey);

    logger.info('Платеж отменен', {
      payment_id: paymentId,
      status: payment.status
    });

    return payment;

  } catch (error) {
    logger.error('Ошибка отмены платежа', error, { 
      payment_id: paymentId 
    });
    
    throw error;
  }
}

/**
 * Создание возврата
 * @param {string} paymentId - ID платежа
 * @param {number} amount - Сумма возврата
 * @returns {Promise<Object>} - Результат возврата
 */
async function createRefund(paymentId, amount) {
  try {
    const idempotenceKey = uuidv4();
    
    const refund = await yookassa.createRefund({
      payment_id: paymentId,
      amount: {
        value: amount.toFixed(2),
        currency: 'RUB'
      }
    }, idempotenceKey);

    logger.info('Возврат создан', {
      payment_id: paymentId,
      refund_id: refund.id,
      amount: amount
    });

    return refund;

  } catch (error) {
    logger.error('Ошибка создания возврата', error, { 
      payment_id: paymentId 
    });
    
    throw error;
  }
}

/**
 * Валидация IP адреса YooKassa для webhook
 * IP адреса YooKassa откуда приходят webhook-и
 */
const YOOKASSA_IPS = [
  '185.71.76.0/27',
  '185.71.77.0/27', 
  '77.75.153.0/25',
  '77.75.156.11',
  '77.75.156.35',
  '77.75.154.128/25',
  '2a02:5180::/32'
];

function isYookassaIP(ip) {
  // В продакшене за прокси/nginx - проверяем X-Forwarded-For
  // Для простоты пока просто логируем
  logger.debug('Webhook IP', { ip });
  return true; // TODO: Добавить строгую проверку для продакшена
}

module.exports = {
  createPayment,
  getPaymentInfo,
  capturePayment,
  cancelPayment,
  createRefund,
  isYookassaIP,
  yookassa
};
