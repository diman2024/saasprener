# Инструкция по интеграции YooKassa

## Структура файлов

### Backend (созданные файлы):
- `backend/src/services/yookassaService.js` — сервис интеграции с API YooKassa
- `backend/src/services/emailService.js` — сервис email уведомлений
- `backend/src/services/logger.js` — сервис логирования платежей
- `backend/src/routes/yookassa.js` — роуты API для платежей и webhook

### Frontend (созданные файлы):
- `src/components/PaymentForm.jsx` — компонент формы оплаты
- `src/pages/Payment.jsx` — страница оплаты
- `src/pages/PaymentSuccess.jsx` — страница успешной оплаты

---

## 1. Настройка HTTPS (SSL)

### Установка Certbot:
```bash
# Ubuntu/Debian
sudo apt update
sudo apt install certbot python3-certbot-nginx

# Получение сертификата
sudo certbot --nginx -d saasprener.online -d www.saasprener.online
```

### Автоматическое обновление:
```bash
# Проверка автообновления
sudo certbot renew --dry-run

# Добавление в crontab (если нужно)
0 0,12 * * * certbot renew --quiet
```

---

## 2. Настройка Nginx

### Конфигурация `/etc/nginx/sites-available/saasprener`:
```nginx
server {
    listen 80;
    server_name saasprener.online www.saasprener.online;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name saasprener.online www.saasprener.online;

    ssl_certificate /etc/letsencrypt/live/saasprener.online/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/saasprener.online/privkey.pem;
    
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256;
    ssl_prefer_server_ciphers off;

    # Frontend
    location / {
        root /var/www/saasprener/dist;
        try_files $uri $uri/ /index.html;
    }

    # Backend API
    location /api {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## 3. Настройка .env

Отредактируйте файл `backend/.env`:

```env
# YooKassa (уже настроено)
YOOKASSA_SHOP_ID=1297654
YOOKASSA_SECRET_KEY=live_uBIz8KLPFjOm2hvbRW5BIuPG6NiMr4MqBx5k8_TdM2A

# Email (НУЖНО НАСТРОИТЬ!)
SMTP_HOST=smtp.yandex.ru
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=ваш_email@домен.ru
SMTP_PASS=пароль_приложения
EMAIL_FROM=SAASPRENER <noreply@saasprener.online>
ADMIN_EMAIL=admin@saasprener.online

# Сайт
SITE_URL=https://saasprener.online
```

### Настройка SMTP через Яндекс:
1. Создайте почтовый ящик на вашем домене через Яндекс.Почту для бизнеса
2. Включите "Пароли приложений" в настройках безопасности
3. Создайте пароль приложения и используйте его в `SMTP_PASS`

---

## 4. Настройка Webhook в ЮKassa

1. Войдите в личный кабинет ЮKassa: https://yookassa.ru/my
2. Перейдите в раздел "Интеграция" → "HTTP-уведомления"
3. Добавьте URL webhook:
   ```
   https://saasprener.online/api/yookassa/webhook
   ```
4. Выберите события:
   - `payment.succeeded`
   - `payment.waiting_for_capture`
   - `payment.canceled`

---

## 5. Запуск

### Сборка фронтенда:
```bash
cd /root/SAASПРЕНЕР
npm run build
```

### Запуск бэкенда:
```bash
cd /root/SAASПРЕНЕР/backend
npm start
```

### С PM2 (рекомендуется):
```bash
pm2 start /root/SAASПРЕНЕР/backend/index.js --name saasprener-backend
pm2 save
```

---

## 6. API Endpoints

### Создание платежа
```
POST /api/yookassa/create-payment
Content-Type: application/json

{
  "name": "Иван Иванов",
  "email": "ivan@example.com",
  "phone": "+79991234567",
  "amount": 5000,
  "description": "Оплата курса"
}

Response:
{
  "success": true,
  "payment_id": "2b8231d7-...",
  "confirmation_url": "https://yoomoney.ru/checkout/..."
}
```

### Webhook (от YooKassa)
```
POST /api/yookassa/webhook
```

### Проверка статуса платежа
```
GET /api/yookassa/payment-status/:id
```

---

## 7. Тестирование

### Тест 1: Создание платежа
1. Откройте https://saasprener.online/payment
2. Заполните форму
3. Нажмите "Оплатить"
4. Проверьте редирект на YooKassa

### Тест 2: Оплата (тестовый режим)
В тестовом режиме YooKassa используйте:
- Карта: 5555 5555 5555 4444
- Срок: любой в будущем
- CVC: любые 3 цифры

### Тест 3: Webhook
Проверьте логи:
```bash
tail -f /root/SAASПРЕНЕР/backend/logs/payments.log
```

### Тест 4: Email
Проверьте получение писем клиентом и администратором.

### Тест 5: Яндекс Метрика
Проверьте события `payment_started` и `payment_success` в Яндекс Метрике.

---

## 8. Логи

Логи платежей сохраняются в:
- `backend/logs/payments.log` — все операции с платежами
- `backend/logs/errors.log` — ошибки

---

## 9. Чеклист перед запуском

- [ ] HTTPS работает (проверить https://saasprener.online)
- [ ] Форма оплаты открывается (/payment)
- [ ] Платеж создается (редирект на YooKassa)
- [ ] Webhook настроен в личном кабинете YooKassa
- [ ] Email настроен (SMTP_USER и SMTP_PASS)
- [ ] Администратор указан (ADMIN_EMAIL)
- [ ] PM2 запущен и сохранен
- [ ] Яндекс Метрика: код счетчика 98650651 на сайте
