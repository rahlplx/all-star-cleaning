// Schema.org BreadcrumbList JSON-LD — All Star Cleaning — Astro v6
import type { BreadcrumbItem } from '@/types';

export function getBreadcrumbSchema(breadcrumbs: BreadcrumbItem[], locale: 'en' | 'fr') {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: locale === 'fr' ? crumb.frLabel : crumb.label,
      item: `https://allstarcleaning.ca${crumb.href}`,
    })),
  };
}
