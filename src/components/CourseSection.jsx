import { useState } from 'react';
import { CheckCircle2, Users, Calendar, Sparkles, ArrowRight, Clock, Shield } from 'lucide-react';
import CountdownTimer from './CountdownTimer';
import PriceTimeline from './PriceTimeline';
import CourseAccordion from './CourseAccordion';
import { ApplicationModal, PrepaymentModal } from './CourseModals';
import { 
  courseConfig, 
  getCurrentPrice, 
  getCurrentPriceStage,
  getNextPriceRiseDate,
  getTimerLabel,
  formatPrice,
  formatDate
} from '../data/courseConfig';

export default function CourseSection() {
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  const [showPrepaymentModal, setShowPrepaymentModal] = useState(false);
  
  const currentPrice = getCurrentPrice();
  const currentStage = getCurrentPriceStage();
  const nextRiseDate = getNextPriceRiseDate();
  const timerLabel = getTimerLabel();
  const isClosed = courseConfig.enrollmentClosed || currentStage === 'closed';

  return (
    <>
      <section id="price" className="py-20 md:py-32 px-6 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto">
          
          {/* Главный двухколоночный блок */}
          <div className="grid lg:grid-cols-2 gap-0 border border-zinc-800 bg-[#0d0d0d]">
            
            {/* ==================== ЛЕВАЯ ЧАСТЬ: Смысловая ==================== */}
            <div className="p-8 md:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-zinc-800">
              
              {/* Заголовок */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tighter uppercase leading-[0.95]">
                Инвестиция<br/>
                <span className="text-emerald-500">в скиллы</span>
              </h2>
              
              {/* Подзаголовок */}
              <p className="text-lg md:text-xl text-zinc-400 mb-8 leading-relaxed">
                Не теория ради теории, а практика, архитектура и запуск собственного продукта.
              </p>
              
              {/* Описание */}
              <div className="prose prose-zinc prose-invert mb-10">
                <p className="text-zinc-400 leading-relaxed">
                  Один сильный сервис, который ты соберешь после обучения, может окупить эти вложения в первый же месяц. 
                  Здесь ты покупаешь не "курс посмотреть", а системный путь: от идеи и архитектуры до рабочего запуска.
                </p>
              </div>
              
              {/* Что получает человек */}
              <div className="mb-10">
                <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-6">
                  Что ты получишь
                </h3>
                <ul className="space-y-4">
                  {[
                    'Практика кода с первого дня',
                    'Разбор архитектуры именно твоей идеи',
                    'Мое личное ревью ключевых решений',
                    'Помощь в доведении до боевого запуска',
                    'Понимание, как собирать продукт без команды',
                    'Фокус на реальный результат, а не на теорию'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-4 group">
                      <CheckCircle2 className="text-emerald-500 w-5 h-5 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span className="text-zinc-300 font-medium text-sm md:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Для кого */}
              <div className="mb-10 p-6 bg-zinc-900/50 border-l-2 border-emerald-500">
                <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-4">
                  Для кого это
                </h4>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li>• Предприниматели, которые хотят собирать свои сервисы сами</li>
                  <li>• Те, кто хочет запускать MVP без зависимости от команды</li>
                  <li>• Те, кто хочет понять архитектуру продукта, а не просто "пописать код"</li>
                  <li>• Те, кто хочет выйти на запуск и монетизацию</li>
                </ul>
              </div>
              
              {/* Дополнительная информация */}
              <div className="flex flex-wrap gap-6 pt-6 border-t border-zinc-800">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-emerald-500" />
                  <span className="text-sm text-zinc-400">
                    Старт потока — <strong className="text-white">{formatDate(courseConfig.courseStartDate)}</strong>
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-emerald-500" />
                  <span className="text-sm text-zinc-400">
                    Осталось мест: <strong className="text-white">{courseConfig.spotsLeft}</strong>
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-emerald-500" />
                  <span className="text-sm text-zinc-400">
                    Группы до 20 человек
                  </span>
                </div>
              </div>
            </div>
            
            {/* ==================== ПРАВАЯ ЧАСТЬ: Конверсионная ==================== */}
            <div className="p-8 md:p-12 lg:p-16 bg-[#0a0a0a] relative overflow-hidden">
              {/* Фоновое свечение */}
              <div className="absolute inset-0 bg-emerald-500/5 blur-[80px] pointer-events-none"></div>
              
              <div className="relative z-10">
                
                {/* Бейдж статуса */}
                <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-4 py-2 mb-8">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-emerald-400 text-xs font-black uppercase tracking-widest">
                    {isClosed ? 'Набор закрыт' : 'Набор на текущий поток'}
                  </span>
                </div>
                
                {/* Цена */}
                {!isClosed && (
                  <div className="mb-8">
                    <div className="text-6xl md:text-7xl font-black text-white tracking-tighter mb-2 price-display">
                      {formatPrice(currentPrice)}
                    </div>
                    <p className="text-zinc-500 text-sm font-medium">
                      {currentStage === 1 && 'Цена действует до 18 числа'}
                      {currentStage === 2 && 'Цена действует до 25 числа'}
                      {currentStage === 3 && 'Финальная цена'}
                    </p>
                  </div>
                )}
                
                {/* Таймер */}
                {!isClosed && currentStage !== 3 && (
                  <div className="mb-8">
                    <CountdownTimer 
                      targetDate={nextRiseDate}
                      label={timerLabel}
                    />
                  </div>
                )}
                
                {/* Этапы цены */}
                {!isClosed && (
                  <div className="mb-8">
                    <PriceTimeline />
                  </div>
                )}
                
                {/* CTA кнопки */}
                <div className="space-y-4">
                  {isClosed ? (
                    <button
                      onClick={() => setShowApplicationModal(true)}
                      className="w-full bg-zinc-800 text-white py-5 font-black text-lg uppercase tracking-widest hover:bg-zinc-700 transition-colors flex items-center justify-center gap-3"
                    >
                      Оставить заявку на следующий поток
                    </button>
                  ) : (
                    <>
                      {/* Основная кнопка */}
                      <button
                        onClick={() => setShowApplicationModal(true)}
                        className="btn-glint relative overflow-hidden w-full bg-emerald-500 text-zinc-950 py-5 font-black text-lg uppercase tracking-widest hover:bg-emerald-400 transition-colors flex items-center justify-center gap-3"
                      >
                        Оставить заявку
                        <ArrowRight className="w-5 h-5" />
                      </button>
                      
                      {/* Вторичная кнопка — предоплата */}
                      <button
                        onClick={() => setShowPrepaymentModal(true)}
                        className="w-full bg-transparent border-2 border-zinc-700 text-white py-4 font-bold text-sm uppercase tracking-widest hover:border-emerald-500 hover:text-emerald-500 transition-colors flex items-center justify-center gap-2"
                      >
                        <Shield className="w-4 h-4" />
                        Внести предоплату {formatPrice(courseConfig.prepaymentAmount)}
                      </button>
                      
                      {/* Микротекст о предоплате */}
                      <p className="text-xs text-zinc-600 text-center leading-relaxed">
                        Предоплата фиксирует место и текущие условия участия.<br/>
                        <span className="text-zinc-500">Предоплата невозвратная.</span>
                      </p>
                    </>
                  )}
                </div>
                
                {/* Микротекст */}
                {!isClosed && (
                  <div className="mt-8 pt-6 border-t border-zinc-800 space-y-2">
                    <div className="flex items-center gap-2 text-xs text-zinc-500">
                      <Clock className="w-3 h-3" />
                      <span>Места ограничены — набор в группы до 20 человек</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-zinc-500">
                      <Calendar className="w-3 h-3" />
                      <span>Старт курса — {formatDate(courseConfig.courseStartDate)}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* ==================== FAQ Аккордеон ==================== */}
          <div className="mt-16 md:mt-20">
            <CourseAccordion />
          </div>
          
        </div>
      </section>

      {/* Модальные окна */}
      <ApplicationModal 
        isOpen={showApplicationModal} 
        onClose={() => setShowApplicationModal(false)} 
      />
      <PrepaymentModal 
        isOpen={showPrepaymentModal} 
        onClose={() => setShowPrepaymentModal(false)} 
      />

      {/* Стили для блока */}
      <style>{`
        .price-display {
          background: linear-gradient(180deg, #ffffff 0%, #a1a1aa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .btn-glint::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          transition: left 0.5s ease;
        }
        
        .btn-glint:hover::before {
          left: 100%;
        }
      `}</style>
    </>
  );
}
