// Schema.org for location-service combo pages — All Star Cleaning — Astro v6
import type { Service } from '@/types';
import type { Location } from '@/types';

export function getLocationServiceSchema(service: Service, location: Location, locale: 'en' | 'fr', url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: locale === 'fr'
      ? `${service.frName} à ${location.frName}`
      : `${service.name} in ${location.name}`,
    description: locale === 'fr'
      ? `${service.frDescription} Desservant ${location.frName} et les environs.`
      : `${service.description} Serving ${location.name} and surrounding areas.`,
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
      '@type': 'Place',
      name: locale === 'fr' ? location.frName : location.name,
      address: {
        '@type': 'PostalAddress',
        addressLocality: locale === 'fr' ? location.frName : location.name,
        addressRegion: 'ON',
        postalCode: location.postalCode,
        addressCountry: 'CA',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: location.coordinates.lat,
        longitude: location.coordinates.lng,
      },
    },
    serviceType: locale === 'fr' ? service.frName : service.name,
  };
}
