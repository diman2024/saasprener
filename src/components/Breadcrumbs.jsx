import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { SchemaOrg } from './SchemaOrg';

// Компонент хлебных крошек
export default function Breadcrumbs({ items }) {
  const location = useLocation();

  // Формируем данные для schema.org
  const schemaItems = [
    { name: 'Главная', url: '/' },
    ...items
  ];

  return (
    <>
      <SchemaOrg type="breadcrumbs" data={{ items: schemaItems }} />
      
      <nav aria-label="Breadcrumb" className="py-4">
        <ol className="flex flex-wrap items-center gap-2 text-sm">
          <li className="flex items-center">
            <Link 
              to="/" 
              className="text-zinc-500 hover:text-emerald-400 transition-colors flex items-center gap-1"
            >
              <Home className="w-4 h-4" />
              <span className="sr-only md:not-sr-only">Главная</span>
            </Link>
          </li>
          
          {items.map((item, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <ChevronRight className="w-4 h-4 text-zinc-700" />
              {item.url && idx !== items.length - 1 ? (
                <Link 
                  to={item.url} 
                  className="text-zinc-500 hover:text-emerald-400 transition-colors"
                >
                  {item.name}
                </Link>
              ) : (
                <span className="text-zinc-300 font-medium">{item.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
