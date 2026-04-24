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
    logo: 'https://allstarcleaning.ca/logo.png',
    image: 'https://allstarcleaning.ca/og-default.jpg',
    description: locale === 'fr'
      ? 'Service de nettoyage extérieur de confiance à Ottawa. Vitres, gouttières, lavage sous pression, revêtement et déneigement.'
      : "Ottawa's trusted exterior cleaning service. Window, gutter, pressure washing, siding & snow removal.",
    telephone: '+1-613-555-0199',
    email: 'info@allstarcleaning.ca',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Clean Street',
      addressLocality: 'Ottawa',
      addressRegion: 'ON',
      postalCode: 'K1P 1J1',
      addressCountry: 'CA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 45.4215,
      longitude: -75.6972,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '17:00',
      },
    ],
    areaServed: {
      '@type': 'City',
      name: 'Ottawa',
      sameAs: 'https://en.wikipedia.org/wiki/Ottawa',
    },
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '327',
      bestRating: '5',
    },
    sameAs: [
      'https://facebook.com/allstarcleaningottawa',
      'https://instagram.com/allstarcleaningottawa',
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
