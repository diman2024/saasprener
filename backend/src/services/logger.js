// Сервис логирования платежей
// /backend/src/services/logger.js

const winston = require('winston');
const path = require('path');
const fs = require('fs');

// Создаем папку logs если её нет
const logsDir = path.join(__dirname, '../../logs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

// Формат логов
const logFormat = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  winston.format.errors({ stack: true }),
  winston.format.printf(({ timestamp, level, message, ...meta }) => {
    const metaStr = Object.keys(meta).length ? JSON.stringify(meta) : '';
    return `[${timestamp}] ${level.toUpperCase()}: ${message} ${metaStr}`;
  })
);

// Основной логгер
const logger = winston.createLogger({
  level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
  format: logFormat,
  defaultMeta: { service: 'saasprener-payments' },
  transports: [
    // Лог платежей
    new winston.transports.File({ 
      filename: path.join(logsDir, 'payments.log'),
      level: 'info'
    }),
    // Ошибки
    new winston.transports.File({ 
      filename: path.join(logsDir, 'errors.log'),
      level: 'error'
    }),
    // Консоль для разработки
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        logFormat
      )
    })
  ]
});

// Специализированные методы логирования
const paymentLogger = {
  // Логирование создания платежа
  paymentCreated: (paymentData) => {
    logger.info('Платеж создан', {
      payment_id: paymentData.id,
      amount: paymentData.amount?.value,
      currency: paymentData.amount?.currency,
      email: paymentData.receipt?.customer?.email,
      description: paymentData.description
    });
  },

  // Логирование ответа YooKassa
  yookassaResponse: (response) => {
    logger.info('Ответ YooKassa', {
      payment_id: response.id,
      status: response.status,
      confirmation_url: response.confirmation?.confirmation_url
    });
  },

  // Логирование webhook
  webhookReceived: (event, paymentId) => {
    logger.info('Webhook получен', {
      event,
      payment_id: paymentId
    });
  },

  // Статус платежа изменен
  statusChanged: (paymentId, oldStatus, newStatus) => {
    logger.info('Статус платежа изменен', {
      payment_id: paymentId,
      old_status: oldStatus,
      new_status: newStatus
    });
  },

  // Email отправлен
  emailSent: (to, subject) => {
    logger.info('Email отправлен', { to, subject });
  },

  // Ошибка
  error: (message, error, context = {}) => {
    logger.error(message, {
      error: error.message,
      stack: error.stack,
      ...context
    });
  },

  // Информационное сообщение
  info: (message, data = {}) => {
    logger.info(message, data);
  },

  // Отладочное сообщение
  debug: (message, data = {}) => {
    logger.debug(message, data);
  }
};

module.exports = paymentLogger;
