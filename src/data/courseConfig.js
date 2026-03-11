// Конфигурация курса - все даты и цены в одном месте
// Для изменения условий редактируйте только этот файл

export const courseConfig = {
  // Название потока
  streamName: 'Март 2026',
  
  // Даты в формате ISO (год, месяц-1, день, час, минута)
  // Месяц 0-индексированный: 0 = январь, 2 = март
  courseStartDate: new Date(2026, 2, 25, 10, 0, 0), // 25 марта 2026, 10:00
  firstPriceRiseDate: new Date(2026, 2, 18, 0, 0, 0), // 18 марта 2026, 00:00
  secondPriceRiseDate: new Date(2026, 2, 25, 0, 0, 0), // 25 марта 2026, 00:00
  
  // Цены
  priceStage1: 50000, // до 18 числа
  priceStage2: 70000, // с 18 по 25
  priceStage3: 100000, // с 25 числа
  
  // Настройки
  enrollmentClosed: false, // Набор закрыт?
  prepaymentAmount: 10000, // Сумма предоплаты
  prepaymentRefundable: false, // Предоплата возвратная?
  
  // Контакты для форм
  telegramBot: '@saasprener_bot',
  
  // Лимит мест (для отображения)
  totalSpots: 10,
  spotsLeft: 7, // Можно обновлять
};

// Функция получения текущего этапа цены
export function getCurrentPriceStage() {
  const now = new Date();
  const { firstPriceRiseDate, secondPriceRiseDate, enrollmentClosed } = courseConfig;
  
  if (enrollmentClosed) {
    return 'closed';
  }
  
  if (now < firstPriceRiseDate) {
    return 1; // 50 000 ₽
  } else if (now < secondPriceRiseDate) {
    return 2; // 70 000 ₽
  } else {
    return 3; // 100 000 ₽
  }
}

// Получить текущую цену
export function getCurrentPrice() {
  const stage = getCurrentPriceStage();
  const { priceStage1, priceStage2, priceStage3 } = courseConfig;
  
  switch (stage) {
    case 1: return priceStage1;
    case 2: return priceStage2;
    case 3: return priceStage3;
    default: return priceStage3;
  }
}

// Получить следующую дату повышения цены
export function getNextPriceRiseDate() {
  const now = new Date();
  const { firstPriceRiseDate, secondPriceRiseDate, courseStartDate } = courseConfig;
  
  if (now < firstPriceRiseDate) {
    return firstPriceRiseDate;
  } else if (now < secondPriceRiseDate) {
    return secondPriceRiseDate;
  } else {
    return courseStartDate;
  }
}

// Получить текст для таймера
export function getTimerLabel() {
  const stage = getCurrentPriceStage();
  const { priceStage2, priceStage3 } = courseConfig;
  
  switch (stage) {
    case 1:
      return `До повышения цены до ${formatPrice(priceStage2)}`;
    case 2:
      return `До повышения цены до ${formatPrice(priceStage3)}`;
    case 3:
      return 'Курс стартовал';
    case 'closed':
      return 'Набор закрыт';
    default:
      return '';
  }
}

// Форматирование цены
export function formatPrice(price) {
  return new Intl.NumberFormat('ru-RU').format(price) + ' ₽';
}

// Форматирование даты
export function formatDate(date) {
  return date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' });
}

// Данные для этапов цены
export function getPriceStages() {
  const currentStage = getCurrentPriceStage();
  const { priceStage1, priceStage2, priceStage3, firstPriceRiseDate, secondPriceRiseDate } = courseConfig;
  
  return [
    {
      id: 1,
      label: 'Сейчас',
      date: 'До 18 числа',
      price: priceStage1,
      status: currentStage === 1 ? 'active' : currentStage > 1 ? 'passed' : 'upcoming'
    },
    {
      id: 2,
      label: 'С 18 числа',
      date: formatDate(firstPriceRiseDate),
      price: priceStage2,
      status: currentStage === 2 ? 'active' : currentStage > 2 ? 'passed' : 'upcoming'
    },
    {
      id: 3,
      label: 'С 25 числа',
      date: formatDate(secondPriceRiseDate),
      price: priceStage3,
      status: currentStage === 3 ? 'active' : 'upcoming'
    }
  ];
}
