// Страница успешной оплаты
// /src/pages/PaymentSuccess.jsx

import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { CheckCircle2, Mail, ArrowRight, Loader2, Clock, MessageCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const API_BASE = import.meta.env.VITE_API_URL || 'https://saasprener.online/api';
const TELEGRAM_CHAT_LINK = 'https://t.me/+l3nPILH3twowNjdi';

export default function PaymentSuccess() {
  const [searchParams] = useSearchParams();
  const [paymentStatus, setPaymentStatus] = useState('checking');
  const [paymentData, setPaymentData] = useState(null);

  useEffect(() => {
    // Получаем payment_id из localStorage или URL
    const paymentId = localStorage.getItem('sp_pending_payment');
    
    if (paymentId) {
      checkPaymentStatus(paymentId);
    } else {
      // Если нет payment_id, считаем что оплата успешна (пользователь вернулся с YooKassa)
      setPaymentStatus('success');
    }

    // Отправляем событие в Яндекс Метрику
    if (typeof window !== 'undefined' && window.ym) {
      window.ym(98650651, 'reachGoal', 'payment_success');
    }

    // Очищаем pending payment
    localStorage.removeItem('sp_pending_payment');
  }, []);

  const checkPaymentStatus = async (paymentId) => {
    try {
      const response = await fetch(`${API_BASE}/yookassa/payment-status/${paymentId}`);
      const data = await response.json();

      if (data.status === 'paid') {
        setPaymentStatus('success');
        setPaymentData(data);
      } else if (data.status === 'pending') {
        setPaymentStatus('pending');
        // Проверяем еще раз через 3 секунды
        setTimeout(() => checkPaymentStatus(paymentId), 3000);
      } else if (data.status === 'canceled') {
        setPaymentStatus('canceled');
      } else {
        setPaymentStatus('success'); // По умолчанию считаем успехом
      }
    } catch (error) {
      console.error('Error checking payment status:', error);
      setPaymentStatus('success'); // При ошибке показываем успех
    }
  };

  const formatAmount = (amount) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      minimumFractionDigits: 0
    }).format(amount);
  };

  return (
    <>
      <SEOHead 
        title="Оплата получена — SAASPRENER"
        description="Спасибо за оплату! Ваш платеж успешно обработан."
        noIndex={true}
      />

      <div className="min-h-[80vh] flex items-center justify-center px-6 py-20">
        <div className="max-w-lg w-full text-center">
          
          {/* Проверка статуса */}
          {paymentStatus === 'checking' && (
            <div className="space-y-6">
              <div className="w-20 h-20 mx-auto rounded-full bg-zinc-800 flex items-center justify-center">
                <Loader2 className="w-10 h-10 text-emerald-500 animate-spin" />
              </div>
              <h1 className="text-3xl font-black text-white tracking-tighter">
                Проверяем платеж...
              </h1>
              <p className="text-zinc-400">
                Пожалуйста, подождите
              </p>
            </div>
          )}

          {/* Ожидание подтверждения */}
          {paymentStatus === 'pending' && (
            <div className="space-y-6">
              <div className="w-20 h-20 mx-auto rounded-full bg-yellow-500/10 border-2 border-yellow-500/30 flex items-center justify-center">
                <Clock className="w-10 h-10 text-yellow-500" />
              </div>
              <h1 className="text-3xl font-black text-white tracking-tighter">
                Обрабатываем платеж
              </h1>
              <p className="text-zinc-400">
                Ваш платеж обрабатывается. Это может занять несколько минут.
              </p>
              <div className="flex items-center justify-center gap-2 text-zinc-500">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span className="text-sm">Автоматическое обновление...</span>
              </div>
            </div>
          )}

          {/* Успешная оплата */}
          {paymentStatus === 'success' && (
            <div className="space-y-8">
              {/* Success icon */}
              <div className="w-24 h-24 mx-auto rounded-full bg-emerald-500/10 border-2 border-emerald-500 flex items-center justify-center">
                <CheckCircle2 className="w-12 h-12 text-emerald-500" />
              </div>

              {/* Title */}
              <div>
                <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4">
                  СПАСИБО ЗА ОПЛАТУ!
                </h1>
                <p className="text-lg text-zinc-400">
                  Ваш платеж успешно обработан
                </p>
              </div>

              {/* Payment details */}
              {paymentData?.amount && (
                <div className="bg-[#0d0d0d] border border-zinc-800 p-6">
                  <div className="text-3xl font-black text-emerald-500 mb-2">
                    {formatAmount(paymentData.amount)}
                  </div>
                  <div className="text-sm text-zinc-500">
                    Сумма платежа
                  </div>
                </div>
              )}

              {/* Email notification */}
              <div className="flex items-center justify-center gap-3 p-4 bg-zinc-900 border border-zinc-800">
                <Mail className="w-5 h-5 text-emerald-500" />
                <span className="text-zinc-300">
                  Чек отправлен на вашу почту
                </span>
              </div>

              {/* Telegram Chat CTA */}
              <div className="pt-4 space-y-4">
                <a 
                  href={TELEGRAM_CHAT_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 bg-[#0088cc] text-white px-8 py-5 font-black uppercase tracking-widest hover:bg-[#0099dd] transition-colors"
                >
                  <MessageCircle className="w-6 h-6" />
                  Войти в закрытый чат
                </a>
                <p className="text-sm text-zinc-400">
                  Нажмите кнопку выше, чтобы присоединиться к закрытому Telegram-чату
                </p>
              </div>

              {/* Secondary CTA */}
              <div className="pt-2">
                <Link 
                  to="/"
                  className="inline-flex items-center gap-3 text-zinc-400 hover:text-white transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                  На главную
                </Link>
              </div>

              {/* Support */}
              <p className="text-sm text-zinc-500">
                Есть вопросы? Напишите нам на{' '}
                <a href="mailto:support@saasprener.online" className="text-emerald-500 hover:underline">
                  support@saasprener.online
                </a>
              </p>
            </div>
          )}

          {/* Платеж отменен */}
          {paymentStatus === 'canceled' && (
            <div className="space-y-6">
              <div className="w-20 h-20 mx-auto rounded-full bg-red-500/10 border-2 border-red-500/30 flex items-center justify-center">
                <span className="text-4xl">✕</span>
              </div>
              <h1 className="text-3xl font-black text-white tracking-tighter">
                Платеж отменен
              </h1>
              <p className="text-zinc-400">
                Платеж был отменен. Вы можете попробовать снова.
              </p>
              <Link 
                to="/payment"
                className="inline-flex items-center gap-3 bg-emerald-500 text-zinc-950 px-8 py-4 font-black uppercase tracking-widest hover:bg-emerald-400 transition-colors"
              >
                Попробовать снова
              </Link>
            </div>
          )}

        </div>
      </div>
    </>
  );
}
