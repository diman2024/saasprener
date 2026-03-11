// Роут платежей
const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const db = require('../models/database');
const telegramBot = require('../services/telegramBot');

// POST /api/payments/create
// Создание платежа (когда выставляется счёт)
router.post('/create', (req, res) => {
  try {
    const {
      lead_id,
      amount,
      currency = 'RUB',
      payment_type = 'full', // full | prepayment
      provider = 'manual'
    } = req.body;
    
    if (!amount || amount <= 0) {
      return res.status(400).json({ error: 'Valid amount required' });
    }
    
    const payment_id = uuidv4();
    const now = new Date().toISOString();
    
    db.insertPayment.run(
      payment_id,
      lead_id || null,
      provider,
      parseInt(amount),
      currency,
      payment_type,
      'pending',
      now,
      JSON.stringify(req.body)
    );
    
    // Событие
    db.insertEvent.run(
      'payment_created',
      null,
      null,
      null,
      lead_id || null,
      payment_id,
      null,
      null,
      null,
      null,
      null,
      JSON.stringify({ amount, payment_type, provider }),
      now
    );
    
    console.log(`💳 Payment created: ${payment_id}, amount: ${amount}`);
    
    res.json({ success: true, payment_id });
  } catch (error) {
    console.error('Payment creation error:', error);
    res.status(500).json({ error: 'Failed to create payment' });
  }
});

// POST /api/payments/webhook
// Webhook от платёжной системы
router.post('/webhook', async (req, res) => {
  try {
    const {
      payment_id,
      transaction_id,
      status,
      amount,
      provider
    } = req.body;
    
    // Проверка идемпотентности
    const existing = db.getPayment.get(payment_id);
    if (existing && existing.status === 'paid') {
      console.log(`⚠️ Payment already processed: ${payment_id}`);
      return res.json({ success: true, already_processed: true });
    }
    
    const now = new Date().toISOString();
    
    if (status === 'paid' || status === 'success' || status === 'completed') {
      db.updatePaymentStatus.run('paid', now, transaction_id || null, payment_id);
      
      // Обновляем статус лида
      if (existing?.lead_id) {
        db.updateLeadStatus.run('paid', now, existing.lead_id);
      }
      
      // Событие
      db.insertEvent.run(
        'payment_paid',
        null,
        null,
        null,
        existing?.lead_id || null,
        payment_id,
        null,
        null,
        null,
        null,
        null,
        JSON.stringify({ amount: existing?.amount || amount, provider }),
        now
      );
      
      console.log(`✅ Payment paid: ${payment_id}`);
      
      // Уведомление в Telegram
      const lead = existing?.lead_id ? db.getLead.get(existing.lead_id) : null;
      await telegramBot.notifyPayment({
        payment_id,
        amount: existing?.amount || amount,
        payment_type: existing?.payment_type,
        provider: existing?.provider || provider,
        lead_id: existing?.lead_id
      }, lead);
    } else if (status === 'failed' || status === 'cancelled') {
      db.updatePaymentStatus.run('failed', now, transaction_id || null, payment_id);
    }
    
    res.json({ success: true });
  } catch (error) {
    console.error('Payment webhook error:', error);
    res.status(500).json({ error: 'Webhook processing failed' });
  }
});

// POST /api/payments/mark-paid
// Ручная отметка об оплате
router.post('/mark-paid', async (req, res) => {
  try {
    const { payment_id, transaction_id } = req.body;
    
    if (!payment_id) {
      return res.status(400).json({ error: 'payment_id required' });
    }
    
    const existing = db.getPayment.get(payment_id);
    if (!existing) {
      return res.status(404).json({ error: 'Payment not found' });
    }
    
    if (existing.status === 'paid') {
      return res.json({ success: true, already_processed: true });
    }
    
    const now = new Date().toISOString();
    
    db.updatePaymentStatus.run('paid', now, transaction_id || 'manual', payment_id);
    
    if (existing.lead_id) {
      db.updateLeadStatus.run('paid', now, existing.lead_id);
    }
    
    // Событие
    db.insertEvent.run(
      'payment_paid',
      null,
      null,
      null,
      existing.lead_id || null,
      payment_id,
      null,
      null,
      null,
      null,
      null,
      JSON.stringify({ amount: existing.amount, manual: true }),
      now
    );
    
    console.log(`✅ Payment manually marked as paid: ${payment_id}`);
    
    // Уведомление
    const lead = existing.lead_id ? db.getLead.get(existing.lead_id) : null;
    await telegramBot.notifyPayment({
      payment_id,
      amount: existing.amount,
      payment_type: existing.payment_type,
      provider: 'manual',
      lead_id: existing.lead_id
    }, lead);
    
    res.json({ success: true });
  } catch (error) {
    console.error('Mark paid error:', error);
    res.status(500).json({ error: 'Failed to mark as paid' });
  }
});

// GET /api/payments/:id
router.get('/:id', (req, res) => {
  try {
    const payment = db.getPayment.get(req.params.id);
    
    if (!payment) {
      return res.status(404).json({ error: 'Payment not found' });
    }
    
    res.json(payment);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get payment' });
  }
});

// GET /api/payments
router.get('/', (req, res) => {
  try {
    const { limit = 50, status } = req.query;
    
    let sql = 'SELECT * FROM payments';
    const params = [];
    
    if (status) {
      sql += ' WHERE status = ?';
      params.push(status);
    }
    
    sql += ' ORDER BY created_at DESC LIMIT ?';
    params.push(parseInt(limit));
    
    const payments = db.all(sql, ...params);
    res.json({ payments });
  } catch (error) {
    res.status(500).json({ error: 'Failed to list payments' });
  }
});

module.exports = router;
