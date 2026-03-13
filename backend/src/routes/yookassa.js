// YooKassa Webhook и API роуты
// /backend/src/routes/yookassa.js

const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

const db = require('../models/database');
const yookassaService = require('../services/yookassaService');
const emailService = require('../services/emailService');
const telegramBot = require('../services/telegramBot');
const logger = require('../services/logger');

/**
 * POST /api/yookassa/create-payment
 * Создание нового платежа
 */
router.post('/create-payment', async (req, res) => {
  try {
    const { name, email, phone, amount, description } = req.body;

    // Валидация
    if (!email || !email.includes('@')) {
      return res.status(400).json({ 
        success: false, 
        error: 'Некорректный email' 
      });
    }

    if (!amount || amount <= 0) {
      return res.status(400).json({ 
        success: false, 
        error: 'Некорректная сумма' 
      });
    }

    // Создаем лид если его нет
    const lead_id = uuidv4();
    const now = new Date().toISOString();

    db.run(`
      INSERT INTO leads (lead_id, name, phone, email, status, source_type, created_at, updated_at)
      VALUES (?, ?, ?, ?, 'payment_pending', 'yookassa', ?, ?)
    `, lead_id, name || null, phone || null, email, now, now);

    // Создаем платеж в YooKassa
    const paymentResult = await yookassaService.createPayment({
      amount: parseFloat(amount),
      description: description || 'Оплата на SAASPRENER',
      email,
      phone,
      name
    });

    // Сохраняем платеж в БД
    db.run(`
      INSERT INTO payments (payment_id, lead_id, provider, amount, currency, payment_type, status, created_at, raw_payload)
      VALUES (?, ?, 'yookassa', ?, 'RUB', 'full', 'pending', ?, ?)
    `, 
      paymentResult.payment_id,
      lead_id,
      parseInt(amount),
      now,
      JSON.stringify({
        yookassa_id: paymentResult.payment_id,
        name,
        email,
        phone,
        description
      })
    );

    // Логируем событие
    db.insertEvent.run(
      'yookassa_payment_created',
      null, null, null,
      lead_id,
      paymentResult.payment_id,
      null, null, null, null, null,
      JSON.stringify({ amount, email }),
      now
    );

    logger.paymentCreated({
      id: paymentResult.payment_id,
      amount: { value: amount, currency: 'RUB' },
      receipt: { customer: { email } },
      description
    });

    res.json({
      success: true,
      payment_id: paymentResult.payment_id,
      confirmation_url: paymentResult.confirmation_url
    });

  } catch (error) {
    logger.error('Ошибка создания платежа', error);
    res.status(500).json({ 
      success: false,
      error: 'Не удалось создать платеж' 
    });
  }
});

/**
 * POST /api/yookassa/webhook
 * Webhook от YooKassa
 */
router.post('/webhook', async (req, res) => {
  try {
    const { event, object } = req.body;

    if (!event || !object) {
      logger.error('Некорректный webhook', new Error('Missing event or object'), req.body);
      return res.status(400).json({ error: 'Invalid webhook payload' });
    }

    const paymentId = object.id;
    const status = object.status;

    logger.webhookReceived(event, paymentId);

    // Получаем платеж из БД
    const payment = db.get('SELECT * FROM payments WHERE payment_id = ?', paymentId);

    switch (event) {
      case 'payment.succeeded':
        await handlePaymentSucceeded(object, payment);
        break;

      case 'payment.waiting_for_capture':
        await handleWaitingForCapture(object, payment);
        break;

      case 'payment.canceled':
        await handlePaymentCanceled(object, payment);
        break;

      default:
        logger.info('Неизвестное событие webhook', { event, paymentId });
    }

    // YooKassa ожидает 200 OK
    res.status(200).json({ success: true });

  } catch (error) {
    logger.error('Ошибка обработки webhook', error);
    // Возвращаем 200 чтобы YooKassa не повторяла запрос
    res.status(200).json({ success: false, error: error.message });
  }
});

/**
 * Обработка успешного платежа
 */
async function handlePaymentSucceeded(paymentObject, dbPayment) {
  const paymentId = paymentObject.id;
  const amount = parseFloat(paymentObject.amount.value);
  const paidAt = paymentObject.captured_at || new Date().toISOString();

  // Извлекаем данные из metadata или raw_payload
  let customerData = {};
  if (paymentObject.metadata) {
    customerData = paymentObject.metadata;
  } else if (dbPayment?.raw_payload) {
    try {
      customerData = JSON.parse(dbPayment.raw_payload);
    } catch (e) {}
  }

  const { email, name, phone } = customerData;

  // Проверяем идемпотентность
  if (dbPayment?.status === 'paid') {
    logger.info('Платеж уже обработан', { payment_id: paymentId });
    return;
  }

  const now = new Date().toISOString();

  // Обновляем статус платежа
  db.run(`
    UPDATE payments 
    SET status = 'paid', paid_at = ?, provider_transaction_id = ?
    WHERE payment_id = ?
  `, paidAt, paymentObject.id, paymentId);

  // Обновляем статус лида
  if (dbPayment?.lead_id) {
    db.run(`
      UPDATE leads SET status = 'paid', updated_at = ?
      WHERE lead_id = ?
    `, now, dbPayment.lead_id);
  }

  logger.statusChanged(paymentId, dbPayment?.status || 'pending', 'paid');

  // Логируем событие
  db.insertEvent.run(
    'payment_paid',
    null, null, null,
    dbPayment?.lead_id || null,
    paymentId,
    null, null, null, null, null,
    JSON.stringify({ amount, email, provider: 'yookassa' }),
    now
  );

  // Отправляем email уведомления
  const paymentData = {
    email,
    name,
    phone,
    amount,
    payment_id: paymentId,
    paid_at: paidAt,
    description: paymentObject.description
  };

  try {
    // Email администратору (чек клиенту отправляет ЮKassa автоматически)
    await emailService.sendPaymentNotificationToAdmin(paymentData);

  } catch (emailError) {
    logger.error('Ошибка отправки email', emailError, { payment_id: paymentId });
  }

  // Уведомление в Telegram
  try {
    const lead = dbPayment?.lead_id ? db.get('SELECT * FROM leads WHERE lead_id = ?', dbPayment.lead_id) : null;
    
    await telegramBot.notifyPayment({
      payment_id: paymentId,
      amount,
      payment_type: 'full',
      provider: 'yookassa',
      lead_id: dbPayment?.lead_id
    }, lead);

  } catch (telegramError) {
    logger.error('Ошибка отправки Telegram', telegramError, { payment_id: paymentId });
  }

  logger.info('Платеж успешно обработан', { payment_id: paymentId, amount, email });
}

/**
 * Обработка ожидания подтверждения (для двухстадийных платежей)
 */
async function handleWaitingForCapture(paymentObject, dbPayment) {
  const paymentId = paymentObject.id;
  const now = new Date().toISOString();

  // Обновляем статус
  db.run(`
    UPDATE payments SET status = 'waiting_for_capture'
    WHERE payment_id = ?
  `, paymentId);

  logger.statusChanged(paymentId, dbPayment?.status || 'pending', 'waiting_for_capture');

  // Для автоматического подтверждения (capture: true в createPayment)
  // этот webhook обычно не приходит, но на всякий случай обрабатываем

  logger.info('Платеж ожидает подтверждения', { payment_id: paymentId });
}

/**
 * Обработка отмененного платежа
 */
async function handlePaymentCanceled(paymentObject, dbPayment) {
  const paymentId = paymentObject.id;
  const now = new Date().toISOString();
  const reason = paymentObject.cancellation_details?.reason || 'unknown';

  // Обновляем статус платежа
  db.run(`
    UPDATE payments SET status = 'canceled'
    WHERE payment_id = ?
  `, paymentId);

  // Обновляем статус лида
  if (dbPayment?.lead_id) {
    db.run(`
      UPDATE leads SET status = 'payment_failed', updated_at = ?
      WHERE lead_id = ?
    `, now, dbPayment.lead_id);
  }

  logger.statusChanged(paymentId, dbPayment?.status || 'pending', 'canceled');

  // Логируем событие
  db.insertEvent.run(
    'payment_canceled',
    null, null, null,
    dbPayment?.lead_id || null,
    paymentId,
    null, null, null, null, null,
    JSON.stringify({ reason }),
    now
  );

  logger.info('Платеж отменен', { payment_id: paymentId, reason });
}

/**
 * GET /api/yookassa/payment/:id
 * Получение информации о платеже
 */
router.get('/payment/:id', async (req, res) => {
  try {
    const paymentId = req.params.id;
    
    // Получаем из нашей БД
    const localPayment = db.get('SELECT * FROM payments WHERE payment_id = ?', paymentId);
    
    if (!localPayment) {
      return res.status(404).json({ 
        success: false, 
        error: 'Платеж не найден' 
      });
    }

    // Можно также запросить актуальный статус из YooKassa
    // const yookassaPayment = await yookassaService.getPaymentInfo(paymentId);

    res.json({
      success: true,
      payment: {
        payment_id: localPayment.payment_id,
        status: localPayment.status,
        amount: localPayment.amount,
        currency: localPayment.currency,
        created_at: localPayment.created_at,
        paid_at: localPayment.paid_at
      }
    });

  } catch (error) {
    logger.error('Ошибка получения платежа', error);
    res.status(500).json({ 
      success: false, 
      error: 'Ошибка получения информации о платеже' 
    });
  }
});

/**
 * GET /api/yookassa/payment-status/:id
 * Проверка статуса платежа (для фронтенда)
 */
router.get('/payment-status/:id', async (req, res) => {
  try {
    const paymentId = req.params.id;
    
    const payment = db.get('SELECT status, amount, paid_at FROM payments WHERE payment_id = ?', paymentId);
    
    if (!payment) {
      return res.json({ status: 'not_found' });
    }

    res.json({
      status: payment.status,
      amount: payment.amount,
      paid_at: payment.paid_at
    });

  } catch (error) {
    res.status(500).json({ status: 'error' });
  }
});

module.exports = router;
