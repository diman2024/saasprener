// Роут трекинга событий
const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const crypto = require('crypto');
const db = require('../models/database');

// Хеширование IP
function hashIP(ip) {
  if (!ip) return null;
  return crypto.createHash('sha256').update(ip + process.env.API_SECRET_KEY).digest('hex').substring(0, 16);
}

// POST /api/tracking/event
// Универсальный endpoint для всех событий
router.post('/event', (req, res) => {
  try {
    const {
      event_name,
      visitor_id,
      session_id,
      page_url,
      page_path,
      page_title,
      referrer,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_content,
      utm_term,
      target_type,
      target_value,
      user_agent,
      payload
    } = req.body;
    
    if (!event_name) {
      return res.status(400).json({ error: 'event_name required' });
    }
    
    const now = new Date().toISOString();
    const ipHash = hashIP(req.ip || req.headers['x-forwarded-for']);
    
    // Upsert visitor
    if (visitor_id) {
      db.upsertVisitor.run(
        visitor_id,
        now,
        now,
        referrer || null,
        utm_source || null,
        utm_medium || null,
        utm_campaign || null,
        utm_content || null,
        utm_term || null
      );
    }
    
    // Insert/update session для page_view
    if (event_name === 'page_view' && session_id) {
      const existingSession = db.getSession.get(session_id);
      if (!existingSession) {
        db.insertSession.run(
          session_id,
          visitor_id,
          now,
          page_path || page_url,
          referrer || null,
          utm_source || null,
          utm_medium || null,
          utm_campaign || null,
          utm_content || null,
          utm_term || null,
          user_agent || req.headers['user-agent'] || null,
          ipHash
        );
      }
    }
    
    // Insert event
    db.insertEvent.run(
      event_name,
      visitor_id || null,
      session_id || null,
      null, // telegram_user_id
      null, // lead_id
      null, // payment_id
      page_url || null,
      page_path || null,
      page_title || null,
      target_type || null,
      target_value || null,
      payload ? JSON.stringify(payload) : null,
      now
    );
    
    res.json({ success: true, timestamp: now });
  } catch (error) {
    console.error('Tracking error:', error);
    res.status(500).json({ error: 'Tracking failed' });
  }
});

// POST /api/tracking/batch
// Пакетная отправка событий
router.post('/batch', (req, res) => {
  try {
    const { events } = req.body;
    
    if (!Array.isArray(events)) {
      return res.status(400).json({ error: 'events array required' });
    }
    
    const now = new Date().toISOString();
    const ipHash = hashIP(req.ip || req.headers['x-forwarded-for']);
    
    let processed = 0;
    
    for (const event of events) {
      try {
        if (event.visitor_id) {
          db.upsertVisitor.run(
            event.visitor_id,
            now,
            now,
            event.referrer || null,
            event.utm_source || null,
            event.utm_medium || null,
            event.utm_campaign || null,
            event.utm_content || null,
            event.utm_term || null
          );
        }
        
        db.insertEvent.run(
          event.event_name,
          event.visitor_id || null,
          event.session_id || null,
          null,
          null,
          null,
          event.page_url || null,
          event.page_path || null,
          event.page_title || null,
          event.target_type || null,
          event.target_value || null,
          event.payload ? JSON.stringify(event.payload) : null,
          event.timestamp || now
        );
        
        processed++;
      } catch (e) {
        console.error('Batch event error:', e);
      }
    }
    
    res.json({ success: true, processed });
  } catch (error) {
    console.error('Batch tracking error:', error);
    res.status(500).json({ error: 'Batch tracking failed' });
  }
});

// GET /api/tracking/stats
// Получение базовой статистики
router.get('/stats', (req, res) => {
  try {
    const { from, to } = req.query;
    
    const fromDate = from || new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
    const toDate = to || new Date().toISOString();
    
    const pageViews = db.get(`
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
    
    res.json({
      period: { from: fromDate, to: toDate },
      pageViews,
      uniqueVisitors,
      telegramClicks,
      botStarts
    });
  } catch (error) {
    console.error('Stats error:', error);
    res.status(500).json({ error: 'Failed to get stats' });
  }
});

module.exports = router;
