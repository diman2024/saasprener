import { useState } from 'react';
import { ChevronDown, Plus, Minus } from 'lucide-react';
import { courseConfig, formatPrice, formatDate } from '../data/courseConfig';

// FAQ данные для курса
const courseFAQ = [
  {
    id: 1,
    question: 'Что входит в обучение?',
    answer: `В обучение входит:
• Полный доступ к программе курса
• Практика кода с первого дня
• Разбор архитектуры именно твоей идеи
• Ревью ключевых решений
• Помощь в доведении до боевого запуска
• Формат групповой работы: чат + созвоны по необходимости
• Доступ к материалам без ограничения по времени`
  },
  {
    id: 2,
    question: 'Когда старт курса?',
    answer: `Старт потока — ${formatDate(courseConfig.courseStartDate)}. До этого момента идет набор участников. После старта мы сразу переходим к практике.`
  },
  {
    id: 3,
    question: 'Почему цена растет?',
    answer: `Потому что ближе к старту меньше мест, а группа ограничена 20 участниками. Чем раньше ты заходишь — тем выгоднее условия.`
  },
  {
    id: 4,
    question: 'Можно ли забронировать место?',
    answer: `Да, можно внести предоплату ${formatPrice(courseConfig.prepaymentAmount)} и зафиксировать участие по текущей цене. Предоплата гарантирует место на потоке и защищает от повышения цены.`
  },
  {
    id: 5,
    question: 'Возвращается ли предоплата?',
    answer: `Нет, предоплата невозвратная. Это не штраф, а фильтр: я работаю только с теми, кто принял решение и готов идти до конца. Если сомневаешься — лучше сначала разобраться с сомнениями.`
  },
  {
    id: 6,
    question: 'Для кого подходит курс?',
    answer: `Курс подходит для:
• Предпринимателей, которые хотят собирать свои сервисы сами
• Тех, кто хочет запускать MVP без зависимости от команды
• Тех, кто хочет понять архитектуру продукта, а не просто "пописать код"
• Тех, кто хочет выйти на запуск и монетизацию`
  },
  {
    id: 7,
    question: 'Нужен ли опыт в программировании?',
    answer: `Базовое понимание логики и готовность разбираться — обязательны. Это не пассивное обучение, где можно "посмотреть видосики". Здесь ты будешь писать код, получать обратную связь и переделывать. Если готов работать — справишься.`
  },
  {
    id: 8,
    question: 'Какой формат обучения?',
    answer: `Обучение проходит в группах до 20 человек. Ты работаешь над своим проектом, я помогаю с архитектурой, кодом и запуском. Общение в чате + созвоны по необходимости.`
  }
];

export default function CourseAccordion() {
  const [openId, setOpenId] = useState(null);

  const toggleItem = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="course-accordion">
      <h3 className="text-xl md:text-2xl font-black text-white mb-8 uppercase tracking-tight">
        Частые вопросы по обучению
      </h3>
      
      <div className="space-y-2">
        {courseFAQ.map((item) => (
          <AccordionItem
            key={item.id}
            item={item}
            isOpen={openId === item.id}
            onToggle={() => toggleItem(item.id)}
          />
        ))}
      </div>

      <style>{`
        .accordion-item {
          border: 1px solid #262626;
          transition: all 0.3s ease;
        }
        
        .accordion-item:hover {
          border-color: #3f3f46;
        }
        
        .accordion-item.is-open {
          border-color: #10b981;
          background: linear-gradient(180deg, rgba(16, 185, 129, 0.05) 0%, transparent 100%);
        }
        
        .accordion-header {
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .accordion-header:hover {
          background: rgba(255, 255, 255, 0.02);
        }
        
        .accordion-icon {
          transition: transform 0.3s ease;
        }
        
        .accordion-item.is-open .accordion-icon {
          transform: rotate(180deg);
        }
        
        .accordion-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease, opacity 0.3s ease;
          opacity: 0;
        }
        
        .accordion-item.is-open .accordion-content {
          max-height: 500px;
          opacity: 1;
        }
        
        .accordion-answer {
          white-space: pre-line;
        }
      `}</style>
    </div>
  );
}

function AccordionItem({ item, isOpen, onToggle }) {
  return (
    <div className={`accordion-item bg-[#0d0d0d] ${isOpen ? 'is-open' : ''}`}>
      <button
        onClick={onToggle}
        className="accordion-header w-full flex items-center justify-between gap-4 p-5 text-left"
      >
        <span className="font-bold text-white text-sm md:text-base uppercase tracking-wide">
          {item.question}
        </span>
        <ChevronDown className={`accordion-icon w-5 h-5 text-emerald-500 flex-shrink-0`} />
      </button>
      
      <div className="accordion-content">
        <div className="px-5 pb-5">
          <p className="accordion-answer text-zinc-400 text-sm leading-relaxed">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}
