import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Article from './pages/Article';
import Cases from './pages/Cases';
import Case from './pages/Case';
import Hub from './pages/Hub';
import Payment from './pages/Payment';
import PaymentSuccess from './pages/PaymentSuccess';
import { trackPageView } from './utils/analytics';

// Компонент для прокрутки наверх и трекинга при переходе между страницами
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
    // Трекаем просмотр страницы при SPA-навигации
    trackPageView();
  }, [pathname, hash]);

  return null;
}

// Компонент 404
function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-6xl font-black text-white mb-4">404</h1>
      <p className="text-xl text-zinc-400 mb-8">Страница не найдена</p>
      <a 
        href="/"
        className="bg-emerald-500 text-zinc-950 px-8 py-4 font-black uppercase tracking-widest hover:bg-emerald-400 transition-colors"
      >
        На главную
      </a>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          {/* Главная страница */}
          <Route path="/" element={<Home />} />
          
          {/* Блог */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Article />} />
          
          {/* Кейсы */}
          <Route path="/cases" element={<Cases />} />
          <Route path="/cases/:slug" element={<Case />} />
          
          {/* Хаб-страницы */}
          <Route path="/hub/:slug" element={<Hub />} />
          
          {/* Оплата */}
          <Route path="/payment" element={<Payment />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          
          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
