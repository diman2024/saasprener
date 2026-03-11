import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

// Компонент-обертка для всех страниц
export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-300 font-sans selection:bg-emerald-500 selection:text-white">
      <Navigation />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}
