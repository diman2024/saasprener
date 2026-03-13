// Компонент формы оплаты
// /src/components/PaymentForm.jsx

import React, { useState } from 'react';
import { CreditCard, Mail, Phone, User, Loader2, AlertCircle } from 'lucide-react';

const API_BASE = import.meta.env.VITE_API_URL || 'https://saasprener.online/api';

export default function PaymentForm({ 
  defaultAmount = 5000,
  description = 'Оплата на SAASPRENER',
  onSuccess,
  onError,
  className = ''
}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    amount: defaultAmount
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError('Введите ваше имя');
      return false;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setError('Введите корректный email');
      return false;
    }
    if (!formData.phone.trim()) {
      setError('Введите номер телефона');
      return false;
    }
    if (!formData.amount || formData.amount <= 0) {
      setError('Введите сумму оплаты');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setLoading(true);
    setError('');

    try {
      const response = await fetch(`${API_BASE}/yookassa/create-payment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          amount: parseFloat(formData.amount),
          description
        })
      });

      const data = await response.json();

      if (data.success && data.confirmation_url) {
        // Сохраняем payment_id для проверки после возврата
        localStorage.setItem('sp_pending_payment', data.payment_id);
        
        // Трекинг события
        if (typeof window !== 'undefined' && window.ym) {
          window.ym(98650651, 'reachGoal', 'payment_started', {
            amount: formData.amount
          });
        }

        // Вызываем callback если есть
        if (onSuccess) {
          onSuccess(data);
        }

        // Редирект на страницу оплаты YooKassa
        window.location.href = data.confirmation_url;
      } else {
        throw new Error(data.error || 'Не удалось создать платеж');
      }

    } catch (err) {
      console.error('Payment error:', err);
      setError(err.message || 'Произошла ошибка. Попробуйте позже.');
      
      if (onError) {
        onError(err);
      }
    } finally {
      setLoading(false);
    }
  };

  const formatAmount = (value) => {
    return new Intl.NumberFormat('ru-RU').format(value);
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-6 ${className}`}>
      {/* Имя */}
      <div>
        <label className="block text-sm font-bold text-zinc-400 uppercase tracking-wider mb-2">
          Ваше имя *
        </label>
        <div className="relative">
          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Иван Иванов"
            className="w-full pl-12 pr-4 py-4 bg-zinc-900 border border-zinc-800 text-white placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors"
            required
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-bold text-zinc-400 uppercase tracking-wider mb-2">
          Email *
        </label>
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="email@example.com"
            className="w-full pl-12 pr-4 py-4 bg-zinc-900 border border-zinc-800 text-white placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors"
            required
          />
        </div>
      </div>

      {/* Телефон */}
      <div>
        <label className="block text-sm font-bold text-zinc-400 uppercase tracking-wider mb-2">
          Телефон *
        </label>
        <div className="relative">
          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+7 (999) 123-45-67"
            className="w-full pl-12 pr-4 py-4 bg-zinc-900 border border-zinc-800 text-white placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors"
            required
          />
        </div>
      </div>

      {/* Сумма */}
      <div>
        <label className="block text-sm font-bold text-zinc-400 uppercase tracking-wider mb-2">
          Сумма оплаты *
        </label>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 font-bold">₽</span>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            min="1"
            step="1"
            className="w-full pl-12 pr-4 py-4 bg-zinc-900 border border-zinc-800 text-white text-xl font-bold placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors"
            required
          />
        </div>
      </div>

      {/* Ошибка */}
      {error && (
        <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 text-red-400">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Кнопка оплаты */}
      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-3 bg-emerald-500 text-zinc-950 px-8 py-5 font-black uppercase tracking-widest hover:bg-emerald-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {loading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Создание платежа...
          </>
        ) : (
          <>
            <CreditCard className="w-5 h-5" />
            Оплатить {formatAmount(formData.amount)} ₽
          </>
        )}
      </button>

      {/* Примечание */}
      <p className="text-xs text-zinc-500 text-center">
        Нажимая кнопку, вы соглашаетесь с условиями оферты.
        <br />
        Оплата через защищенный сервис ЮKassa.
      </p>
    </form>
  );
}
