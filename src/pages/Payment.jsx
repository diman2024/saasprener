// Страница оплаты
// /src/pages/Payment.jsx

import React from 'react';
import { ShieldCheck, Lock, CreditCard } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import PaymentForm from '../components/PaymentForm';

export default function Payment() {
  return (
    <>
      <SEOHead 
        title="Оплата — SAASPRENER"
        description="Безопасная оплата через ЮKassa"
        noIndex={true}
      />

      <div className="min-h-screen bg-[#0a0a0a]">
        {/* Header */}
        <div className="border-b border-zinc-800">
          <div className="max-w-4xl mx-auto px-6 py-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 mb-6">
              <Lock className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
                Безопасная оплата
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4">
              ОПЛАТА
            </h1>
            <p className="text-lg text-zinc-400">
              Заполните форму и перейдите к оплате
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-xl mx-auto px-6 py-16">
          {/* Payment Form */}
          <div className="bg-[#0d0d0d] border border-zinc-800 p-8 mb-8">
            <PaymentForm 
              defaultAmount={5000}
              description="Оплата услуги на SAASPRENER"
            />
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center text-center p-4 bg-[#0d0d0d] border border-zinc-800">
              <ShieldCheck className="w-8 h-8 text-emerald-500 mb-2" />
              <span className="text-xs text-zinc-400">SSL защита</span>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-[#0d0d0d] border border-zinc-800">
              <CreditCard className="w-8 h-8 text-emerald-500 mb-2" />
              <span className="text-xs text-zinc-400">ЮKassa</span>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-[#0d0d0d] border border-zinc-800">
              <Lock className="w-8 h-8 text-emerald-500 mb-2" />
              <span className="text-xs text-zinc-400">PCI DSS</span>
            </div>
          </div>

          {/* Info */}
          <div className="mt-8 p-6 bg-zinc-900/50 border border-zinc-800">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
              Как происходит оплата?
            </h3>
            <ol className="space-y-2 text-sm text-zinc-400">
              <li className="flex gap-3">
                <span className="text-emerald-500 font-bold">1.</span>
                Заполните форму и нажмите "Оплатить"
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-500 font-bold">2.</span>
                Вы перейдете на защищенную страницу ЮKassa
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-500 font-bold">3.</span>
                Введите данные карты и подтвердите оплату
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-500 font-bold">4.</span>
                Получите подтверждение на email
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}
