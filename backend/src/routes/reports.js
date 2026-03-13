// Роут отчётов
const express = require('express');
const router = express.Router();
const db = require('../models/database');
const telegramBot = require('../services/telegramBot');
const scheduler = require('../services/scheduler');

// Форматирование денег
function formatMoney(amount) {
  return new Intl.NumberFormat('ru-RU').format(amount) + ' ₽';
}

// GET /api/reports/today
// Статистика за сегодня
router.get('/today', (req, res) => {
  try {
    const stats = telegramBot.getTodayStats();
    res.json(stats);
  } catch (error) {
    console.error('Today stats error:', error);
    res.status(500).json({ error: 'Failed to get today stats' });
  }
});

// GET /api/reports/full
// Полная статистика (сегодня + всего)
router.get('/full', (req, res) => {
  try {
    const todayStats = telegramBot.getTodayStats();
    const allTimeStats = telegramBot.getAllTimeStats();
    const formatted = telegramBot.formatFullStats(todayStats, allTimeStats);
    
    res.json({ 
      today: todayStats,
      allTime: allTimeStats,
      formatted,
      would_send_to: telegramBot.getAdminChatId() || 'not configured'
    });
  } catch (error) {
    console.error('Full stats error:', error);
    res.status(500).json({ error: 'Failed to get full stats' });
  }
});

// GET /api/reports/daily-preview
// Предпросмотр ежедневного отчёта
router.get('/daily-preview', (req, res) => {
  try {
    const todayStats = telegramBot.getTodayStats();
    const allTimeStats = telegramBot.getAllTimeStats();
    const text = telegramBot.formatFullStats(todayStats, allTimeStats);
    
    res.json({ 
      today: todayStats,
      allTime: allTimeStats,
      formatted: text,
      would_send_to: telegramBot.getAdminChatId() || 'not configured'
    });
  } catch (error) {
    console.error('Daily preview error:', error);
    res.status(500).json({ error: 'Failed to generate preview' });
  }
});

// POST /api/reports/send-daily
// Ручная отправка ежедневного отчёта
router.post('/send-daily', async (req, res) => {
  try {
    await scheduler.runDailyReportNow();
    res.json({ success: true, message: 'Daily report sent' });
  } catch (error) {
    console.error('Manual report error:', error);
    res.status(500).json({ error: 'Failed to send report' });
  }
});

// GET /api/reports/period
// Статистика за период
router.get('/period', (req, res) => {
  try {
    const { from, to } = req.query;
    
    if (!from || !to) {
      return res.status(400).json({ error: 'from and to dates required' });
    }
    
    const fromDate = new Date(from).toISOString();
    const toDate = new Date(to).toISOString();
    
    const visits = db.get(`
      SELECT COUNT(*) as count FROM events 
      WHERE event_name = 'page_view' AND created_at BETWEEN ? AND ?
    `, fromDate, toDate)?.count || 0;
    
    const uniqueVisitors = db.get(`
      SELECT COUNT(DISTINCT visitor_id) as count FROM events 
      WHERE event_name = 'page_view' AND created_at BETWEEN ? AND ? AND visitor_id IS NOT NULL
    `, fromDate, toDate)?.count || 0;
    
    const telegramClicks = db.get(`
      SELECT COUNT(*) as count FROM events 
      WHERE event_name = 'telegram_click' AND created_at BETWEEN ? AND ?
    `, fromDate, toDate)?.count || 0;
    
    const botStarts = db.get(`
      SELECT COUNT(*) as count FROM events 
      WHERE event_name = 'telegram_bot_start' AND created_at BETWEEN ? AND ?
    `, fromDate, toDate)?.count || 0;
    
    const leads = db.get(`
      SELECT COUNT(*) as count FROM leads WHERE created_at BETWEEN ? AND ?
    `, fromDate, toDate)?.count || 0;
    
    const paymentsData = db.get(`
      SELECT COUNT(*) as count, COALESCE(SUM(amount), 0) as total FROM payments 
      WHERE status = 'paid' AND paid_at BETWEEN ? AND ?
    `, fromDate, toDate) || { count: 0, total: 0 };
    
    const topPages = db.all(`
      SELECT page_path, COUNT(*) as views FROM events 
      WHERE event_name = 'page_view' AND created_at BETWEEN ? AND ? AND page_path IS NOT NULL
      GROUP BY page_path ORDER BY views DESC LIMIT 10
    `, fromDate, toDate);
    
    const sources = db.all(`
      SELECT 
        COALESCE(utm_source, 'direct') as source, 
        COUNT(*) as count 
      FROM sessions 
      WHERE started_at BETWEEN ? AND ?
      GROUP BY source ORDER BY count DESC
    `, fromDate, toDate);
    
    const utmCampaigns = db.all(`
      SELECT 
        utm_campaign,
        COUNT(*) as sessions,
        (SELECT COUNT(*) FROM leads WHERE utm_campaign = s.utm_campaign AND created_at BETWEEN ? AND ?) as leads
      FROM sessions s
      WHERE started_at BETWEEN ? AND ? AND utm_campaign IS NOT NULL
      GROUP BY utm_campaign ORDER BY sessions DESC
    `, fromDate, toDate, fromDate, toDate);
    
    res.json({
      period: { from: fromDate, to: toDate },
      visits,
      uniqueVisitors,
      telegramClicks,
      botStarts,
      leads,
      payments: paymentsData.count,
      revenue: paymentsData.total,
      revenueFormatted: formatMoney(paymentsData.total),
      topPages,
      sources,
      utmCampaigns,
      conversions: {
        visitToLead: visits > 0 ? ((leads / visits) * 100).toFixed(2) : 0,
        leadToPaid: leads > 0 ? ((paymentsData.count / leads) * 100).toFixed(2) : 0,
        visitToPaid: visits > 0 ? ((paymentsData.count / visits) * 100).toFixed(2) : 0,
        tgClickToStart: telegramClicks > 0 ? ((botStarts / telegramClicks) * 100).toFixed(2) : 0
      }
    });
  } catch (error) {
    console.error('Period stats error:', error);
    res.status(500).json({ error: 'Failed to get period stats' });
  }
});

// GET /api/reports/pages
// Детальная статистика по страницам
router.get('/pages', (req, res) => {
  try {
    const { from, to, limit = 50 } = req.query;
    
    let whereClause = "WHERE event_name = 'page_view' AND page_path IS NOT NULL";
    const params = [];
    
    if (from && to) {
      whereClause += ' AND created_at BETWEEN ? AND ?';
      params.push(new Date(from).toISOString(), new Date(to).toISOString());
    }
    
    const pages = db.all(`
      SELECT 
        page_path,
        COUNT(*) as views,
        COUNT(DISTINCT visitor_id) as unique_visitors,
        COUNT(DISTINCT session_id) as sessions
      FROM events 
      ${whereClause}
      GROUP BY page_path 
      ORDER BY views DESC 
      LIMIT ?
    `, ...params, parseInt(limit));
    
    res.json({ pages });
  } catch (error) {
    console.error('Pages stats error:', error);
    res.status(500).json({ error: 'Failed to get pages stats' });
  }
});

// GET /api/reports/funnel
// Воронка конверсии
router.get('/funnel', (req, res) => {
  try {
    const { from, to } = req.query;
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const fromDate = from ? new Date(from).toISOString() : today.toISOString();
    const toDate = to ? new Date(to).toISOString() : new Date().toISOString();
    
    const visits = db.get(`
      SELECT COUNT(*) as count FROM events 
      WHERE event_name = 'page_view' AND created_at BETWEEN ? AND ?
    `, fromDate, toDate)?.count || 0;
    
    const uniqueVisitors = db.get(`
      SELECT COUNT(DISTINCT visitor_id) as count FROM events 
      WHERE event_name = 'page_view' AND created_at BETWEEN ? AND ? AND visitor_id IS NOT NULL
    `, fromDate, toDate)?.count || 0;
    
    const telegramClicks = db.get(`
      SELECT COUNT(*) as count FROM events 
      WHERE event_name = 'telegram_click' AND created_at BETWEEN ? AND ?
    `, fromDate, toDate)?.count || 0;
    
    const botStarts = db.get(`
      SELECT COUNT(*) as count FROM events 
      WHERE event_name = 'telegram_bot_start' AND created_at BETWEEN ? AND ?
    `, fromDate, toDate)?.count || 0;
    
    const formOpened = db.get(`
      SELECT COUNT(*) as count FROM events 
      WHERE event_name = 'form_opened' AND created_at BETWEEN ? AND ?
    `, fromDate, toDate)?.count || 0;
    
    const leads = db.get(`
      SELECT COUNT(*) as count FROM leads WHERE created_at BETWEEN ? AND ?
    `, fromDate, toDate)?.count || 0;
    
    const payments = db.get(`
      SELECT COUNT(*) as count, COALESCE(SUM(amount), 0) as total FROM payments 
      WHERE status = 'paid' AND paid_at BETWEEN ? AND ?
    `, fromDate, toDate) || { count: 0, total: 0 };
    
    res.json({
      period: { from: fromDate, to: toDate },
      funnel: [
        { stage: 'visits', count: visits, label: 'Визиты' },
        { stage: 'unique_visitors', count: uniqueVisitors, label: 'Уники' },
        { stage: 'telegram_clicks', count: telegramClicks, label: 'Клики в TG' },
        { stage: 'bot_starts', count: botStarts, label: 'Заходы в бота' },
        { stage: 'form_opened', count: formOpened, label: 'Открыли форму' },
        { stage: 'leads', count: leads, label: 'Заявки' },
        { stage: 'payments', count: payments.count, label: 'Оплаты' }
      ],
      revenue: payments.total,
      revenueFormatted: formatMoney(payments.total)
    });
  } catch (error) {
    console.error('Funnel error:', error);
    res.status(500).json({ error: 'Failed to get funnel' });
  }
});

module.exports = router;
