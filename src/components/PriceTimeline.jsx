import { getPriceStages, formatPrice } from '../data/courseConfig';
import { CheckCircle2, Circle, Clock } from 'lucide-react';

// Вертикальный timeline этапов цены
export default function PriceTimeline() {
  const stages = getPriceStages();

  return (
    <div className="price-timeline">
      <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-6">
        Рост цены по этапам
      </h4>
      
      <div className="relative">
        {/* Вертикальная линия */}
        <div className="absolute left-3 top-0 bottom-0 w-px bg-zinc-800"></div>
        
        {/* Этапы */}
        <div className="space-y-4">
          {stages.map((stage, index) => (
            <PriceStage 
              key={stage.id} 
              stage={stage} 
              isLast={index === stages.length - 1}
            />
          ))}
        </div>
      </div>

      <style>{`
        .price-stage {
          transition: all 0.3s ease;
        }
        
        .price-stage:hover {
          transform: translateX(4px);
        }
        
        .stage-icon {
          transition: all 0.3s ease;
        }
        
        .price-stage:hover .stage-icon {
          transform: scale(1.1);
        }
        
        .stage-active {
          background: linear-gradient(90deg, rgba(16, 185, 129, 0.1) 0%, transparent 100%);
        }
        
        .stage-passed {
          opacity: 0.5;
        }
        
        .price-glow {
          text-shadow: 0 0 20px rgba(16, 185, 129, 0.5);
        }
      `}</style>
    </div>
  );
}

function PriceStage({ stage, isLast }) {
  const isActive = stage.status === 'active';
  const isPassed = stage.status === 'passed';
  
  return (
    <div 
      className={`price-stage relative flex items-start gap-4 py-3 px-4 -ml-4 rounded-r-lg
        ${isActive ? 'stage-active' : ''}
        ${isPassed ? 'stage-passed' : ''}
      `}
    >
      {/* Иконка статуса */}
      <div className="stage-icon relative z-10 flex-shrink-0">
        {isPassed ? (
          <CheckCircle2 className="w-6 h-6 text-zinc-600" />
        ) : isActive ? (
          <div className="relative">
            <Circle className="w-6 h-6 text-emerald-500 fill-emerald-500" />
            <div className="absolute inset-0 animate-ping">
              <Circle className="w-6 h-6 text-emerald-500 opacity-50" />
            </div>
          </div>
        ) : (
          <Circle className="w-6 h-6 text-zinc-700" />
        )}
      </div>
      
      {/* Контент */}
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline justify-between gap-2">
          <span className={`text-sm font-bold uppercase tracking-wide
            ${isActive ? 'text-emerald-400' : isPassed ? 'text-zinc-600' : 'text-zinc-500'}
          `}>
            {stage.label}
          </span>
          <span className={`text-lg font-black tabular-nums
            ${isActive ? 'text-white price-glow' : isPassed ? 'text-zinc-600 line-through' : 'text-zinc-400'}
          `}>
            {formatPrice(stage.price)}
          </span>
        </div>
        
        {isActive && (
          <div className="flex items-center gap-2 mt-1">
            <Clock className="w-3 h-3 text-emerald-500" />
            <span className="text-xs text-emerald-400/80">Действует сейчас</span>
          </div>
        )}
      </div>
    </div>
  );
}
