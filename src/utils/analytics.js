// SAASPRENER Analytics Client
// Модуль трекинга событий для фронтенда

const API_BASE = import.meta.env.VITE_API_URL || 'https://saasprener.online/api';

// Генерация уникального ID
function generateId(prefix = 'v') {
  return prefix + '_' + Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
}

// Получение или создание visitor ID
function getVisitorId() {
  let visitorId = localStorage.getItem('sp_visitor_id');
  if (!visitorId) {
    visitorId = generateId('v');
    localStorage.setItem('sp_visitor_id', visitorId);
  }
  return visitorId;
}

// Получение или создание session ID
function getSessionId() {
  let sessionId = sessionStorage.getItem('sp_session_id');
  if (!sessionId) {
    sessionId = generateId('s');
    sessionStorage.setItem('sp_session_id', sessionId);
  }
  return sessionId;
}

// Парсинг UTM параметров из URL
function getUTMParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get('utm_source'),
    utm_medium: params.get('utm_medium'),
    utm_campaign: params.get('utm_campaign'),
    utm_content: params.get('utm_content'),
    utm_term: params.get('utm_term')
  };
}

// Сохранение UTM в sessionStorage
function saveUTMParams() {
  const utm = getUTMParams();
  if (utm.utm_source) {
    sessionStorage.setItem('sp_utm', JSON.stringify(utm));
  }
}

// Получение сохранённых UTM
function getSavedUTM() {
  try {
    return JSON.parse(sessionStorage.getItem('sp_utm')) || {};
  } catch {
    return {};
  }
}

// Базовый трекинг события
async function trackEvent(eventName, data = {}) {
  try {
    const visitorId = getVisitorId();
    const sessionId = getSessionId();
    const utm = getSavedUTM();
    
    const eventData = {
      event_name: eventName,
      visitor_id: visitorId,
      session_id: sessionId,
      page_url: window.location.href,
      page_path: window.location.pathname,
      page_title: document.title,
      referrer: document.referrer,
      user_agent: navigator.userAgent,
      ...utm,
      ...data
    };
    
    // Используем sendBeacon для надёжной отправки
    if (navigator.sendBeacon) {
      const blob = new Blob([JSON.stringify(eventData)], { type: 'application/json' });
      navigator.sendBeacon(`${API_BASE}/tracking/event`, blob);
    } else {
      // Fallback на fetch
      fetch(`${API_BASE}/tracking/event`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(eventData),
        keepalive: true
      });
    }
    
    console.log(`📊 Track: ${eventName}`, data);
  } catch (error) {
    console.error('Analytics error:', error);
  }
}

// Трекинг просмотра страницы
function trackPageView() {
  saveUTMParams();
  trackEvent('page_view');
}

// Трекинг клика по Telegram ссылке
function trackTelegramClick(target = 'channel') {
  trackEvent('telegram_click', { target_type: 'telegram', target_value: target });
}

// Трекинг открытия формы
function trackFormOpened(formType = 'application') {
  trackEvent('form_opened', { target_type: 'form', target_value: formType });
}

// Трекинг отправки формы
function trackFormSubmitted(formType = 'application') {
  trackEvent('form_submitted', { target_type: 'form', target_value: formType });
}

// Трекинг CTA клика
function trackCtaClick(ctaName) {
  trackEvent('cta_click', { target_type: 'cta', target_value: ctaName });
}

// Отправка заявки на бэкенд
async function submitLead(leadData) {
  try {
    const visitorId = getVisitorId();
    const sessionId = getSessionId();
    const utm = getSavedUTM();
    
    const payload = {
      ...leadData,
      visitor_id: visitorId,
      session_id: sessionId,
      source_page: window.location.pathname,
      source_type: 'form',
      ...utm
    };
    
    const response = await fetch(`${API_BASE}/leads/create`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    
    const result = await response.json();
    
    if (result.success) {
      console.log('✅ Lead submitted:', result.lead_id);
      
      // Также трекаем событие
      trackEvent('lead_created', { 
        lead_id: result.lead_id,
        duplicate: result.duplicate || false
      });
    }
    
    return result;
  } catch (error) {
    console.error('Lead submission error:', error);
    throw error;
  }
}

// Генерация deep link для Telegram бота
function getTelegramDeepLink() {
  const visitorId = getVisitorId();
  const utm = getSavedUTM();
  const page = window.location.pathname.replace(/\//g, '-').substring(0, 20);
  
  // Формат: visitorId_source_utmSource_utmCampaign_page
  const payload = [
    visitorId.substring(0, 12),
    'site',
    utm.utm_source || 'd',
    utm.utm_campaign || 'd',
    page || 'home'
  ].join('_');
  
  // Замените на реальный username бота
  const botUsername = 'saasprener_bot';
  
  return `https://t.me/${botUsername}?start=${payload}`;
}

// Обёртка для Telegram ссылок с трекингом
function wrapTelegramLinks() {
  document.querySelectorAll('a[href*="t.me"]').forEach(link => {
    if (link.dataset.tracked) return;
    link.dataset.tracked = 'true';
    
    link.addEventListener('click', () => {
      const href = link.getAttribute('href');
      const isBot = href.includes('?start') || href.includes('saasprener_bot');
      trackTelegramClick(isBot ? 'bot' : 'channel');
    });
  });
}

// Автоматическая инициализация
function init() {
  // Трекаем просмотр при загрузке
  if (document.readyState === 'complete') {
    trackPageView();
    wrapTelegramLinks();
  } else {
    window.addEventListener('load', () => {
      trackPageView();
      wrapTelegramLinks();
    });
  }
  
  // Трекаем при SPA навигации
  window.addEventListener('popstate', trackPageView);
}

// Экспорт
export {
  trackEvent,
  trackPageView,
  trackTelegramClick,
  trackFormOpened,
  trackFormSubmitted,
  trackCtaClick,
  submitLead,
  getVisitorId,
  getSessionId,
  getSavedUTM,
  getTelegramDeepLink,
  wrapTelegramLinks,
  init
};

// Автоинициализация
init();
