// Модуль базы данных SQLite
const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');

const DB_PATH = process.env.DATABASE_PATH || './data/analytics.db';

// Создаём папку для БД если её нет
const dbDir = path.dirname(DB_PATH);
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

const db = new Database(DB_PATH);
db.pragma('journal_mode = WAL');

// Инициализация таблиц
function initialize() {
  // Таблица посетителей
  db.exec(`
    CREATE TABLE IF NOT EXISTS visitors (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      visitor_id TEXT UNIQUE NOT NULL,
      first_seen_at TEXT NOT NULL,
      last_seen_at TEXT NOT NULL,
      first_referrer TEXT,
      first_utm_source TEXT,
      first_utm_medium TEXT,
      first_utm_campaign TEXT,
      first_utm_content TEXT,
      first_utm_term TEXT
    )
  `);

  // Таблица сессий
  db.exec(`
    CREATE TABLE IF NOT EXISTS sessions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      session_id TEXT UNIQUE NOT NULL,
      visitor_id TEXT NOT NULL,
      started_at TEXT NOT NULL,
      ended_at TEXT,
      landing_page TEXT,
      referrer TEXT,
      utm_source TEXT,
      utm_medium TEXT,
      utm_campaign TEXT,
      utm_content TEXT,
      utm_term TEXT,
      user_agent TEXT,
      ip_hash TEXT
    )
  `);

  // Таблица событий
  db.exec(`
    CREATE TABLE IF NOT EXISTS events (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      event_name TEXT NOT NULL,
      visitor_id TEXT,
      session_id TEXT,
      telegram_user_id TEXT,
      lead_id TEXT,
      payment_id TEXT,
      page_url TEXT,
      page_path TEXT,
      page_title TEXT,
      target_type TEXT,
      target_value TEXT,
      payload TEXT,
      created_at TEXT NOT NULL
    )
  `);

  // Таблица лидов
  db.exec(`
    CREATE TABLE IF NOT EXISTS leads (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      lead_id TEXT UNIQUE NOT NULL,
      name TEXT,
      phone TEXT,
      telegram_username TEXT,
      email TEXT,
      idea TEXT,
      level TEXT,
      status TEXT DEFAULT 'new',
      source_page TEXT,
      source_type TEXT,
      visitor_id TEXT,
      session_id TEXT,
      utm_source TEXT,
      utm_medium TEXT,
      utm_campaign TEXT,
      utm_content TEXT,
      utm_term TEXT,
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL
    )
  `);

  // Таблица платежей
  db.exec(`
    CREATE TABLE IF NOT EXISTS payments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      payment_id TEXT UNIQUE NOT NULL,
      lead_id TEXT,
      provider TEXT,
      amount INTEGER,
      currency TEXT DEFAULT 'RUB',
      payment_type TEXT,
      status TEXT DEFAULT 'pending',
      provider_transaction_id TEXT,
      created_at TEXT NOT NULL,
      paid_at TEXT,
      raw_payload TEXT
    )
  `);

  // Таблица Telegram пользователей
  db.exec(`
    CREATE TABLE IF NOT EXISTS telegram_users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      telegram_user_id TEXT UNIQUE NOT NULL,
      username TEXT,
      first_name TEXT,
      last_name TEXT,
      started_bot_at TEXT NOT NULL,
      start_payload TEXT,
      linked_visitor_id TEXT,
      utm_source TEXT,
      utm_campaign TEXT,
      source_page TEXT,
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL
    )
  `);

  // Таблица логов отчётов
  db.exec(`
    CREATE TABLE IF NOT EXISTS daily_report_logs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      report_date TEXT NOT NULL,
      sent_at TEXT NOT NULL,
      target_chat_id TEXT,
      payload TEXT,
      status TEXT,
      error_message TEXT
    )
  `);

  // Индексы для быстрых запросов
  db.exec(`
    CREATE INDEX IF NOT EXISTS idx_events_created_at ON events(created_at);
    CREATE INDEX IF NOT EXISTS idx_events_event_name ON events(event_name);
    CREATE INDEX IF NOT EXISTS idx_events_visitor_id ON events(visitor_id);
    CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at);
    CREATE INDEX IF NOT EXISTS idx_payments_status ON payments(status);
    CREATE INDEX IF NOT EXISTS idx_payments_paid_at ON payments(paid_at);
  `);

  console.log('📦 Database tables created');
}

// ВАЖНО: Инициализация должна быть ДО создания prepared statements
initialize();

// Экспорт
module.exports = {
  db,
  initialize,
  
  // Helpers - принимают SQL и произвольное число параметров
  run: (sql, ...params) => db.prepare(sql).run(...params),
  get: (sql, ...params) => db.prepare(sql).get(...params),
  all: (sql, ...params) => db.prepare(sql).all(...params),
  
  // Visitors
  upsertVisitor: db.prepare(`
    INSERT INTO visitors (visitor_id, first_seen_at, last_seen_at, first_referrer, first_utm_source, first_utm_medium, first_utm_campaign, first_utm_content, first_utm_term)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    ON CONFLICT(visitor_id) DO UPDATE SET last_seen_at = excluded.last_seen_at
  `),
  
  getVisitor: db.prepare('SELECT * FROM visitors WHERE visitor_id = ?'),
  
  // Sessions
  insertSession: db.prepare(`
    INSERT INTO sessions (session_id, visitor_id, started_at, landing_page, referrer, utm_source, utm_medium, utm_campaign, utm_content, utm_term, user_agent, ip_hash)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `),
  
  getSession: db.prepare('SELECT * FROM sessions WHERE session_id = ?'),
  
  // Events
  insertEvent: db.prepare(`
    INSERT INTO events (event_name, visitor_id, session_id, telegram_user_id, lead_id, payment_id, page_url, page_path, page_title, target_type, target_value, payload, created_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `),
  
  // Leads
  insertLead: db.prepare(`
    INSERT INTO leads (lead_id, name, phone, telegram_username, email, idea, level, status, source_page, source_type, visitor_id, session_id, utm_source, utm_medium, utm_campaign, utm_content, utm_term, created_at, updated_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `),
  
  getLead: db.prepare('SELECT * FROM leads WHERE lead_id = ?'),
  getLeadByContact: db.prepare(`SELECT * FROM leads WHERE (phone = ? OR telegram_username = ? OR email = ?) AND created_at > datetime('now', '-1 hour')`),
  updateLeadStatus: db.prepare('UPDATE leads SET status = ?, updated_at = ? WHERE lead_id = ?'),
  
  // Payments
  insertPayment: db.prepare(`
    INSERT INTO payments (payment_id, lead_id, provider, amount, currency, payment_type, status, created_at, raw_payload)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `),
  
  getPayment: db.prepare('SELECT * FROM payments WHERE payment_id = ?'),
  updatePaymentStatus: db.prepare('UPDATE payments SET status = ?, paid_at = ?, provider_transaction_id = ? WHERE payment_id = ?'),
  
  // Telegram users
  upsertTelegramUser: db.prepare(`
    INSERT INTO telegram_users (telegram_user_id, username, first_name, last_name, started_bot_at, start_payload, linked_visitor_id, utm_source, utm_campaign, source_page, created_at, updated_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    ON CONFLICT(telegram_user_id) DO UPDATE SET 
      username = excluded.username,
      first_name = excluded.first_name,
      last_name = excluded.last_name,
      updated_at = excluded.updated_at
  `),
  
  getTelegramUser: db.prepare('SELECT * FROM telegram_users WHERE telegram_user_id = ?'),
  
  // Report logs
  insertReportLog: db.prepare(`
    INSERT INTO daily_report_logs (report_date, sent_at, target_chat_id, payload, status, error_message)
    VALUES (?, ?, ?, ?, ?, ?)
  `)
};
