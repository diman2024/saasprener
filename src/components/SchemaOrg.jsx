import React from 'react';

// Компонент Schema.org разметки
export function SchemaOrg({ type, data }) {
  const siteUrl = 'https://saasprener.online';

  const schemas = {
    // Организация
    organization: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "SAASPRENER",
      "url": siteUrl,
      "logo": `${siteUrl}/logo.png`,
      "description": "Веб-кодинг для предпринимателей. Обучение созданию SaaS-сервисов без команды.",
      "sameAs": [
        "https://t.me/saasprener"
      ]
    },

    // Веб-сайт
    website: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "SAASPRENER",
      "url": siteUrl,
      "description": "Платформа для обучения созданию SaaS-сервисов и онлайн-продуктов",
      "potentialAction": {
        "@type": "SearchAction",
        "target": `${siteUrl}/blog?search={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    },

    // Персона (автор)
    person: {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "SAASPRENER",
      "url": siteUrl,
      "jobTitle": "SaaS Developer & Entrepreneur",
      "description": "Практик создания SaaS-сервисов. Обучаю предпринимателей веб-кодингу.",
      "knowsAbout": ["SaaS", "Web Development", "AI", "Startups", "JavaScript", "React"]
    },

    // Статья блога
    article: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": data?.title,
      "description": data?.description,
      "image": data?.image ? `${siteUrl}${data.image}` : `${siteUrl}/banner-social.jpg`,
      "datePublished": data?.date,
      "dateModified": data?.date,
      "author": {
        "@type": "Person",
        "name": "SAASPRENER",
        "url": siteUrl
      },
      "publisher": {
        "@type": "Organization",
        "name": "SAASPRENER",
        "logo": {
          "@type": "ImageObject",
          "url": `${siteUrl}/logo.png`
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": data?.url || siteUrl
      }
    },

    // FAQ страница
    faq: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": data?.questions?.map(q => ({
        "@type": "Question",
        "name": q.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": q.answer
        }
      })) || []
    },

    // Хлебные крошки
    breadcrumbs: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": data?.items?.map((item, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "name": item.name,
        "item": item.url ? `${siteUrl}${item.url}` : undefined
      })) || []
    },

    // Курс/Обучение
    course: {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Веб-кодинг для предпринимателей",
      "description": "Обучение созданию SaaS-сервисов с нуля до запуска",
      "provider": {
        "@type": "Organization",
        "name": "SAASPRENER",
        "url": siteUrl
      },
      "offers": {
        "@type": "Offer",
        "price": "50000",
        "priceCurrency": "RUB",
        "availability": "https://schema.org/InStock"
      }
    }
  };

  const schema = schemas[type];
  if (!schema) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Компонент для комбинирования нескольких схем
export function CombinedSchema({ schemas }) {
  return (
    <>
      {schemas.map((schema, idx) => (
        <SchemaOrg key={idx} type={schema.type} data={schema.data} />
      ))}
    </>
  );
}
