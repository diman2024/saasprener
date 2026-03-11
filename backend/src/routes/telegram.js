// Роут для Telegram webhook и тестирования
const express = require('express');
const router = express.Router();
const telegramBot = require('../services/telegramBot');

// POST /api/telegram/test
// Тестовое сообщение
router.post('/test', async (req, res) => {
  try {
    const { chat_id, message } = req.body;
    
    const targetChatId = chat_id || telegramBot.getAdminChatId();
    
    if (!targetChatId) {
      return res.status(400).json({ 
        error: 'No chat_id provided and TELEGRAM_ADMIN_CHAT_ID not configured',
        hint: 'Start the bot and check console for your chat_id'
      });
    }
    
    const success = await telegramBot.sendTestMessage(
      targetChatId, 
      message || '✅ Тестовое сообщение от SAASPRENER Analytics'
    );
    
    res.json({ success, chat_id: targetChatId });
  } catch (error) {
    console.error('Test message error:', error);
    res.status(500).json({ error: 'Failed to send test message' });
  }
});

// GET /api/telegram/status
// Статус бота
router.get('/status', (req, res) => {
  const bot = telegramBot.getBot();
  const adminChatId = telegramBot.getAdminChatId();
  
  res.json({
    bot_active: !!bot,
    admin_chat_configured: !!adminChatId,
    admin_chat_id: adminChatId ? '***configured***' : null
  });
});

// POST /api/telegram/set-admin
// Установка admin chat ID (для первоначальной настройки)
router.post('/set-admin', (req, res) => {
  const { chat_id } = req.body;
  
  if (!chat_id) {
    return res.status(400).json({ error: 'chat_id required' });
  }
  
  // В production это должно писаться в .env или конфиг
  console.log(`\n⚠️ To set admin chat, add this to .env:\nTELEGRAM_ADMIN_CHAT_ID=${chat_id}\n`);
  
  res.json({ 
    success: true, 
    message: 'Check server console for instructions',
    chat_id 
  });
});

// Генерация deep link
router.get('/deep-link', (req, res) => {
  const { visitor_id, source, utm_source, utm_campaign, page } = req.query;
  
  const bot = telegramBot.getBot();
  if (!bot) {
    return res.status(500).json({ error: 'Bot not initialized' });
  }
  
  // Формируем payload
  const payloadParts = [
    visitor_id || 'v',
    source || 'site',
    utm_source || 'd',
    utm_campaign || 'd',
    page ? encodeURIComponent(page.substring(0, 20)) : 'd'
  ];
  
  const payload = payloadParts.join('_');
  
  // Получаем username бота
  // В реальности нужно сохранять при инициализации
  const botUsername = 'saasprener_bot'; // Замените на реальный username
  
  const deepLink = `https://t.me/${botUsername}?start=${payload}`;
  
  res.json({ deep_link: deepLink, payload });
});

module.exports = router;
