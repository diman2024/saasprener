import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ExternalLink, ArrowLeft, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import { SchemaOrg } from '../components/SchemaOrg';
import { cases } from '../data/cases';

// Парсер markdown для описания кейса
function MarkdownContent({ content }) {
  const lines = content.trim().split('\n');
  const elements = [];
  let currentParagraph = [];
  let inList = false;
  let listItems = [];

  const flushParagraph = () => {
    if (currentParagraph.length > 0) {
      elements.push(
        <p key={elements.length} className="text-zinc-400 leading-relaxed mb-6">
          {currentParagraph.join(' ')}
        </p>
      );
      currentParagraph = [];
    }
  };

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={elements.length} className="list-none space-y-3 mb-8 pl-0">
          {listItems.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-zinc-400">
              <span className="w-2 h-2 bg-emerald-500 flex-shrink-0 mt-2"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
      listItems = [];
      inList = false;
    }
  };

  lines.forEach((line) => {
    const trimmed = line.trim();
    
    if (trimmed.startsWith('### ')) {
      flushParagraph();
      flushList();
      elements.push(
        <h3 key={elements.length} className="text-xl font-black text-white mb-4 mt-8 uppercase tracking-tight">
          {trimmed.slice(4)}
        </h3>
      );
    }
    else if (trimmed.startsWith('- **')) {
      flushParagraph();
      if (!inList) inList = true;
      // Парсим **bold:** формат
      const match = trimmed.match(/- \*\*(.+?)\*\*(.+)/);
      if (match) {
        listItems.push(
          <><strong className="text-white">{match[1]}</strong>{match[2]}</>
        );
      } else {
        listItems.push(trimmed.slice(2));
      }
    }
    else if (trimmed.startsWith('- ')) {
      flushParagraph();
      if (!inList) inList = true;
      listItems.push(trimmed.slice(2));
    }
    else if (trimmed === '') {
      flushParagraph();
      flushList();
    }
    else {
      flushList();
      currentParagraph.push(trimmed);
    }
  });

  flushParagraph();
  flushList();

  return <>{elements}</>;
}

export default function Case() {
  const { slug } = useParams();
  
  // Находим кейс по slug
  const caseData = cases.find(c => c.slug === slug);
  
  // Если кейс не найден
  if (!caseData) {
    return <Navigate to="/cases" replace />;
  }

  // Получаем другие кейсы для блока "Смотрите также"
  const otherCases = cases.filter(c => c.id !== caseData.id).slice(0, 2);

  // Хлебные крошки
  const breadcrumbItems = [
    { name: 'Кейсы', url: '/cases' },
    { name: caseData.title }
  ];

  return (
    <>
      <SEOHead 
        title={`${caseData.title} — кейс SaaS-проекта | SAASPRENER`}
        description={caseData.description}
        canonical={`/cases/${caseData.slug}`}
        image={caseData.image}
      />
      <SchemaOrg 
        type="article" 
        data={{
          title: caseData.title,
          description: caseData.description,
          image: caseData.image,
          date: `${caseData.year}-01-01`,
          url: `/cases/${caseData.slug}`
        }} 
      />

      {/* Hero секция кейса */}
      <section className="pt-32 pb-8 px-6 max-w-7xl mx-auto">
        <Breadcrumbs items={breadcrumbItems} />
        
        {/* Мета информация */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-xs font-black text-emerald-400 uppercase tracking-widest">
            {caseData.type}
          </span>
          <span className="text-zinc-500 text-sm">{caseData.year}</span>
          <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-xs font-black text-zinc-400 uppercase tracking-widest">
            {caseData.status}
          </span>
        </div>

        {/* Заголовок */}
        <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter uppercase">
          {caseData.title}
        </h1>
        <p className="text-xl text-zinc-500 mb-8">{caseData.subtitle}</p>

        {/* Ссылка на проект */}
        {caseData.url && (
          <a 
            href={caseData.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-emerald-500 font-bold uppercase tracking-wider hover:text-emerald-400 transition-colors"
          >
            Перейти на сайт <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </section>

      {/* Изображение проекта */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="relative overflow-hidden border border-zinc-800">
          <img 
            src={caseData.image} 
            alt={caseData.title}
            className="w-full h-64 md:h-[500px] object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
          
          {/* Статистика поверх изображения */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <div className="flex flex-wrap gap-4">
              <div className="bg-[#0a0a0a]/90 backdrop-blur-sm border border-zinc-800 px-6 py-4">
                <div className="text-2xl font-black text-emerald-500">{caseData.stats}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Контент кейса */}
      <div className="max-w-4xl mx-auto px-6">
        {/* Теги */}
        <div className="flex flex-wrap gap-2 mb-12">
          {caseData.tags.map(tag => (
            <span key={tag} className="px-4 py-2 bg-zinc-900 text-sm font-black uppercase tracking-widest text-zinc-400 border border-zinc-800">
              {tag}
            </span>
          ))}
        </div>

        {/* Описание */}
        <div className="prose prose-invert max-w-none">
          <MarkdownContent content={caseData.fullDescription} />
        </div>

        {/* CTA блок */}
        <div className="mt-16 bg-[#0d0d0d] border border-zinc-800 p-8 md:p-10">
          <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight">
            Хочешь создавать такие проекты?
          </h3>
          <p className="text-zinc-400 mb-6">
            Записывайся на обучение и научись собирать SaaS-сервисы с нуля под личным руководством практика.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/#price"
              className="bg-emerald-500 text-zinc-950 px-6 py-3 font-black uppercase tracking-widest hover:bg-emerald-400 transition-colors"
            >
              Записаться на курс
            </Link>
            <a
              href={caseData.url}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-zinc-700 text-white px-6 py-3 font-bold uppercase tracking-widest hover:border-emerald-500 transition-colors flex items-center gap-2"
            >
              Смотреть проект <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Навигация */}
        <div className="mt-12 flex justify-between items-center border-t border-zinc-800 pt-8">
          <Link
            to="/cases"
            className="flex items-center gap-2 text-zinc-500 hover:text-emerald-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-bold uppercase tracking-wider">Все кейсы</span>
          </Link>
        </div>
      </div>

      {/* Другие кейсы */}
      {otherCases.length > 0 && (
        <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto border-t border-zinc-900 mt-16">
          <h2 className="text-2xl md:text-4xl font-black text-white mb-8 uppercase tracking-tight">
            Смотрите также
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {otherCases.map(project => (
              <Link
                key={project.id}
                to={`/cases/${project.slug}`}
                className="group bg-[#0d0d0d] border border-zinc-800 hover:border-emerald-500 transition-all duration-300"
              >
                <div className="relative overflow-hidden h-48 border-b border-zinc-800">
                  <div className="absolute inset-0 bg-emerald-500/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-black text-white mb-2 uppercase tracking-tighter group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-500 text-sm">{project.subtitle}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
