import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import FAQ from '../components/FAQ';
import ArticleCard from '../components/ArticleCard';
import { hubs } from '../data/hubs';
import { articles } from '../data/articles';
import { saasDevFAQ, aiFAQ } from '../data/faq';

// Парсер markdown для контента хаба
function MarkdownContent({ content }) {
  const lines = content.trim().split('\n');
  const elements = [];
  let currentParagraph = [];
  let inList = false;
  let listItems = [];
  let listType = 'ul';

  const flushParagraph = () => {
    if (currentParagraph.length > 0) {
      const text = currentParagraph.join(' ');
      // Парсим **bold**
      const parts = text.split(/(\*\*[^*]+\*\*)/);
      const parsed = parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i} className="text-white font-bold">{part.slice(2, -2)}</strong>;
        }
        return part;
      });
      
      elements.push(
        <p key={elements.length} className="text-zinc-400 leading-relaxed mb-6">
          {parsed}
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
    
    // H2
    if (trimmed.startsWith('## ')) {
      flushParagraph();
      flushList();
      elements.push(
        <h2 key={elements.length} className="text-2xl md:text-3xl font-black text-white mb-6 mt-16 uppercase tracking-tight">
          {trimmed.slice(3)}
        </h2>
      );
    }
    // H3
    else if (trimmed.startsWith('### ')) {
      flushParagraph();
      flushList();
      elements.push(
        <h3 key={elements.length} className="text-xl font-black text-white mb-4 mt-8 uppercase tracking-tight">
          {trimmed.slice(4)}
        </h3>
      );
    }
    // Нумерованный список
    else if (/^\d+\.\s\*\*/.test(trimmed)) {
      flushParagraph();
      if (!inList) inList = true;
      const match = trimmed.match(/^\d+\.\s\*\*(.+?)\*\*\s*—?\s*(.*)/);
      if (match) {
        listItems.push(
          <><strong className="text-white">{match[1]}</strong> — {match[2]}</>
        );
      }
    }
    else if (/^\d+\.\s/.test(trimmed)) {
      flushParagraph();
      if (!inList) inList = true;
      listItems.push(trimmed.replace(/^\d+\.\s/, ''));
    }
    // Маркированный список
    else if (trimmed.startsWith('- **')) {
      flushParagraph();
      if (!inList) inList = true;
      const match = trimmed.match(/- \*\*(.+?)\*\*\s*—?\s*(.*)/);
      if (match) {
        listItems.push(
          <><strong className="text-white">{match[1]}</strong> — {match[2]}</>
        );
      }
    }
    else if (trimmed.startsWith('- ')) {
      flushParagraph();
      if (!inList) inList = true;
      listItems.push(trimmed.slice(2));
    }
    // Пустая строка
    else if (trimmed === '') {
      flushParagraph();
      flushList();
    }
    // Обычный текст
    else {
      flushList();
      currentParagraph.push(trimmed);
    }
  });

  flushParagraph();
  flushList();

  return <>{elements}</>;
}

export default function Hub() {
  const { slug } = useParams();
  
  // Находим хаб по slug
  const hub = hubs.find(h => h.slug === slug);
  
  // Если хаб не найден
  if (!hub) {
    return <Navigate to="/" replace />;
  }

  // Получаем связанные статьи
  const relatedArticles = hub.relatedArticles
    ?.map(id => articles.find(a => a.id === id))
    .filter(Boolean) || [];

  // Получаем связанные хабы
  const relatedHubs = hub.relatedHubs
    ?.map(slug => hubs.find(h => h.slug === slug))
    .filter(Boolean) || [];

  // FAQ для конкретных хабов
  const getFAQForHub = (slug) => {
    switch(slug) {
      case 'saas-razrabotka':
        return saasDevFAQ;
      case 'ai-v-razrabotke':
        return aiFAQ;
      default:
        return null;
    }
  };

  const hubFAQ = getFAQForHub(hub.slug);

  // Хлебные крошки
  const breadcrumbItems = [
    { name: hub.title }
  ];

  return (
    <>
      <SEOHead 
        title={hub.metaTitle}
        description={hub.description}
        canonical={`/hub/${hub.slug}`}
      />

      {/* Hero секция хаба */}
      <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
        <Breadcrumbs items={breadcrumbItems} />
        
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter uppercase">
            {hub.heroTitle}
          </h1>
          <p className="text-xl text-zinc-400 leading-relaxed border-l-2 border-emerald-500 pl-6">
            {hub.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Основной контент */}
      <section className="px-6 max-w-4xl mx-auto pb-16">
        <div className="prose prose-invert max-w-none">
          <MarkdownContent content={hub.content} />
        </div>
      </section>

      {/* Ключевые слова (для SEO, скрыто визуально но доступно для индексации) */}
      <div className="sr-only">
        {hub.keywords?.join(', ')}
      </div>

      {/* FAQ если есть */}
      {hubFAQ && (
        <div className="border-t border-zinc-900">
          <FAQ questions={hubFAQ} title="Частые вопросы" />
        </div>
      )}

      {/* Связанные статьи */}
      {relatedArticles.length > 0 && (
        <section className="py-16 px-6 max-w-7xl mx-auto border-t border-zinc-900">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight">
              Статьи по теме
            </h2>
            <Link 
              to="/blog"
              className="flex items-center gap-2 text-emerald-500 font-bold uppercase tracking-wider hover:gap-3 transition-all"
            >
              Все статьи <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedArticles.map(article => (
              <ArticleCard key={article.id} article={article} variant="compact" />
            ))}
          </div>
        </section>
      )}

      {/* Связанные хабы */}
      {relatedHubs.length > 0 && (
        <section className="py-16 px-6 max-w-7xl mx-auto border-t border-zinc-900">
          <h2 className="text-2xl md:text-4xl font-black text-white mb-8 uppercase tracking-tight">
            Смежные темы
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {relatedHubs.map(relatedHub => (
              <Link
                key={relatedHub.id}
                to={`/hub/${relatedHub.slug}`}
                className="group bg-[#0d0d0d] border border-zinc-800 p-8 hover:border-emerald-500 transition-all duration-300"
              >
                <h3 className="text-xl font-black text-white mb-3 uppercase tracking-tight group-hover:text-emerald-400 transition-colors">
                  {relatedHub.title}
                </h3>
                <p className="text-zinc-500 text-sm mb-4">
                  {relatedHub.description}
                </p>
                <span className="flex items-center gap-2 text-emerald-500 font-bold text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
                  Читать <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* CTA блок */}
      <section className="py-16 px-6 max-w-7xl mx-auto border-t border-zinc-900">
        <div className="bg-[#0d0d0d] border border-zinc-800 p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h3 className="text-2xl md:text-3xl font-black text-white mb-4 uppercase tracking-tight">
              Готов начать создавать свои сервисы?
            </h3>
            <p className="text-zinc-400">
              Записывайся на обучение и получи все знания для запуска собственного SaaS-бизнеса
            </p>
          </div>
          <Link
            to="/#price"
            className="flex-shrink-0 bg-emerald-500 text-zinc-950 px-8 py-4 font-black uppercase tracking-widest hover:bg-emerald-400 transition-colors"
          >
            Записаться
          </Link>
        </div>
      </section>
    </>
  );
}
