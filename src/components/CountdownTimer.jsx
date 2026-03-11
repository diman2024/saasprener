import { useState, useEffect, useRef } from 'react';

// Премиальный countdown-таймер с flip-анимацией
export default function CountdownTimer({ targetDate, label }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const prevTimeRef = useRef(timeLeft);

  function calculateTimeLeft() {
    const difference = targetDate - new Date();
    
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      expired: false
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      prevTimeRef.current = timeLeft;
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, timeLeft]);

  if (timeLeft.expired) {
    return (
      <div className="text-center">
        <p className="text-emerald-400 text-sm font-bold uppercase tracking-widest mb-4">
          {label || 'Время вышло'}
        </p>
      </div>
    );
  }

  const timeUnits = [
    { value: timeLeft.days, label: 'дней', prev: prevTimeRef.current.days },
    { value: timeLeft.hours, label: 'часов', prev: prevTimeRef.current.hours },
    { value: timeLeft.minutes, label: 'минут', prev: prevTimeRef.current.minutes },
    { value: timeLeft.seconds, label: 'секунд', prev: prevTimeRef.current.seconds }
  ];

  return (
    <div className="countdown-wrapper">
      {/* Лейбл таймера */}
      {label && (
        <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-4 text-center">
          {label}
        </p>
      )}
      
      {/* Цифры таймера */}
      <div className="flex justify-center items-center gap-2 md:gap-4">
        {timeUnits.map((unit, index) => (
          <div key={unit.label} className="flex items-center">
            <TimeUnit 
              value={unit.value} 
              label={unit.label} 
              isChanging={unit.value !== unit.prev}
            />
            {index < timeUnits.length - 1 && (
              <span className="text-zinc-600 text-3xl md:text-4xl font-bold mx-1 md:mx-2">:</span>
            )}
          </div>
        ))}
      </div>

      {/* CSS для анимаций */}
      <style>{`
        .time-unit {
          position: relative;
          perspective: 300px;
        }
        
        .time-digit {
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(180deg, #1a1a1a 0%, #0d0d0d 100%);
          border: 1px solid #262626;
          min-width: 60px;
          height: 72px;
          position: relative;
          overflow: hidden;
        }
        
        @media (min-width: 768px) {
          .time-digit {
            min-width: 80px;
            height: 96px;
          }
        }
        
        .time-digit::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 1px;
          background: #1f1f1f;
          z-index: 2;
        }
        
        .time-digit::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 50%;
          background: linear-gradient(180deg, rgba(255,255,255,0.03) 0%, transparent 100%);
          pointer-events: none;
        }
        
        .digit-value {
          font-size: 2rem;
          font-weight: 900;
          color: #fafafa;
          font-variant-numeric: tabular-nums;
          letter-spacing: -0.02em;
          transition: transform 0.15s ease-out, opacity 0.15s ease-out;
        }
        
        @media (min-width: 768px) {
          .digit-value {
            font-size: 2.5rem;
          }
        }
        
        .digit-changing .digit-value {
          animation: digitFlip 0.3s ease-out;
        }
        
        @keyframes digitFlip {
          0% {
            transform: translateY(-20%);
            opacity: 0;
          }
          50% {
            transform: translateY(5%);
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .time-label {
          font-size: 0.625rem;
          color: #71717a;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 700;
          margin-top: 8px;
          text-align: center;
        }
        
        @media (min-width: 768px) {
          .time-label {
            font-size: 0.7rem;
          }
        }
      `}</style>
    </div>
  );
}

// Отдельная единица времени
function TimeUnit({ value, label, isChanging }) {
  const formattedValue = String(value).padStart(2, '0');
  
  return (
    <div className="time-unit flex flex-col items-center">
      <div className={`time-digit ${isChanging ? 'digit-changing' : ''}`}>
        <span className="digit-value">{formattedValue}</span>
      </div>
      <span className="time-label">{label}</span>
    </div>
  );
}
