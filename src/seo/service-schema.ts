// Schema.org Service JSON-LD — All Star Cleaning — Astro v6
import type { Service } from '@/types';

export function getServiceSchema(service: Service, locale: 'en' | 'fr', url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: locale === 'fr' ? service.frName : service.name,
    description: locale === 'fr' ? service.frDescription : service.description,
    url,
    provider: {
      '@type': 'HomeAndConstructionBusiness',
      name: 'All Star Cleaning',
      url: 'https://allstarcleaning.ca',
      telephone: '+1-613-314-3300',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '800 Hunt Club Rd',
        addressLocality: 'Ottawa',
        addressRegion: 'ON',
        postalCode: 'K1V 1C3',
        addressCountry: 'CA',
      },
    },
    areaServed: {
      '@type': 'City',
      name: 'Ottawa',
    },
    serviceType: locale === 'fr' ? service.frName : service.name,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: locale === 'fr' ? service.frName : service.name,
      itemListElement: (locale === 'fr' ? service.frFeatures : service.features).map((feature) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: feature,
        },
      })),
    },
  };
}
