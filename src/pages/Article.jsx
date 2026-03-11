import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Clock, ArrowLeft, ArrowRight, Share2 } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import { SchemaOrg } from '../components/SchemaOrg';
import ArticleCard from '../components/ArticleCard';
import { articles } from '../data/articles';

// Простой парсер Markdown для контента статей
function MarkdownContent({ content }) {
  // Разбиваем на строки и парсим
  const lines = content.trim().split('\n');
  const elements = [];
  let currentParagraph = [];
  let inList = false;
  let listItems = [];

  const flushParagraph = () => {
    if (currentParagraph.length > 0) {
      elements.push(
        <p key={elements.length} className="text-zinc-400 leading-relaxed mb-6">
          {parseInline(currentParagraph.join(' '))}
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
              <span>{parseInline(item)}</span>
            </li>
          ))}
        </ul>
      );
      listItems = [];
      inList = false;
    }
  };

  // Парсинг inline элементов (жирный, курсив и т.д.)
  const parseInline = (text) => {
    // Простая замена **bold** на <strong>
    const parts = text.split(/(\*\*[^*]+\*\*)/);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="text-white font-bold">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  lines.forEach((line, idx) => {
    const trimmed = line.trim();
    
    // Заголовок H2
    if (trimmed.startsWith('## ')) {
      flushParagraph();
      flushList();
      elements.push(
        <h2 key={elements.length} className="text-2xl md:text-3xl font-black text-white mb-6 mt-12 uppercase tracking-tight">
          {trimmed.slice(3)}
        </h2>
      );
    }
    // Заголовок H3
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
    else if (/^\d+\.\s/.test(trimmed)) {
      flushParagraph();
      if (!inList) inList = true;
      listItems.push(trimmed.replace(/^\d+\.\s/, ''));
    }
    // Маркированный список
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

export default function Article() {
  const { slug } = useParams();
  
  // Находим статью по slug
  const article = articles.find(a => a.slug === slug);
  
  // Если статья не найдена
  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  // Получаем связанные статьи
  const relatedArticles = article.relatedArticles
    ?.map(id => articles.find(a => a.id === id))
    .filter(Boolean) || [];

  // Форматирование даты
  const formatDate = (dateStr) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateStr).toLocaleDateString('ru-RU', options);
  };

  // Хлебные крошки
  const breadcrumbItems = [
    { name: 'Блог', url: '/blog' },
    { name: article.title }
  ];

  // Генерация оглавления из контента
  const generateTOC = (content) => {
    const headings = content.match(/^## .+$/gm) || [];
    return headings.map(h => ({
      title: h.replace('## ', ''),
      id: h.replace('## ', '').toLowerCase().replace(/\s+/g, '-')
    }));
  };

  const toc = generateTOC(article.content);

  return (
    <>
      <SEOHead 
        title={`${article.title} — SAASPRENER`}
        description={article.description}
        canonical={`/blog/${article.slug}`}
        type="article"
        image={article.image}
        article={{
          date: article.date,
          tags: article.tags
        }}
      />
      <SchemaOrg 
        type="article" 
        data={{
          title: article.title,
          description: article.description,
          image: article.image,
          date: article.date,
          url: `/blog/${article.slug}`
        }} 
      />

      {/* Hero секция статьи */}
      <section className="pt-32 pb-8 px-6 max-w-4xl mx-auto">
        <Breadcrumbs items={breadcrumbItems} />
        
        {/* Категория и дата */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-xs font-black text-emerald-400 uppercase tracking-widest">
            {article.category}
          </span>
          <span className="text-zinc-500 text-sm">{formatDate(article.date)}</span>
          <span className="flex items-center gap-1 text-zinc-500 text-sm">
            <Clock className="w-4 h-4" />
            {article.readTime}
          </span>
        </div>

        {/* Заголовок */}
        <h1 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tighter uppercase leading-tight">
          {article.title}
        </h1>

        {/* Лид */}
        <p className="text-xl text-zinc-400 leading-relaxed border-l-2 border-emerald-500 pl-6 mb-8">
          {article.description}
        </p>
      </section>

      {/* Изображение статьи */}
      {article.image && (
        <div className="max-w-5xl mx-auto px-6 mb-12">
          <div className="relative overflow-hidden border border-zinc-800">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-60"></div>
          </div>
        </div>
      )}

      {/* Основной контент */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Sidebar с оглавлением */}
          <aside className="lg:col-span-3 hidden lg:block">
            <div className="sticky top-28">
              {toc.length > 0 && (
                <div className="bg-[#0d0d0d] border border-zinc-800 p-6 mb-6">
                  <h4 className="text-sm font-black text-white uppercase tracking-widest mb-4">
                    Содержание
                  </h4>
                  <nav className="space-y-2">
                    {toc.map((item, idx) => (
                      <a 
                        key={idx}
                        href={`#${item.id}`}
                        className="block text-sm text-zinc-500 hover:text-emerald-400 transition-colors py-1"
                      >
                        {item.title}
                      </a>
                    ))}
                  </nav>
                </div>
              )}

              {/* Теги */}
              <div className="bg-[#0d0d0d] border border-zinc-800 p-6">
                <h4 className="text-sm font-black text-white uppercase tracking-widest mb-4">
                  Теги
                </h4>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map(tag => (
                    <Link
                      key={tag}
                      to={`/blog?tag=${encodeURIComponent(tag)}`}
                      className="px-3 py-1 bg-zinc-900 text-xs text-zinc-400 border border-zinc-800 hover:border-emerald-500 hover:text-emerald-400 transition-colors"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Контент статьи */}
          <article className="lg:col-span-9">
            <div className="prose prose-invert max-w-none">
              <MarkdownContent content={article.content} />
            </div>

            {/* Блок "Главные выводы" если есть */}
            {article.content.includes('## Главные выводы') && (
              <div className="mt-12 bg-emerald-500/10 border border-emerald-500/30 p-8">
                <h3 className="text-xl font-black text-emerald-400 mb-4 uppercase">
                  Ключевые мысли
                </h3>
                <p className="text-zinc-400">
                  Сохрани эту статью и возвращайся к ней, когда будешь планировать свой следующий проект.
                </p>
              </div>
            )}

            {/* CTA */}
            <div className="mt-12 bg-[#0d0d0d] border border-zinc-800 p-8 md:p-10">
              <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight">
                Хочешь создавать свои SaaS-сервисы?
              </h3>
              <p className="text-zinc-400 mb-6">
                Записывайся на обучение и начни строить собственные онлайн-продукты под личным руководством практика.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/#price"
                  className="bg-emerald-500 text-zinc-950 px-6 py-3 font-black uppercase tracking-widest hover:bg-emerald-400 transition-colors"
                >
                  Записаться на курс
                </Link>
                <Link
                  to="/cases"
                  className="border border-zinc-700 text-white px-6 py-3 font-bold uppercase tracking-widest hover:border-emerald-500 transition-colors"
                >
                  Смотреть кейсы
                </Link>
              </div>
            </div>

            {/* Теги (мобильная версия) */}
            <div className="mt-8 lg:hidden">
              <div className="flex flex-wrap gap-2">
                {article.tags.map(tag => (
                  <Link
                    key={tag}
                    to={`/blog?tag=${encodeURIComponent(tag)}`}
                    className="px-3 py-1 bg-zinc-900 text-xs text-zinc-400 border border-zinc-800 hover:border-emerald-500 hover:text-emerald-400 transition-colors"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* Навигация между статьями */}
            <div className="mt-12 flex justify-between items-center border-t border-zinc-800 pt-8">
              <Link
                to="/blog"
                className="flex items-center gap-2 text-zinc-500 hover:text-emerald-400 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm font-bold uppercase tracking-wider">Все статьи</span>
              </Link>
            </div>
          </article>
        </div>
      </div>

      {/* Связанные статьи */}
      {relatedArticles.length > 0 && (
        <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto border-t border-zinc-900 mt-16">
          <h2 className="text-2xl md:text-4xl font-black text-white mb-8 uppercase tracking-tight">
            Читайте также
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedArticles.map(article => (
              <ArticleCard key={article.id} article={article} variant="compact" />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
