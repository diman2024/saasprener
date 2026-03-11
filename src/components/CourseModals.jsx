import { useState, useEffect } from 'react';
import { X, Send, CreditCard, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { courseConfig, formatPrice, getCurrentPrice } from '../data/courseConfig';
import { submitLead, trackFormOpened, trackFormSubmitted } from '../utils/analytics';

// Модальное окно заявки
export function ApplicationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    idea: '',
    level: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  // Трекинг открытия формы
  useEffect(() => {
    if (isOpen) {
      trackFormOpened('application');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Парсим контакт - определяем телефон или telegram
      const contact = formData.contact.trim();
      const isPhone = /^[\d\+\-\(\)\s]+$/.test(contact);
      
      await submitLead({
        name: formData.name,
        phone: isPhone ? contact : null,
        telegram: !isPhone ? contact.replace('@', '') : null,
        idea: formData.idea || null,
        level: formData.level || null
      });
      
      trackFormSubmitted('application');
      setIsSubmitted(true);
      
      // Закрыть через 2 секунды после отправки
      setTimeout(() => {
        onClose();
        setIsSubmitted(false);
        setFormData({ name: '', contact: '', idea: '', level: '' });
      }, 2000);
    } catch (err) {
      console.error('Submit error:', err);
      setError('Ошибка отправки. Попробуй ещё раз или напиши в Telegram @saasprener');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <ModalWrapper onClose={onClose}>
      {isSubmitted ? (
        <SuccessState 
          title="Заявка отправлена!" 
          message="Я свяжусь с тобой в ближайшее время"
        />
      ) : (
        <>
          <ModalHeader 
            title="Оставить заявку" 
            subtitle={`Текущая цена: ${formatPrice(getCurrentPrice())}`}
            onClose={onClose}
          />
          
          {error && (
            <div className="bg-red-500/10 border border-red-500/30 p-3 mb-4 text-red-400 text-sm">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <FormInput
              label="Имя"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Как тебя зовут?"
              required
            />
            
            <FormInput
              label="Telegram или телефон"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="@username или +7..."
              required
            />
            
            <FormTextarea
              label="Идея проекта"
              name="idea"
              value={formData.idea}
              onChange={handleChange}
              placeholder="Кратко опиши, что хочешь создать..."
              rows={3}
            />
            
            <FormSelect
              label="Уровень подготовки"
              name="level"
              value={formData.level}
              onChange={handleChange}
              options={[
                { value: '', label: 'Выбери уровень' },
                { value: 'beginner', label: 'Начинающий — мало опыта в коде' },
                { value: 'intermediate', label: 'Средний — есть базовые навыки' },
                { value: 'advanced', label: 'Продвинутый — опыт разработки' }
              ]}
            />
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-emerald-500 text-zinc-950 py-4 font-black text-lg uppercase tracking-widest hover:bg-emerald-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {isSubmitting ? (
                <>
                  <span className="animate-spin">⏳</span>
                  Отправка...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Отправить заявку
                </>
              )}
            </button>
          </form>
        </>
      )}
    </ModalWrapper>
  );
}

// Модальное окно предоплаты
export function PrepaymentModal({ isOpen, onClose }) {
  const [agreed, setAgreed] = useState(false);
  const [agreedTerms, setAgreedTerms] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  // Трекинг открытия формы
  useEffect(() => {
    if (isOpen) {
      trackFormOpened('prepayment');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agreed || !agreedTerms) return;
    
    setIsSubmitting(true);
    setError(null);
    
    try {
      await submitLead({
        name: formData.name,
        telegram: formData.contact.replace('@', ''),
        email: formData.email,
        source_type: 'prepayment'
      });
      
      trackFormSubmitted('prepayment');
      setIsSubmitted(true);
      
      setTimeout(() => {
        onClose();
        setIsSubmitted(false);
        setAgreed(false);
        setAgreedTerms(false);
        setFormData({ name: '', contact: '', email: '' });
      }, 2000);
    } catch (err) {
      console.error('Submit error:', err);
      setError('Ошибка отправки. Попробуй ещё раз или напиши в Telegram @saasprener');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <ModalWrapper onClose={onClose}>
      {isSubmitted ? (
        <SuccessState 
          title="Заявка на предоплату принята!" 
          message="Я отправлю реквизиты для оплаты в ближайшее время"
        />
      ) : (
        <>
          <ModalHeader 
            title="Внести предоплату" 
            subtitle={`Сумма: ${formatPrice(courseConfig.prepaymentAmount)}`}
            onClose={onClose}
          />
          
          {error && (
            <div className="bg-red-500/10 border border-red-500/30 p-3 mb-4 text-red-400 text-sm">
              {error}
            </div>
          )}
          
          {/* Предупреждение */}
          <div className="bg-amber-500/10 border border-amber-500/30 p-4 mb-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-amber-400 font-bold text-sm uppercase tracking-wide mb-1">
                  Важно
                </p>
                <p className="text-amber-200/80 text-sm leading-relaxed">
                  Предоплата фиксирует место и текущую цену. Предоплата невозвратная.
                </p>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <FormInput
              label="Имя"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Как тебя зовут?"
              required
            />
            
            <FormInput
              label="Telegram"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="@username"
              required
            />
            
            <FormInput
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="email@example.com"
              required
            />
            
            {/* Чекбоксы согласия */}
            <div className="space-y-3 pt-2">
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1 w-4 h-4 accent-emerald-500"
                />
                <span className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">
                  Я понимаю, что предоплата <strong className="text-white">невозвратная</strong>
                </span>
              </label>
              
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={agreedTerms}
                  onChange={(e) => setAgreedTerms(e.target.checked)}
                  className="mt-1 w-4 h-4 accent-emerald-500"
                />
                <span className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">
                  Я согласен с условиями участия
                </span>
              </label>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting || !agreed || !agreedTerms}
              className="w-full bg-emerald-500 text-zinc-950 py-4 font-black text-lg uppercase tracking-widest hover:bg-emerald-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {isSubmitting ? (
                <>
                  <span className="animate-spin">⏳</span>
                  Обработка...
                </>
              ) : (
                <>
                  <CreditCard className="w-5 h-5" />
                  Получить реквизиты
                </>
              )}
            </button>
            
            <p className="text-xs text-zinc-600 text-center">
              После отправки заявки я пришлю реквизиты для оплаты
            </p>
          </form>
        </>
      )}
    </ModalWrapper>
  );
}

// ==================== Вспомогательные компоненты ====================

function ModalWrapper({ children, onClose }) {
  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 animate-fadeIn"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div 
          className="bg-[#0d0d0d] border border-zinc-800 w-full max-w-md max-h-[90vh] overflow-y-auto pointer-events-auto animate-slideUp"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 md:p-8">
            {children}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </>
  );
}

function ModalHeader({ title, subtitle, onClose }) {
  return (
    <div className="flex items-start justify-between mb-6">
      <div>
        <h3 className="text-xl font-black text-white uppercase tracking-tight">
          {title}
        </h3>
        {subtitle && (
          <p className="text-emerald-400 text-sm font-bold mt-1">{subtitle}</p>
        )}
      </div>
      <button
        onClick={onClose}
        className="text-zinc-500 hover:text-white transition-colors p-1"
      >
        <X className="w-6 h-6" />
      </button>
    </div>
  );
}

function SuccessState({ title, message }) {
  return (
    <div className="text-center py-8">
      <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle2 className="w-8 h-8 text-emerald-500" />
      </div>
      <h3 className="text-xl font-black text-white uppercase tracking-tight mb-2">
        {title}
      </h3>
      <p className="text-zinc-400">{message}</p>
    </div>
  );
}

function FormInput({ label, name, value, onChange, placeholder, type = 'text', required = false }) {
  return (
    <div>
      <label className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">
        {label} {required && <span className="text-emerald-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 text-white placeholder:text-zinc-600 focus:border-emerald-500 focus:outline-none transition-colors"
      />
    </div>
  );
}

function FormTextarea({ label, name, value, onChange, placeholder, rows = 3 }) {
  return (
    <div>
      <label className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">
        {label}
      </label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 text-white placeholder:text-zinc-600 focus:border-emerald-500 focus:outline-none transition-colors resize-none"
      />
    </div>
  );
}

function FormSelect({ label, name, value, onChange, options }) {
  return (
    <div>
      <label className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">
        {label}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 text-white focus:border-emerald-500 focus:outline-none transition-colors appearance-none cursor-pointer"
      >
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  );
}
