import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import ArticleCard from '../components/ArticleCard';
import { articles, categories, tags } from '../data/articles';

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Фильтрация статей
  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
      const matchesCategory = activeCategory === 'all' || article.category === activeCategory;
      const matchesSearch = searchQuery === '' || 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const breadcrumbItems = [
    { name: 'Блог', url: '/blog' }
  ];

  return (
    <>
      <SEOHead 
        title="Блог SAASPRENER — статьи про SaaS, AI и запуск IT-проектов"
        description="Практические статьи о создании SaaS-сервисов, использовании AI в разработке, запуске IT-проектов без команды и монетизации онлайн-продуктов."
        canonical="/blog"
      />

      {/* Hero секция блога */}
      <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
        <Breadcrumbs items={breadcrumbItems} />
        
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter uppercase">
            Блог
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl border-l-2 border-emerald-500 pl-6">
            Практические материалы про создание SaaS-сервисов, AI в разработке, запуск IT-проектов и монетизацию онлайн-продуктов.
          </p>
        </div>

        {/* Поиск */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Поиск статей..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full md:w-96 bg-[#0d0d0d] border border-zinc-800 px-6 py-4 text-white placeholder-zinc-600 focus:border-emerald-500 focus:outline-none transition-colors"
          />
        </div>

        {/* Фильтры по категориям */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-sm font-bold uppercase tracking-wider transition-colors ${
                activeCategory === cat.id
                  ? 'bg-emerald-500 text-zinc-950'
                  : 'bg-[#0d0d0d] border border-zinc-800 text-zinc-400 hover:border-emerald-500 hover:text-emerald-400'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Сетка статей */}
        {filteredArticles.length > 0 ? (
          <div className="space-y-6">
            {filteredArticles.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-zinc-500 text-lg">Статьи не найдены</p>
          </div>
        )}
      </section>

      {/* Облако тегов */}
      <section className="py-16 px-6 max-w-7xl mx-auto border-t border-zinc-900">
        <h2 className="text-2xl font-black text-white mb-8 uppercase tracking-tight">
          Популярные темы
        </h2>
        <div className="flex flex-wrap gap-3">
          {tags.map(tag => (
            <Link
              key={tag}
              to={`/blog?tag=${encodeURIComponent(tag)}`}
              className="px-4 py-2 bg-[#0d0d0d] border border-zinc-800 text-sm text-zinc-400 hover:border-emerald-500 hover:text-emerald-400 transition-colors"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </section>

      {/* CTA блок */}
      <section className="py-16 px-6 max-w-7xl mx-auto border-t border-zinc-900">
        <div className="bg-[#0d0d0d] border border-zinc-800 p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h3 className="text-2xl md:text-3xl font-black text-white mb-4 uppercase tracking-tight">
              Хочешь создавать свои SaaS-сервисы?
            </h3>
            <p className="text-zinc-400">
              Записывайся на обучение и начни строить собственные онлайн-продукты
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
