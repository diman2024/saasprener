import React from 'react';
import { Link } from 'react-router-dom';
import { Send } from 'lucide-react';

// Компонент подвала сайта
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    platform: [
      { href: '/#about', label: 'О методе' },
      { href: '/cases', label: 'Кейсы' },
      { href: '/blog', label: 'Блог' },
      { href: '/#program', label: 'Обучение' },
      { href: '/#price', label: 'Цены' },
    ],
    topics: [
      { href: '/hub/saas-razrabotka', label: 'SaaS-разработка' },
      { href: '/hub/zapusk-it-proekta', label: 'Запуск IT-проекта' },
      { href: '/hub/zarabotok-na-saas', label: 'Заработок на SaaS' },
      { href: '/hub/ai-v-razrabotke', label: 'AI в разработке' },
      { href: '/hub/arhitektura-servisov', label: 'Архитектура сервисов' },
    ],
    resources: [
      { href: '/blog/sozdavay-saas-biznes-v-odinochku', label: 'Как создать SaaS' },
      { href: '/blog/kak-odnomu-cheloveku-zapustit-it-proekt', label: 'Запуск без команды' },
      { href: '/blog/kak-ai-pomogaet-zapuskat-servisy-bystree', label: 'AI для разработки' },
    ]
  };

  return (
    <footer className="bg-[#050505] border-t border-zinc-900">
      {/* Основной контент футера */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Логотип и описание */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="12" height="12" className="fill-emerald-500" />
                <rect x="18" y="2" width="12" height="12" className="fill-white opacity-30" />
                <rect x="18" y="18" width="12" height="12" className="fill-emerald-500" />
                <path d="M2 30V18H14L2 30Z" className="fill-white opacity-30" />
              </svg>
              <span className="font-black text-xl text-white tracking-widest uppercase">
                SAAS<span className="text-emerald-500">ПРЕНЕР</span>
              </span>
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed mb-6">
              Веб-кодинг для предпринимателей. Учу создавать SaaS-сервисы и онлайн-продукты без команды.
            </p>
            <a 
              href="https://t.me/saasprener" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-emerald-500 hover:text-emerald-400 transition-colors text-sm font-bold uppercase tracking-wider"
            >
              <Send className="w-4 h-4" />
              Telegram-канал
            </a>
          </div>

          {/* Платформа */}
          <div>
            <h4 className="font-black text-white uppercase tracking-widest text-sm mb-6">
              Платформа
            </h4>
            <ul className="space-y-3">
              {footerLinks.platform.map(link => (
                <li key={link.href}>
                  <Link 
                    to={link.href}
                    className="text-zinc-500 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Темы */}
          <div>
            <h4 className="font-black text-white uppercase tracking-widest text-sm mb-6">
              Темы
            </h4>
            <ul className="space-y-3">
              {footerLinks.topics.map(link => (
                <li key={link.href}>
                  <Link 
                    to={link.href}
                    className="text-zinc-500 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Полезное */}
          <div>
            <h4 className="font-black text-white uppercase tracking-widest text-sm mb-6">
              Полезное
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map(link => (
                <li key={link.href}>
                  <Link 
                    to={link.href}
                    className="text-zinc-500 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Нижняя часть футера */}
      <div className="border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-xs font-bold uppercase tracking-widest">
            © {currentYear} SAASPRENER. Все права защищены.
          </p>
          <p className="text-zinc-700 text-xs">
            Обучение веб-кодингу для предпринимателей
          </p>
        </div>
      </div>
    </footer>
  );
}
