// Роут лидов (заявок)
const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const db = require('../models/database');
const telegramBot = require('../services/telegramBot');

// POST /api/leads/create
// Создание новой заявки
router.post('/create', async (req, res) => {
  try {
    const {
      name,
      phone,
      telegram,
      email,
      idea,
      level,
      source_page,
      source_type,
      visitor_id,
      session_id,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_content,
      utm_term
    } = req.body;
    
    // Валидация
    if (!name && !phone && !telegram && !email) {
      return res.status(400).json({ error: 'At least one contact field required' });
    }
    
    // Проверка дубликатов (за последний час) - для пометки "повторно"
    const existing = db.getLeadByContact.get(
      phone || '',
      telegram || '',
      email || ''
    );
    
    const isDuplicate = !!existing;
    if (isDuplicate) {
      console.log(`⚠️ Repeat lead from same contact: ${existing.lead_id}`);
    }
    
    const lead_id = uuidv4();
    const now = new Date().toISOString();
    
    // Создаём лид
    db.insertLead.run(
      lead_id,
      name || null,
      phone || null,
      telegram || null,
      email || null,
      idea || null,
      level || null,
      'new',
      source_page || '/',
      source_type || 'form',
      visitor_id || null,
      session_id || null,
      utm_source || null,
      utm_medium || null,
      utm_campaign || null,
      utm_content || null,
      utm_term || null,
      now,
      now
    );
    
    // Событие
    db.insertEvent.run(
      'lead_created',
      visitor_id || null,
      session_id || null,
      null,
      lead_id,
      null,
      null,
      source_page || '/',
      null,
      null,
      null,
      JSON.stringify({ name, phone, telegram, email }),
      now
    );
    
    console.log(`✅ Lead created: ${lead_id}${isDuplicate ? ' (repeat)' : ''}`);
    
    // Уведомление в Telegram
    const lead = {
      lead_id,
      name,
      phone,
      telegram_username: telegram,
      email,
      idea,
      level,
      source_page,
      source_type,
      utm_source,
      utm_medium,
      utm_campaign,
      is_repeat: isDuplicate,
      previous_lead_id: isDuplicate ? existing.lead_id : null
    };
    
    await telegramBot.notifyNewLead(lead);
    
    res.json({ success: true, lead_id, is_repeat: isDuplicate });
  } catch (error) {
    console.error('Lead creation error:', error);
    res.status(500).json({ error: 'Failed to create lead' });
  }
});

// GET /api/leads/:id
// Получение информации о лиде
router.get('/:id', (req, res) => {
  try {
    const lead = db.getLead.get(req.params.id);
    
    if (!lead) {
      return res.status(404).json({ error: 'Lead not found' });
    }
    
    res.json(lead);
  } catch (error) {
    console.error('Get lead error:', error);
    res.status(500).json({ error: 'Failed to get lead' });
  }
});

// PATCH /api/leads/:id/status
// Обновление статуса лида
router.patch('/:id/status', (req, res) => {
  try {
    const { status } = req.body;
    const validStatuses = ['new', 'contacted', 'qualified', 'paid', 'rejected'];
    
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ error: 'Invalid status' });
    }
    
    const now = new Date().toISOString();
    db.updateLeadStatus.run(status, now, req.params.id);
    
    res.json({ success: true });
  } catch (error) {
    console.error('Update status error:', error);
    res.status(500).json({ error: 'Failed to update status' });
  }
});

// GET /api/leads
// Список лидов
router.get('/', (req, res) => {
  try {
    const { limit = 50, offset = 0, status } = req.query;
    
    let sql = 'SELECT * FROM leads';
    const params = [];
    
    if (status) {
      sql += ' WHERE status = ?';
      params.push(status);
    }
    
    sql += ' ORDER BY created_at DESC LIMIT ? OFFSET ?';
    params.push(parseInt(limit), parseInt(offset));
    
    const leads = db.all(sql, ...params);
    const total = db.get('SELECT COUNT(*) as count FROM leads')?.count || 0;
    
    res.json({ leads, total, limit: parseInt(limit), offset: parseInt(offset) });
  } catch (error) {
    console.error('List leads error:', error);
    res.status(500).json({ error: 'Failed to list leads' });
  }
});

module.exports = router;
