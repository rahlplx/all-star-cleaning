// Schema.org LocalBusiness JSON-LD — All Star Cleaning — Astro v6

export interface LocalBusinessSchemaOptions {
  locale: 'en' | 'fr';
  url: string;
}

export function getLocalBusinessSchema({ locale, url }: LocalBusinessSchemaOptions) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: 'All Star Cleaning',
    alternateName: locale === 'fr' ? 'Nettoyage All Star' : 'All Star Cleaning Ottawa',
    url,
    logo: 'https://allstarcleaning.ca/logo.svg',
    image: 'https://allstarcleaning.ca/images/og-default.jpg',
    description: locale === 'fr'
      ? "Service de nettoyage extérieur de confiance à Ottawa. Vitres, gouttières, lavage sous pression, revêtement et déneigement. Devis gratuits."
      : "Ottawa's trusted exterior cleaning service. Window, gutter, pressure washing, siding & snow removal. Free quotes.",
    telephone: '+1-613-314-3300',
    email: 'hello@allstarcleaning.ca',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '800 Hunt Club Rd',
      addressLocality: 'Ottawa',
      addressRegion: 'ON',
      postalCode: 'K1V 1C3',
      addressCountry: 'CA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 45.3500,
      longitude: -75.6667,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '09:00',
        closes: '19:00',
      },
    ],
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 45.4215,
        longitude: -75.6972,
      },
      geoRadius: '30000',
    },
    hasMap: 'https://g.page/allstarcleaningottawa',
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '16',
      bestRating: '5',
    },
    sameAs: [
      'https://facebook.com/allstarcleaningottawa',
      'https://www.instagram.com/allstarcleaning.ca',
      'https://www.tiktok.com/@allstarcleaning.ca',
      'https://g.page/allstarcleaningottawa',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: locale === 'fr' ? 'Services de nettoyage' : 'Cleaning Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: locale === 'fr' ? 'Nettoyage de Vitres' : 'Window Cleaning', url: `https://allstarcleaning.ca/${locale}/services/window-cleaning` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: locale === 'fr' ? 'Nettoyage de Gouttières' : 'Gutter Cleaning', url: `https://allstarcleaning.ca/${locale}/services/gutter-cleaning` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: locale === 'fr' ? 'Lavage sous Pression' : 'Pressure Washing', url: `https://allstarcleaning.ca/${locale}/services/pressure-washing` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: locale === 'fr' ? 'Nettoyage de Revêtement' : 'Siding Cleaning', url: `https://allstarcleaning.ca/${locale}/services/siding-cleaning` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: locale === 'fr' ? 'Déneigement' : 'Snow Removal', url: `https://allstarcleaning.ca/${locale}/services/snow-removal` } },
      ],
    },
  };
}
