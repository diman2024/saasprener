import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import { cases } from '../data/cases';

export default function Cases() {
  const breadcrumbItems = [
    { name: 'Кейсы', url: '/cases' }
  ];

  return (
    <>
      <SEOHead 
        title="Кейсы SAASPRENER — реальные SaaS-проекты и результаты"
        description="Примеры реальных SaaS-сервисов, созданных соло: FIVEADS, SYNAPSE, Emailzavr и другие. Архитектура, технологии, результаты."
        canonical="/cases"
      />

      {/* Hero секция */}
      <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
        <Breadcrumbs items={breadcrumbItems} />
        
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter uppercase">
            Кейсы проектов
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl border-l-2 border-emerald-500 pl-6">
            Реальные SaaS-сервисы, созданные своими руками. Каждый проект — это рабочий бизнес с платящими клиентами.
          </p>
        </div>

        {/* Статистика */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-[#0d0d0d] border border-zinc-800 p-6 text-center">
            <div className="text-4xl font-black text-emerald-500 mb-2">5+</div>
            <p className="text-xs text-zinc-500 uppercase tracking-wider font-bold">Запущенных сервисов</p>
          </div>
          <div className="bg-[#0d0d0d] border border-zinc-800 p-6 text-center">
            <div className="text-4xl font-black text-emerald-500 mb-2">100%</div>
            <p className="text-xs text-zinc-500 uppercase tracking-wider font-bold">Соло-разработка</p>
          </div>
          <div className="bg-[#0d0d0d] border border-zinc-800 p-6 text-center">
            <div className="text-4xl font-black text-emerald-500 mb-2">B2B</div>
            <p className="text-xs text-zinc-500 uppercase tracking-wider font-bold">И B2C сегменты</p>
          </div>
          <div className="bg-[#0d0d0d] border border-zinc-800 p-6 text-center">
            <div className="text-4xl font-black text-emerald-500 mb-2">5M+</div>
            <p className="text-xs text-zinc-500 uppercase tracking-wider font-bold">Записей в базах</p>
          </div>
        </div>

        {/* Список кейсов */}
        <div className="space-y-8">
          {cases.map((project, idx) => (
            <Link
              key={project.id}
              to={`/cases/${project.slug}`}
              className="group block bg-[#0d0d0d] border border-zinc-800 hover:border-emerald-500 transition-all duration-300"
            >
              <div className="grid md:grid-cols-12 gap-0">
                {/* Изображение */}
                <div className="md:col-span-5 relative overflow-hidden h-64 md:h-auto border-b md:border-b-0 md:border-r border-zinc-800">
                  <div className="absolute inset-0 bg-emerald-500/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                
                {/* Контент */}
                <div className="md:col-span-7 p-6 md:p-10 flex flex-col">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-xs font-black text-emerald-400 uppercase tracking-widest">
                      {project.type}
                    </span>
                    <span className="text-zinc-600 text-sm">{project.year}</span>
                  </div>
                  
                  <h2 className="text-2xl md:text-4xl font-black text-white mb-2 uppercase tracking-tighter group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-lg text-zinc-500 mb-4">{project.subtitle}</p>
                  
                  <p className="text-zinc-400 mb-6 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-zinc-900 text-xs font-black uppercase tracking-widest text-zinc-400 border border-zinc-800">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-zinc-600 uppercase tracking-widest">
                      {project.stats}
                    </span>
                    <span className="flex items-center gap-2 text-emerald-500 font-bold uppercase tracking-wider group-hover:gap-3 transition-all">
                      Подробнее <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA блок */}
      <section className="py-16 px-6 max-w-7xl mx-auto border-t border-zinc-900">
        <div className="bg-emerald-500 p-8 md:p-12">
          <div className="max-w-3xl">
            <h3 className="text-2xl md:text-4xl font-black text-zinc-950 mb-4 uppercase tracking-tight">
              Хочешь создавать такие же проекты?
            </h3>
            <p className="text-zinc-900 font-medium mb-8">
              Записывайся на обучение и научись собирать SaaS-сервисы с нуля. От идеи до первых платящих клиентов.
            </p>
            <Link
              to="/#price"
              className="inline-block bg-zinc-950 text-white px-8 py-4 font-black uppercase tracking-widest hover:bg-zinc-800 transition-colors"
            >
              Записаться на курс
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
