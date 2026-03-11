import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Send } from 'lucide-react';

// Компонент навигации
export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Закрываем меню при переходе на другую страницу
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Отслеживаем скролл для изменения стиля навигации
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/#about', label: 'Метод' },
    { href: '/cases', label: 'Кейсы' },
    { href: '/blog', label: 'Блог' },
    { href: '/#program', label: 'Обучение' },
  ];

  const isHomePage = location.pathname === '/';

  // Обработка якорных ссылок
  const handleNavClick = (e, href) => {
    if (href.startsWith('/#')) {
      if (isHomePage) {
        e.preventDefault();
        const element = document.querySelector(href.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#0a0a0a]/95 shadow-lg' : 'bg-[#0a0a0a]/90'
    } backdrop-blur-md border-b border-zinc-800`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        {/* Логотип */}
        <Link to="/" className="flex items-center gap-3">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="12" height="12" className="fill-emerald-500" />
            <rect x="18" y="2" width="12" height="12" className="fill-white" />
            <rect x="18" y="18" width="12" height="12" className="fill-emerald-500" />
            <path d="M2 30V18H14L2 30Z" className="fill-white" />
          </svg>
          <span className="font-black text-xl text-white tracking-widest uppercase">
            SAAS<span className="text-emerald-500">ПРЕНЕР</span>
          </span>
        </Link>

        {/* Десктопное меню */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            link.href.startsWith('/#') ? (
              <a 
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-bold tracking-widest uppercase hover:text-emerald-400 transition-colors"
              >
                {link.label}
              </a>
            ) : (
              <Link 
                key={link.href}
                to={link.href}
                className={`text-sm font-bold tracking-widest uppercase hover:text-emerald-400 transition-colors ${
                  location.pathname.startsWith(link.href) ? 'text-emerald-400' : ''
                }`}
              >
                {link.label}
              </Link>
            )
          ))}
          
          {/* Telegram */}
          <a
            href="https://t.me/saasprener"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-emerald-400 transition-colors"
            title="Telegram-канал"
          >
            <Send className="w-5 h-5" />
          </a>
          
          <Link 
            to="/#price"
            onClick={(e) => handleNavClick(e, '/#price')}
            className="bg-white text-zinc-950 hover:bg-emerald-400 px-6 py-2 rounded-none text-sm font-black uppercase tracking-widest transition-all"
          >
            Старт
          </Link>
        </div>

        {/* Мобильная кнопка меню */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </button>
      </div>

      {/* Мобильное меню */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${
        isMenuOpen ? 'max-h-96' : 'max-h-0'
      }`}>
        <div className="px-6 py-4 bg-[#0a0a0a] border-t border-zinc-800">
          {navLinks.map(link => (
            link.href.startsWith('/#') ? (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block py-3 text-sm font-bold tracking-widest uppercase hover:text-emerald-400 transition-colors"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                to={link.href}
                className={`block py-3 text-sm font-bold tracking-widest uppercase hover:text-emerald-400 transition-colors ${
                  location.pathname.startsWith(link.href) ? 'text-emerald-400' : ''
                }`}
              >
                {link.label}
              </Link>
            )
          ))}
          
          {/* Telegram в мобильном меню */}
          <a
            href="https://t.me/saasprener"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 py-3 text-sm font-bold tracking-widest uppercase text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <Send className="w-4 h-4" />
            Telegram-канал
          </a>
          
          <Link 
            to="/#price"
            onClick={(e) => handleNavClick(e, '/#price')}
            className="block mt-4 bg-emerald-500 text-zinc-950 px-6 py-3 text-center text-sm font-black uppercase tracking-widest"
          >
            Записаться
          </Link>
        </div>
      </div>
    </nav>
  );
}
