#!/usr/bin/env node
/**
 * Скрипт пререндеринга для генерации статического HTML
 * Запускает локальный сервер и сохраняет HTML каждой страницы
 */

import puppeteer from 'puppeteer';
import { preview } from 'vite';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, '../dist');

// Список маршрутов для пререндеринга
const routes = [
  '/',
  '/blog',
  '/cases',
  '/payment',
  '/payment-success',
  // Статьи
  '/blog/sozdavay-saas-biznes-v-odinochku',
  '/blog/moy-pervyy-it-proekt-i-glavnaya-oshibka',
  '/blog/kak-prodvigat-saas-servis',
  '/blog/ai-instrumenty-dlya-razrabotki',
  '/blog/pochemu-ne-nuzhna-komanda',
  '/blog/kak-sdelat-pervuyu-prodazhu',
  // Кейсы
  '/cases/fiveads',
  '/cases/synapse',
  '/cases/saasprener',
  // Хабы
  '/hub/saas-razrabotka',
  '/hub/zapusk-it-proekta',
  '/hub/zarabotok-na-saas',
  '/hub/ai-v-razrabotke'
];

async function prerender() {
  console.log('🚀 Запуск пререндеринга...\n');

  // Запускаем preview сервер для собранного билда
  const server = await preview({
    preview: { port: 4567, host: true }
  });
  
  const baseUrl = `http://localhost:4567`;
  console.log(`📦 Preview сервер запущен на ${baseUrl}\n`);

  // Запускаем браузер
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  
  // Устанавливаем user-agent Googlebot для тестирования
  await page.setUserAgent('Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)');

  let successCount = 0;
  let errorCount = 0;

  for (const route of routes) {
    try {
      console.log(`📄 Рендеринг: ${route}`);
      
      await page.goto(`${baseUrl}${route}`, {
        waitUntil: 'networkidle0',
        timeout: 30000
      });

      // Ждем событие render-event или 2 секунды
      await page.waitForFunction(() => {
        return document.querySelector('main') || 
               document.querySelector('[data-prerendered]') ||
               document.readyState === 'complete';
      }, { timeout: 5000 }).catch(() => {});

      // Дополнительная пауза для загрузки динамического контента
      await new Promise(r => setTimeout(r, 1000));

      // Получаем HTML
      const html = await page.content();

      // Определяем путь для сохранения
      const filePath = route === '/' 
        ? path.join(distDir, 'index.html')
        : path.join(distDir, route, 'index.html');

      // Создаем директорию если нужно
      await fs.mkdir(path.dirname(filePath), { recursive: true });
      
      // Добавляем маркер пререндеринга
      const markedHtml = html.replace(
        '<div id="root">',
        '<div id="root" data-prerendered="true">'
      );
      
      // Сохраняем HTML
      await fs.writeFile(filePath, markedHtml, 'utf-8');
      
      console.log(`   ✅ Сохранено: ${filePath}`);
      successCount++;
      
    } catch (error) {
      console.error(`   ❌ Ошибка ${route}: ${error.message}`);
      errorCount++;
    }
  }

  await browser.close();
  await server.close();

  console.log('\n-----------------------------------');
  console.log(`✅ Успешно: ${successCount}`);
  console.log(`❌ Ошибки: ${errorCount}`);
  console.log('-----------------------------------\n');
  
  if (errorCount > 0) {
    process.exit(1);
  }
}

prerender().catch(error => {
  console.error('Критическая ошибка:', error);
  process.exit(1);
});
