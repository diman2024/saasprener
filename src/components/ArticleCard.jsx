import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';

// Карточка статьи для блога и главной страницы
export default function ArticleCard({ article, variant = 'default' }) {
  const { slug, title, description, category, date, readTime, image } = article;

  // Форматирование даты
  const formatDate = (dateStr) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateStr).toLocaleDateString('ru-RU', options);
  };

  // Вариант для главной страницы (компактный)
  if (variant === 'compact') {
    return (
      <Link 
        to={`/blog/${slug}`}
        className="group bg-[#0d0d0d] border border-zinc-800 hover:border-emerald-500 transition-all duration-300 flex flex-col"
      >
        <div className="relative h-48 overflow-hidden border-b border-zinc-800">
          <div className="absolute inset-0 bg-emerald-500/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <img 
            src={image || '/articles/default.jpg'} 
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
          />
        </div>
        
        <div className="p-6 flex flex-col flex-grow">
          <span className="text-emerald-500 text-xs font-black uppercase tracking-widest mb-3">
            {category}
          </span>
          <h3 className="text-lg font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-zinc-500 text-sm line-clamp-2 flex-grow">
            {description}
          </p>
          <div className="flex items-center gap-2 mt-4 text-zinc-600 text-xs">
            <Clock className="w-3 h-3" />
            <span>{readTime}</span>
          </div>
        </div>
      </Link>
    );
  }

  // Вариант по умолчанию (для страницы блога)
  return (
    <Link 
      to={`/blog/${slug}`}
      className="group bg-[#0d0d0d] border border-zinc-800 hover:border-emerald-500 transition-all duration-300 flex flex-col md:flex-row"
    >
      <div className="relative w-full md:w-72 h-48 md:h-auto flex-shrink-0 overflow-hidden border-b md:border-b-0 md:border-r border-zinc-800">
        <div className="absolute inset-0 bg-emerald-500/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <img 
          src={image || '/articles/default.jpg'} 
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
        />
      </div>
      
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <div className="flex items-center gap-4 mb-4">
          <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-xs font-black text-emerald-400 uppercase tracking-widest">
            {category}
          </span>
          <span className="text-zinc-600 text-sm">{formatDate(date)}</span>
        </div>
        
        <h3 className="text-xl md:text-2xl font-black text-white mb-4 group-hover:text-emerald-400 transition-colors uppercase tracking-tight">
          {title}
        </h3>
        
        <p className="text-zinc-400 mb-6 flex-grow line-clamp-2 md:line-clamp-3">
          {description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-zinc-500 text-sm">
            <Clock className="w-4 h-4" />
            <span>{readTime}</span>
          </div>
          
          <span className="flex items-center gap-2 text-emerald-500 font-bold text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
            Читать <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
