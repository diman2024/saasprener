// Сервис отправки email уведомлений
// /backend/src/services/emailService.js

const nodemailer = require('nodemailer');
const logger = require('./logger');

// Конфигурация транспорта
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.yandex.ru',
  port: parseInt(process.env.SMTP_PORT) || 465,
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

const EMAIL_FROM = process.env.EMAIL_FROM || 'SAASPRENER <noreply@saasprener.online>';
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@saasprener.online';
const SITE_URL = process.env.SITE_URL || 'https://saasprener.online';

/**
 * Форматирование суммы в рублях
 */
function formatAmount(amount) {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0
  }).format(amount);
}

/**
 * Форматирование даты
 */
function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

/**
 * Отправка email клиенту об успешной оплате
 */
async function sendPaymentSuccessToCustomer(paymentData) {
  const { email, name, amount, payment_id, paid_at } = paymentData;

  const html = `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #0d0d0d;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0d0d0d; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #171717; border: 1px solid #27272a;">
          <!-- Header -->
          <tr>
            <td style="padding: 40px 40px 30px; border-bottom: 1px solid #10b981;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 900; letter-spacing: -0.5px;">
                SAASPRENER
              </h1>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <h2 style="margin: 0 0 20px; color: #10b981; font-size: 20px; font-weight: 700;">
                ✓ Оплата успешно получена
              </h2>
              
              <p style="margin: 0 0 30px; color: #a1a1aa; font-size: 16px; line-height: 1.6;">
                ${name ? `${name}, спасибо` : 'Спасибо'} за оплату! Ваш платеж успешно обработан.
              </p>
              
              <!-- Payment details -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0d0d0d; border: 1px solid #27272a; margin-bottom: 30px;">
                <tr>
                  <td style="padding: 20px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding: 10px 0; color: #71717a; font-size: 14px;">Сумма:</td>
                        <td style="padding: 10px 0; color: #ffffff; font-size: 18px; font-weight: 700; text-align: right;">
                          ${formatAmount(amount)}
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 10px 0; color: #71717a; font-size: 14px; border-top: 1px solid #27272a;">Дата:</td>
                        <td style="padding: 10px 0; color: #ffffff; font-size: 14px; text-align: right; border-top: 1px solid #27272a;">
                          ${formatDate(paid_at || new Date())}
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 10px 0; color: #71717a; font-size: 14px; border-top: 1px solid #27272a;">ID платежа:</td>
                        <td style="padding: 10px 0; color: #71717a; font-size: 12px; text-align: right; border-top: 1px solid #27272a; font-family: monospace;">
                          ${payment_id}
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              
              <p style="margin: 0 0 30px; color: #a1a1aa; font-size: 14px; line-height: 1.6;">
                Если у вас есть вопросы — просто ответьте на это письмо.
              </p>
              
              <a href="${SITE_URL}" style="display: inline-block; padding: 14px 32px; background-color: #10b981; color: #0d0d0d; text-decoration: none; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; font-size: 12px;">
                Перейти на сайт
              </a>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 30px 40px; border-top: 1px solid #27272a;">
              <p style="margin: 0; color: #52525b; font-size: 12px;">
                © ${new Date().getFullYear()} SAASPRENER. Создаем прибыльные SaaS-сервисы.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;

  const textContent = `
Оплата успешно получена

${name ? `${name}, спасибо` : 'Спасибо'} за оплату! Ваш платеж успешно обработан.

Сумма: ${formatAmount(amount)}
Дата: ${formatDate(paid_at || new Date())}
ID платежа: ${payment_id}

Если у вас есть вопросы — ответьте на это письмо.

---
SAASPRENER
${SITE_URL}
  `;

  try {
    await transporter.sendMail({
      from: EMAIL_FROM,
      to: email,
      subject: '✓ Оплата успешно получена — SAASPRENER',
      text: textContent,
      html: html
    });

    logger.emailSent(email, 'Оплата успешно получена');
    return { success: true };

  } catch (error) {
    logger.error('Ошибка отправки email клиенту', error, { email });
    throw error;
  }
}

/**
 * Отправка уведомления администратору о новой оплате
 */
async function sendPaymentNotificationToAdmin(paymentData) {
  const { 
    email, 
    name, 
    phone, 
    amount, 
    payment_id, 
    paid_at,
    description 
  } = paymentData;

  const html = `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
</head>
<body style="margin: 0; padding: 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f3f4f6;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
    <tr>
      <td style="padding: 30px; background-color: #10b981; color: #ffffff;">
        <h1 style="margin: 0; font-size: 20px;">💰 Новая оплата на сайте</h1>
      </td>
    </tr>
    <tr>
      <td style="padding: 30px;">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
              <strong>Имя:</strong>
            </td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; text-align: right;">
              ${name || 'Не указано'}
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
              <strong>Email:</strong>
            </td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; text-align: right;">
              <a href="mailto:${email}">${email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
              <strong>Телефон:</strong>
            </td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; text-align: right;">
              ${phone ? `<a href="tel:${phone}">${phone}</a>` : 'Не указан'}
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
              <strong>Сумма:</strong>
            </td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; text-align: right; font-size: 18px; color: #10b981; font-weight: bold;">
              ${formatAmount(amount)}
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
              <strong>ID платежа:</strong>
            </td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; text-align: right; font-family: monospace; font-size: 12px;">
              ${payment_id}
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
              <strong>Дата:</strong>
            </td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; text-align: right;">
              ${formatDate(paid_at || new Date())}
            </td>
          </tr>
          ${description ? `
          <tr>
            <td style="padding: 10px 0;">
              <strong>Описание:</strong>
            </td>
            <td style="padding: 10px 0; text-align: right;">
              ${description}
            </td>
          </tr>
          ` : ''}
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;

  const textContent = `
💰 Новая оплата на сайте

Имя: ${name || 'Не указано'}
Email: ${email}
Телефон: ${phone || 'Не указан'}
Сумма: ${formatAmount(amount)}
ID платежа: ${payment_id}
Дата: ${formatDate(paid_at || new Date())}
${description ? `Описание: ${description}` : ''}
  `;

  try {
    await transporter.sendMail({
      from: EMAIL_FROM,
      to: ADMIN_EMAIL,
      subject: `💰 Новая оплата: ${formatAmount(amount)} от ${name || email}`,
      text: textContent,
      html: html
    });

    logger.emailSent(ADMIN_EMAIL, 'Уведомление администратору');
    return { success: true };

  } catch (error) {
    logger.error('Ошибка отправки email администратору', error);
    throw error;
  }
}

/**
 * Проверка подключения к SMTP серверу
 */
async function verifyConnection() {
  try {
    await transporter.verify();
    logger.info('SMTP подключение успешно');
    return true;
  } catch (error) {
    logger.error('Ошибка SMTP подключения', error);
    return false;
  }
}

module.exports = {
  sendPaymentSuccessToCustomer,
  sendPaymentNotificationToAdmin,
  verifyConnection,
  transporter
};
