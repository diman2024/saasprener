import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { SchemaOrg } from './SchemaOrg';

// Компонент одного FAQ элемента
function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border-b border-zinc-800 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-center justify-between text-left hover:text-emerald-400 transition-colors group"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors pr-4">
          {question}
        </span>
        <ChevronDown 
          className={`w-5 h-5 text-emerald-500 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}
      >
        <p className="text-zinc-400 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}

// Основной компонент FAQ
export default function FAQ({ 
  questions, 
  title = 'Частые вопросы',
  showSchema = true,
  className = ''
}) {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className={`py-16 md:py-24 ${className}`}>
      {showSchema && (
        <SchemaOrg type="faq" data={{ questions }} />
      )}
      
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-12 tracking-tighter uppercase">
          {title}
        </h2>
        
        <div className="bg-[#0d0d0d] border border-zinc-800 p-6 md:p-10">
          {questions.map((item, idx) => (
            <FAQItem
              key={item.id || idx}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === idx}
              onToggle={() => handleToggle(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
