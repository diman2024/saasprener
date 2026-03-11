// Telegram Bot Service
// Отправка уведомлений и обработка команд

const TelegramBot = require('node-telegram-bot-api');
const db = require('../models/database');

let bot = null;
let adminChatId = null;

// Форматирование даты по Москве
function formatDateMSK(date = new Date()) {
  return new Intl.DateTimeFormat('ru-RU', {
    timeZone: 'Europe/Moscow',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date);
}

// Форматирование суммы
function formatMoney(amount) {
  return new Intl.NumberFormat('ru-RU').format(amount) + ' ₽';
}

// Парсинг payload из deep link
function parseStartPayload(payload) {
  if (!payload) return {};
  
  try {
    // Формат: visitorId_source_utmSource_utmCampaign_page
    const parts = payload.split('_');
    return {
      visitor_id: parts[0] || null,
      source: parts[1] || null,
      utm_source: parts[2] || null,
      utm_campaign: parts[3] || null,
      page: parts[4] ? decodeURIComponent(parts[4]) : null
    };
  } catch (e) {
    return { raw: payload };
  }
}

// Инициализация бота
async function initialize() {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  adminChatId = process.env.TELEGRAM_ADMIN_CHAT_ID;
  
  if (!token) {
    console.error('❌ TELEGRAM_BOT_TOKEN not set!');
    return;
  }
  
  bot = new TelegramBot(token, { polling: true });
  
  // Обработка /start
  bot.onText(/\/start(.*)/, async (msg, match) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id;
    const payload = match[1] ? match[1].trim() : null;
    const parsedPayload = parseStartPayload(payload);
    
    const now = new Date().toISOString();
    
    // Сохраняем пользователя
    try {
      db.upsertTelegramUser.run(
        String(userId),
        msg.from.username || null,
        msg.from.first_name || null,
        msg.from.last_name || null,
        now,
        payload,
        parsedPayload.visitor_id || null,
        parsedPayload.utm_source || null,
        parsedPayload.utm_campaign || null,
        parsedPayload.page || null,
        now,
        now
      );
      
      // Сохраняем событие
      db.insertEvent.run(
        'telegram_bot_start',
        parsedPayload.visitor_id || null,
        null,
        String(userId),
        null,
        null,
        null,
        parsedPayload.page || null,
        null,
        'bot',
        'start',
        JSON.stringify({ payload: parsedPayload, from: msg.from }),
        now
      );
      
      console.log(`📱 Telegram bot start: user ${userId}, payload: ${payload}`);
    } catch (err) {
      console.error('Error saving telegram user:', err);
    }
    
    // Приветственное сообщение
    const welcomeText = `👋 Привет${msg.from.first_name ? ', ' + msg.from.first_name : ''}!

Я бот проекта **SAASPRENER** — веб-кодинг для предпринимателей.

🚀 Здесь ты будешь получать:
• Полезные материалы по созданию SaaS
• Уведомления о новых статьях
• Информацию о курсе

📢 Подписывайся на канал: @saasprener

❓ Команды:
/help — список команд`;

    bot.sendMessage(chatId, welcomeText, { parse_mode: 'Markdown' });
    
    // Устанавливаем adminChatId если не задан
    if (!adminChatId && msg.from.username) {
      console.log(`💡 To receive notifications, set TELEGRAM_ADMIN_CHAT_ID=${chatId} in .env`);
    }
  });
  
  // Обработка /help
  bot.onText(/\/help/, (msg) => {
    const helpText = `📋 **Команды бота:**

/start — Начать работу с ботом
/today — Статистика за сегодня
/stats — Краткая сводка
/help — Эта справка

🔗 Сайт: saasprener.online
📢 Канал: @saasprener`;

    bot.sendMessage(msg.chat.id, helpText, { parse_mode: 'Markdown' });
  });
  
  // Обработка /today
  bot.onText(/\/today/, async (msg) => {
    const chatId = msg.chat.id;
    
    try {
      const stats = getTodayStats();
      const text = formatTodayStats(stats);
      bot.sendMessage(chatId, text, { parse_mode: 'Markdown' });
    } catch (err) {
      console.error('Error getting today stats:', err);
      bot.sendMessage(chatId, '❌ Ошибка получения статистики');
    }
  });
  
  // Обработка /stats
  bot.onText(/\/stats/, async (msg) => {
    const chatId = msg.chat.id;
    
    try {
      const stats = getTodayStats();
      const text = `📊 **Краткая статистика сегодня**

👥 Визиты: ${stats.visits}
📝 Заявки: ${stats.leads}
💰 Оплаты: ${stats.payments}
💵 Выручка: ${formatMoney(stats.revenue)}`;

      bot.sendMessage(chatId, text, { parse_mode: 'Markdown' });
    } catch (err) {
      bot.sendMessage(chatId, '❌ Ошибка получения статистики');
    }
  });
  
  // Обработка ошибок polling
  bot.on('polling_error', (error) => {
    console.error('Telegram polling error:', error.message);
  });
  
  console.log('🤖 Telegram bot started');
}

// Получить статистику за сегодня
function getTodayStats() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayISO = today.toISOString();
  
  const visits = db.get(`
    SELECT COUNT(*) as count FROM events 
    WHERE event_name = 'page_view' AND created_at >= ?
  `, todayISO)?.count || 0;
  
  const uniqueVisitors = db.get(`
    SELECT COUNT(DISTINCT visitor_id) as count FROM events 
    WHERE event_name = 'page_view' AND created_at >= ? AND visitor_id IS NOT NULL
  `, todayISO)?.count || 0;
  
  const telegramClicks = db.get(`
    SELECT COUNT(*) as count FROM events 
    WHERE event_name = 'telegram_click' AND created_at >= ?
  `, todayISO)?.count || 0;
  
  const botStarts = db.get(`
    SELECT COUNT(*) as count FROM events 
    WHERE event_name = 'telegram_bot_start' AND created_at >= ?
  `, todayISO)?.count || 0;
  
  const leads = db.get(`
    SELECT COUNT(*) as count FROM leads WHERE created_at >= ?
  `, todayISO)?.count || 0;
  
  const paymentsData = db.get(`
    SELECT COUNT(*) as count, COALESCE(SUM(amount), 0) as total FROM payments 
    WHERE status = 'paid' AND paid_at >= ?
  `, todayISO) || { count: 0, total: 0 };
  
  const topPages = db.all(`
    SELECT page_path, COUNT(*) as views FROM events 
    WHERE event_name = 'page_view' AND created_at >= ? AND page_path IS NOT NULL
    GROUP BY page_path ORDER BY views DESC LIMIT 5
  `, todayISO);
  
  const sources = db.all(`
    SELECT 
      COALESCE(utm_source, 'direct') as source, 
      COUNT(*) as count 
    FROM sessions 
    WHERE started_at >= ?
    GROUP BY source ORDER BY count DESC LIMIT 5
  `, todayISO);
  
  return {
    visits,
    uniqueVisitors,
    telegramClicks,
    botStarts,
    leads,
    payments: paymentsData.count,
    revenue: paymentsData.total,
    topPages,
    sources,
    date: formatDateMSK()
  };
}

// Форматирование статистики за сегодня
function formatTodayStats(stats) {
  const crVisitToLead = stats.visits > 0 ? ((stats.leads / stats.visits) * 100).toFixed(2) : 0;
  const crLeadToPaid = stats.leads > 0 ? ((stats.payments / stats.leads) * 100).toFixed(2) : 0;
  const crTgClickToStart = stats.telegramClicks > 0 ? ((stats.botStarts / stats.telegramClicks) * 100).toFixed(2) : 0;
  
  let text = `📊 **Статистика за сегодня**
_${stats.date} MSK_

**Трафик**
👥 Визиты: ${stats.visits}
👤 Уники: ${stats.uniqueVisitors}

**Telegram**
🔗 Клики: ${stats.telegramClicks}
🤖 Заходы в бота: ${stats.botStarts}
📈 CR click→bot: ${crTgClickToStart}%

**Заявки и оплаты**
📝 Заявки: ${stats.leads}
💰 Оплаты: ${stats.payments}
💵 Выручка: ${formatMoney(stats.revenue)}

**Конверсии**
📊 Визит → заявка: ${crVisitToLead}%
📊 Заявка → оплата: ${crLeadToPaid}%`;

  if (stats.topPages && stats.topPages.length > 0) {
    text += '\n\n**Топ страницы**';
    stats.topPages.forEach((p, i) => {
      text += `\n${i + 1}. ${p.page_path} — ${p.views}`;
    });
  }
  
  if (stats.sources && stats.sources.length > 0) {
    text += '\n\n**Источники**';
    stats.sources.forEach((s) => {
      text += `\n• ${s.source}: ${s.count}`;
    });
  }
  
  return text;
}

// Отправка уведомления о новой заявке
async function notifyNewLead(lead) {
  if (!bot || !adminChatId) {
    console.log('⚠️ Cannot send notification: bot or adminChatId not configured');
    return;
  }
  
  const utm = [lead.utm_source, lead.utm_medium, lead.utm_campaign].filter(Boolean).join(' / ') || 'нет';
  
  const repeatBadge = lead.is_repeat ? '🔄 **ПОВТОРНАЯ ЗАЯВКА**\n\n' : '';
  const repeatInfo = lead.is_repeat ? `\n🔁 **Предыдущая:** \`${lead.previous_lead_id}\`` : '';
  
  const text = `${repeatBadge}🔔 **Новая заявка на SAASPRENER**

👤 **Имя:** ${lead.name || 'не указано'}
📱 **Телефон:** ${lead.phone || 'не указан'}
💬 **Telegram:** ${lead.telegram_username || 'не указан'}
📧 **Email:** ${lead.email || 'не указан'}
💡 **Идея:** ${lead.idea || 'не указана'}
📊 **Уровень:** ${lead.level || 'не указан'}

📄 **Страница:** ${lead.source_page || '/'}
🔗 **Источник:** ${lead.source_type || 'form'}
🏷 **UTM:** ${utm}

⏰ **Время:** ${formatDateMSK()} MSK
🆔 **Lead ID:** \`${lead.lead_id}\`${repeatInfo}`;

  try {
    await bot.sendMessage(adminChatId, text, { parse_mode: 'Markdown' });
    console.log('✅ Lead notification sent');
  } catch (err) {
    console.error('❌ Failed to send lead notification:', err.message);
    // Retry once
    setTimeout(async () => {
      try {
        await bot.sendMessage(adminChatId, text, { parse_mode: 'Markdown' });
      } catch (e) {
        console.error('❌ Retry failed:', e.message);
      }
    }, 5000);
  }
}

// Отправка уведомления об оплате
async function notifyPayment(payment, lead) {
  if (!bot || !adminChatId) return;
  
  const text = `💰 **Оплата получена!**

👤 **Имя:** ${lead?.name || 'не указано'}
💵 **Сумма:** ${formatMoney(payment.amount)}
📋 **Тип:** ${payment.payment_type || 'полная оплата'}
🏦 **Система:** ${payment.provider || 'не указана'}

⏰ **Время:** ${formatDateMSK()} MSK
🆔 **Payment ID:** \`${payment.payment_id}\`
🆔 **Lead ID:** \`${payment.lead_id || 'n/a'}\``;

  try {
    await bot.sendMessage(adminChatId, text, { parse_mode: 'Markdown' });
    console.log('✅ Payment notification sent');
  } catch (err) {
    console.error('❌ Failed to send payment notification:', err.message);
  }
}

// Отправка ежедневного отчёта
async function sendDailyReport() {
  if (!bot || !adminChatId) {
    console.log('⚠️ Cannot send daily report: bot or adminChatId not configured');
    return;
  }
  
  try {
    const stats = getTodayStats();
    const text = `📈 **Ежедневный отчёт SAASPRENER**
_${new Date().toLocaleDateString('ru-RU')} — ${formatDateMSK()} MSK_

${formatTodayStats(stats).replace('**Статистика за сегодня**', '').replace(/\n_.*MSK_/, '')}

---
_Отчёт сформирован автоматически_`;

    await bot.sendMessage(adminChatId, text, { parse_mode: 'Markdown' });
    
    // Логируем отправку
    db.insertReportLog.run(
      new Date().toISOString().split('T')[0],
      new Date().toISOString(),
      adminChatId,
      JSON.stringify(stats),
      'sent',
      null
    );
    
    console.log('✅ Daily report sent');
  } catch (err) {
    console.error('❌ Failed to send daily report:', err.message);
    
    db.insertReportLog.run(
      new Date().toISOString().split('T')[0],
      new Date().toISOString(),
      adminChatId,
      null,
      'failed',
      err.message
    );
  }
}

// Отправка тестового сообщения
async function sendTestMessage(chatId, message) {
  if (!bot) return false;
  
  try {
    await bot.sendMessage(chatId, message, { parse_mode: 'Markdown' });
    return true;
  } catch (err) {
    console.error('Failed to send test message:', err.message);
    return false;
  }
}

module.exports = {
  initialize,
  notifyNewLead,
  notifyPayment,
  sendDailyReport,
  sendTestMessage,
  getTodayStats,
  formatTodayStats,
  getBot: () => bot,
  getAdminChatId: () => adminChatId
};
