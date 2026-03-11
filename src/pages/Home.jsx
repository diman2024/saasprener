import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Terminal, LineChart, ShieldCheck, Database, Zap, CheckCircle2, 
  ArrowRight, LayoutDashboard, Briefcase, Wallet, Rocket, 
  Brain, Code2, TrendingUp, Users, Lightbulb 
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { SchemaOrg } from '../components/SchemaOrg';
import FAQ from '../components/FAQ';
import ArticleCard from '../components/ArticleCard';
import CourseSection from '../components/CourseSection';
import { articles } from '../data/articles';
import { cases } from '../data/cases';
import { mainFAQ } from '../data/faq';

// Компонент карточки проекта с IntersectionObserver для мобильных
function ProjectCard({ project, idx }) {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5,
        rootMargin: '-10% 0px -10% 0px'
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`bg-[#0d0d0d] border border-zinc-800 flex flex-col group hover:border-emerald-500 transition-colors duration-300 ${isVisible ? 'mobile-active' : ''}`}
    >
      <div className="relative overflow-hidden h-48 md:h-72 border-b border-zinc-800 bg-zinc-950 flex items-center justify-center">
        <div className="project-overlay absolute inset-0 bg-emerald-500/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <img 
          src={project.image} 
          alt={project.title} 
          loading="lazy"
          className="project-img w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
        />
      </div>
      <div className="p-4 md:p-8 flex flex-col flex-grow">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 md:mb-6 gap-2 md:gap-4">
          <Link 
            to={`/cases/${project.slug}`}
            className="text-xl md:text-3xl font-black text-white tracking-tighter uppercase hover:text-emerald-400 transition-colors"
          >
            {project.title}
          </Link>
          <span className="px-2 md:px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-[10px] md:text-xs font-black text-emerald-400 uppercase tracking-widest whitespace-nowrap w-fit">
            {project.stats}
          </span>
        </div>
        <p className="text-zinc-400 mb-4 md:mb-8 flex-grow text-sm md:text-lg">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 md:gap-2 mt-auto">
          {project.tags.map(tag => (
            <span key={tag} className="px-2 md:px-3 py-1 bg-zinc-900 text-[8px] md:text-[10px] font-black uppercase tracking-widest text-zinc-300 border border-zinc-800">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const syllabus = [
    {
      Icon: LayoutDashboard,
      title: "АРХИТЕКТУРА ПРИБЫЛЬНОГО СЕРВИСА",
      desc: "Выбираем идею, которая нужна рынку. Проектируем фундамент так, чтобы сервис работал быстро и не падал от наплыва клиентов."
    },
    {
      Icon: Terminal,
      title: "ИНТЕРФЕЙС, ЗА КОТОРЫЙ ПЛАТЯТ",
      desc: "Создаем удобный и красивый внешний вид программы. Клиент должен понимать, как пользоваться сервисом, за 3 секунды."
    },
    {
      Icon: Database,
      title: "ЛОГИКА И БАЗЫ ДАННЫХ",
      desc: "Надежная работа с данными клиентов, безопасность, регистрация и стабильность всей системы под капотом."
    },
    {
      Icon: Zap,
      title: "ВНЕДРЕНИЕ НЕЙРОСЕТЕЙ",
      desc: "Автоматизируем процессы внутри сервиса с помощью искусственного интеллекта. Это то, что сейчас повышает ценность продукта в 10 раз."
    },
    {
      Icon: Wallet,
      title: "ЗАПУСК И МОНЕТИЗАЦИЯ",
      desc: "Публикуем сервис в интернете, подключаем прием платежей и готовимся получать первые деньги от подписчиков."
    }
  ];

  // Данные для блока "Что ты здесь получишь"
  const benefits = [
    {
      Icon: LayoutDashboard,
      title: "Архитектура сервисов",
      desc: "Как проектировать SaaS, который можно развивать и масштабировать без переписывания кода",
      link: "/hub/arhitektura-servisov"
    },
    {
      Icon: Rocket,
      title: "Запуск MVP",
      desc: "Как собрать минимальную версию продукта за 2-4 недели и выйти на первые продажи",
      link: "/hub/zapusk-it-proekta"
    },
    {
      Icon: Brain,
      title: "AI в разработке",
      desc: "Как использовать нейросети для ускорения работы в 3-5 раз и замены части команды",
      link: "/hub/ai-v-razrabotke"
    },
    {
      Icon: TrendingUp,
      title: "Монетизация SaaS",
      desc: "Модели заработка на онлайн-сервисах: подписка, freemium, enterprise и другие",
      link: "/hub/zarabotok-na-saas"
    },
    {
      Icon: Code2,
      title: "Веб-кодинг",
      desc: "Практические навыки программирования для создания собственных цифровых продуктов",
      link: "/hub/veb-koding-dlya-predprinimateley"
    },
    {
      Icon: Lightbulb,
      title: "Кейсы запусков",
      desc: "Разборы реальных проектов: что работает, что нет, какие ошибки не повторять",
      link: "/cases"
    }
  ];

  return (
    <>
      <SEOHead 
        title="SAASPRENER — Создавай SaaS-бизнес в одиночку"
        description="Веб-кодинг для предпринимателей. Научу создавать SaaS-сервисы и онлайн-продукты без команды. Запускай свои проекты и забирай 100% прибыли."
        canonical="/"
      />
      <SchemaOrg type="organization" />
      <SchemaOrg type="website" />
      <SchemaOrg type="person" />
      <SchemaOrg type="course" />
      
      {/* Стили для анимаций: Блик на кнопках и бегающая рамка */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes glint {
          0% { transform: translateX(-150%) skewX(-25deg); opacity: 0; }
          15% { opacity: 1; }
          50%, 100% { transform: translateX(200%) skewX(-25deg); opacity: 0; }
        }
        .btn-glint::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 50%;
          height: 100%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.4), transparent);
          transform: translateX(-150%) skewX(-25deg);
          animation: glint 3s infinite ease-in-out;
        }
        @keyframes spin-border {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
        .animated-border-box {
          position: relative;
          overflow: hidden;
        }
        .animated-border-box::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 300%;
          height: 300%;
          background: conic-gradient(from 0deg, transparent 70%, #10b981 100%);
          animation: spin-border 3s linear infinite;
        }
        .animated-border-box-inner {
          position: relative;
          z-index: 10;
        }
        /* Мобильная анимация при скролле */
        @media (hover: none) and (pointer: coarse) {
          .mobile-active {
            border-color: #10b981 !important;
          }
          .mobile-active .project-overlay {
            opacity: 1 !important;
          }
          .mobile-active .project-img {
            filter: grayscale(0) !important;
            transform: scale(1.05);
          }
        }
      `}} />

      {/* Главный экран (Hero) - не изменяем */}
      <section className="pt-36 pb-20 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Анимированная плашка с бегающей рамкой */}
            <div className="animated-border-box p-[1px] rounded-none mb-8">
              <div className="animated-border-box-inner bg-[#0a0a0a] px-4 py-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-none bg-emerald-500 animate-pulse"></span>
                <span className="text-emerald-400 text-xs font-black uppercase tracking-widest">Набор на личное обучение открыт</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-white leading-[0.95] tracking-tighter mb-8 uppercase">
              Создавай <br/>
              <span className="text-emerald-500">SaaS-бизнес</span><br/>
              В одиночку.
            </h1>
            <p className="text-xl text-zinc-400 mb-12 max-w-2xl leading-relaxed border-l-2 border-emerald-500 pl-6">
              Веб-кодинг для предпринимателей. Я научу тебя собирать работающие онлайн-продукты без команды. Ты сам придумываешь, сам программируешь, сам запускаешь и забираешь 100% прибыли.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
              <a href="#price" className="btn-glint relative overflow-hidden bg-emerald-500 text-zinc-950 px-10 py-5 rounded-none font-black text-lg uppercase tracking-widest hover:bg-emerald-400 transition-colors flex items-center justify-center gap-3">
                Записаться на курс <ArrowRight className="w-6 h-6" />
              </a>
              <a href="#portfolio" className="bg-transparent text-white border-2 border-zinc-800 px-10 py-5 rounded-none font-black text-lg uppercase tracking-widest hover:border-emerald-500 hover:text-emerald-500 transition-colors flex items-center justify-center">
                Мои сервисы
              </a>
            </div>
            
            <div className="mt-16 grid grid-cols-2 gap-8 border-t border-zinc-900 pt-8 w-full max-w-lg">
              <div className="flex flex-col">
                <span className="text-4xl font-black text-white">5+</span>
                <span className="text-xs text-zinc-500 font-bold uppercase tracking-widest mt-2">Запущенных SaaS</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-black text-white">100%</span>
                <span className="text-xs text-zinc-500 font-bold uppercase tracking-widest mt-2">Сделано соло</span>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-emerald-500/10 blur-[100px] rounded-none"></div>
            <div className="relative border-4 border-zinc-900 bg-zinc-950 p-2 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="/hero-image.png" 
                alt="SAASPRENER — практик создания SaaS-сервисов" 
                className="w-full h-auto object-contain"
              />
              <div className="absolute -bottom-6 -left-6 bg-emerald-500 p-6 shadow-2xl">
                <p className="font-black text-zinc-950 text-xl flex items-center gap-2 uppercase tracking-tight">
                  <CheckCircle2 className="text-zinc-950 w-6 h-6 stroke-[3]"/> Практик, а не теоретик
                </p>
                <p className="text-sm text-zinc-900 font-bold mt-1 uppercase tracking-wider">Делаю проекты, которые приносят деньги</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* НОВЫЙ SEO-БЛОК: О чем этот проект */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto border-t border-zinc-900">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tighter uppercase">
          Как одному человеку запускать<br/>
          <span className="text-emerald-500">SaaS-сервисы и онлайн-бизнес</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <p className="text-lg text-zinc-400 leading-relaxed">
              <strong className="text-white">SAASPRENER</strong> — это платформа для тех, кто хочет создавать цифровые продукты самостоятельно. Без команды. Без инвесторов. Без бесконечного ожидания "идеального момента".
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Здесь ты найдешь знания и практику: как проектировать архитектуру сервисов, как быстро запускать MVP, как использовать AI для ускорения разработки, как монетизировать продукт и как строить бизнес на подписочной модели.
            </p>
          </div>
          <div className="space-y-6">
            <p className="text-zinc-400 leading-relaxed">
              Сегодня один человек с правильным стеком и AI-инструментами способен делать то, на что раньше нужна была команда из 5-10 специалистов. Это не про "легкие деньги" — это про другую плотность навыков и другую скорость принятия решений.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Главный принцип: <strong className="text-emerald-400">практика важнее теории</strong>. Все, что здесь есть — проверено на реальных проектах, которые работают и приносят деньги.
            </p>
          </div>
        </div>
      </section>

      {/* НОВЫЙ SEO-БЛОК: Что ты здесь получишь */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto border-t border-zinc-900">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tighter uppercase">
          Что ты здесь получишь
        </h2>
        <p className="text-xl text-zinc-400 mb-12 max-w-3xl border-l-2 border-emerald-500 pl-4">
          Структурированные знания и реальный опыт для запуска собственных SaaS-сервисов
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.Icon;
            return (
              <Link 
                key={idx}
                to={benefit.link}
                className="bg-[#0d0d0d] border border-zinc-800 p-8 hover:border-emerald-500 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 group-hover:border-emerald-500 transition-colors">
                  <Icon className="w-6 h-6 text-emerald-500" />
                </div>
                <h3 className="text-xl font-black text-white mb-3 uppercase tracking-tight group-hover:text-emerald-400 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {benefit.desc}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Преимущества / Суть подхода (существующий блок) */}
      <section id="about" className="py-24 px-6 max-w-7xl mx-auto border-t border-zinc-900">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-16 tracking-tighter uppercase">
          Почему соло-<br/>разработчик?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-[#0d0d0d] border border-zinc-800 p-10 flex flex-col justify-between hover:border-emerald-500 transition-colors">
            <div>
              <Briefcase className="w-12 h-12 text-emerald-500 mb-8" />
              <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tight">Бизнес, а не просто код</h3>
              <p className="text-lg text-zinc-400 leading-relaxed">
                Большинство курсов готовят наемных сотрудников. Я даю навыки для предпринимателей. Ты научишься за выходные собирать рабочий продукт, проверять спрос и брать за это деньги по подписке.
              </p>
            </div>
          </div>
          
          <div className="bg-[#0d0d0d] border border-zinc-800 p-10 hover:border-emerald-500 transition-colors">
            <Zap className="w-10 h-10 text-emerald-500 mb-6" />
            <h3 className="text-xl font-black text-white mb-4 uppercase tracking-tight">Скорость</h3>
            <p className="text-zinc-400">
              Один человек с AI делает то, на что раньше нужна была команда из 5 человек. Запуск за дни, а не месяцы.
            </p>
          </div>

          <div className="bg-[#0d0d0d] border border-zinc-800 p-10 hover:border-emerald-500 transition-colors">
            <ShieldCheck className="w-10 h-10 text-emerald-500 mb-6" />
            <h3 className="text-xl font-black text-white mb-4 uppercase tracking-tight">Независимость</h3>
            <p className="text-zinc-400">
              Тебе не нужно платить программистам или искать партнеров. Все технические ключи только в твоих руках.
            </p>
          </div>

          <div className="md:col-span-2 bg-emerald-500 p-10 relative overflow-hidden text-zinc-950">
            <div className="absolute right-0 bottom-0 opacity-10">
              <LineChart className="w-64 h-64 text-zinc-950" />
            </div>
            <h3 className="text-3xl font-black mb-6 relative z-10 uppercase tracking-tight">Слабым здесь не место</h3>
            <p className="text-lg font-bold relative z-10 max-w-xl">
              Это не «волшебная кнопка бабло». Программирование — это сложно. Придется думать, разбираться с ошибками и много пахать. Если ищешь легких денег, этот курс не для тебя.
            </p>
          </div>
        </div>
      </section>

      {/* НОВЫЙ SEO-БЛОК: Почему сейчас можно запускать SaaS в одиночку */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto border-t border-zinc-900">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tighter uppercase">
            Почему сейчас можно запускать<br/>
            <span className="text-emerald-500">SaaS в одиночку</span>
          </h2>
          
          <div className="space-y-6 text-zinc-400 leading-relaxed">
            <p className="text-lg">
              За последние годы порог входа в создание SaaS-сервисов снизился радикально. Современные фреймворки, облачная инфраструктура, готовые интеграции и AI-инструменты позволяют одному человеку собирать продукты, которые раньше требовали целой команды.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 py-8">
              <div className="bg-[#0d0d0d] border border-zinc-800 p-6">
                <div className="text-4xl font-black text-emerald-500 mb-2">3-5x</div>
                <p className="text-sm text-zinc-500 uppercase tracking-wider font-bold">Ускорение с AI-инструментами</p>
              </div>
              <div className="bg-[#0d0d0d] border border-zinc-800 p-6">
                <div className="text-4xl font-black text-emerald-500 mb-2">2-4</div>
                <p className="text-sm text-zinc-500 uppercase tracking-wider font-bold">Недели на запуск MVP</p>
              </div>
              <div className="bg-[#0d0d0d] border border-zinc-800 p-6">
                <div className="text-4xl font-black text-emerald-500 mb-2">100%</div>
                <p className="text-sm text-zinc-500 uppercase tracking-wider font-bold">Прибыль остается у тебя</p>
              </div>
            </div>
            
            <p>
              <strong className="text-white">Создание SaaS</strong> перестало быть уделом технарей с дипломами. Сегодня предприниматель с правильным подходом может освоить <strong className="text-white">разработку SaaS</strong> за несколько месяцев и начать запускать собственные сервисы. AI становится мультипликатором: он не заменяет мышление, но драматически ускоряет рутинные задачи.
            </p>
            
            <p>
              <strong className="text-white">IT-бизнес без команды</strong> — это не романтика одиночки, а прагматичный выбор. Ты не ждешь, пока дизайнер дорисует макет, пока разработчик закончит таск, пока партнеры согласуют решение. Ты сам двигаешь <strong className="text-white">запуск цифрового продукта</strong> и сам контролируешь результат.
            </p>
          </div>
        </div>
      </section>

      {/* Портфолио / Кейсы (существующий блок) */}
      <section id="portfolio" className="py-16 md:py-24 px-4 md:px-6 max-w-7xl mx-auto border-t border-zinc-900">
        <div className="flex flex-col mb-10 md:mb-16 gap-4">
          <h2 className="text-3xl md:text-6xl font-black text-white tracking-tighter uppercase">Мои сервисы</h2>
          <p className="text-base md:text-xl text-zinc-400 max-w-2xl border-l-2 border-emerald-500 pl-4">
            Слова ничего не значат. Вот реальные проекты, которые я создал своими руками. Это сложные системы, которые решают бизнес-задачи.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
          {cases.map((project, idx) => (
            <ProjectCard key={idx} project={project} idx={idx} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/cases"
            className="inline-flex items-center gap-2 text-emerald-500 font-bold uppercase tracking-wider hover:gap-4 transition-all"
          >
            Смотреть все кейсы <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Программа обучения (существующий блок) */}
      <section id="program" className="py-24 px-6 max-w-7xl mx-auto border-t border-zinc-900">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase mb-4">План обучения</h2>
          <p className="text-xl text-zinc-400 border-l-2 border-emerald-500 pl-4">Шаг за шагом создаем твой первый прибыльный сервис.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {syllabus.map((item, idx) => {
            const Icon = item.Icon;
            return (
              <div key={idx} className="bg-[#0d0d0d] border border-zinc-800 p-8 flex flex-col hover:border-emerald-500 hover:bg-[#111] transition-all duration-300">
                <div className="w-14 h-14 bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-8">
                  <Icon className="w-6 h-6 text-emerald-500" />
                </div>
                <div className="text-emerald-500 font-black text-sm mb-2 opacity-50 tracking-widest">ЭТАП 0{idx + 1}</div>
                <h3 className="text-2xl font-black text-white mb-4 tracking-tight uppercase leading-none">{item.title}</h3>
                <p className="text-zinc-400 leading-relaxed font-medium">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* НОВЫЙ SEO-БЛОК: Статьи */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto border-t border-zinc-900">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tighter uppercase">
              Последние статьи
            </h2>
            <p className="text-zinc-400 max-w-xl">
              Практические материалы про создание SaaS, запуск IT-проектов и монетизацию онлайн-сервисов
            </p>
          </div>
          <Link 
            to="/blog"
            className="flex items-center gap-2 text-emerald-500 font-bold uppercase tracking-wider hover:gap-3 transition-all"
          >
            Все статьи <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.slice(0, 3).map(article => (
            <ArticleCard key={article.id} article={article} variant="compact" />
          ))}
        </div>
      </section>

      {/* FAQ (новый SEO-блок) */}
      <div className="border-t border-zinc-900">
        <FAQ questions={mainFAQ} title="Частые вопросы" />
      </div>

      {/* Блок курса с таймером, ценами, FAQ */}
      <CourseSection />
    </>
  );
}
