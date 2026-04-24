// Schema.org FAQPage JSON-LD — All Star Cleaning — Astro v6
import type { FAQItem } from '@/types';

export function getFAQSchema(faqs: FAQItem[], locale: 'en' | 'fr') {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: locale === 'fr' ? faq.frQuestion : faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: locale === 'fr' ? faq.frAnswer : faq.answer,
      },
    })),
  };
}
