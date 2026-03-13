// SAASPRENER Analytics Backend
// Главный файл сервера

require('dotenv').config();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');

// Импорт модулей
const db = require('./src/models/database');
const telegramBot = require('./src/services/telegramBot');
const scheduler = require('./src/services/scheduler');

// Импорт роутов
const trackingRoutes = require('./src/routes/tracking');
const leadsRoutes = require('./src/routes/leads');
const paymentsRoutes = require('./src/routes/payments');
const reportsRoutes = require('./src/routes/reports');
const telegramRoutes = require('./src/routes/telegram');
const yookassaRoutes = require('./src/routes/yookassa');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin" }
}));
app.use(cors({
  origin: ['https://saasprener.online', 'http://localhost:5173', 'http://localhost:3000'],
  credentials: true
}));
app.use(express.json());
app.use(morgan('combined'));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    timezone: process.env.TZ || 'Europe/Moscow'
  });
});

// Роуты API
app.use('/api/tracking', trackingRoutes);
app.use('/api/leads', leadsRoutes);
app.use('/api/payments', paymentsRoutes);
app.use('/api/reports', reportsRoutes);
app.use('/api/telegram', telegramRoutes);
app.use('/api/yookassa', yookassaRoutes);

// Error handler
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ 
    error: 'Internal server error',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

// Инициализация
async function start() {
  try {
    // База данных инициализируется автоматически при импорте
    console.log('✅ Database initialized');
    
    // Инициализация Telegram бота
    await telegramBot.initialize();
    console.log('✅ Telegram bot initialized');
    
    // Запуск планировщика
    scheduler.start();
    console.log('✅ Scheduler started');
    
    // Запуск сервера
    app.listen(PORT, () => {
      console.log(`🚀 SAASPRENER Analytics Backend running on port ${PORT}`);
      console.log(`📊 API: http://localhost:${PORT}/api`);
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
}

start();

module.exports = app;
