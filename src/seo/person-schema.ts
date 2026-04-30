// Schema.org Person JSON-LD — All Star Cleaning — Astro v6
export function getFounderSchema(locale: 'en' | 'fr') {
  return {
    '@type': 'Person',
    name: 'All Star Cleaning',
    jobTitle: locale === 'fr' ? 'Fondateur et Propriétaire' : 'Founder & Owner',
    description: locale === 'fr'
      ? "Fondateur d'All Star Cleaning, offrant des services de nettoyage extérieur de confiance à Ottawa depuis plus de 20 ans. Expert en nettoyage de vitres, gouttières, lavage sous pression et déneigement résidentiel et commercial."
      : 'Founder of All Star Cleaning, providing trusted exterior cleaning services in Ottawa for over 20 years. Expert in window cleaning, gutter cleaning, pressure washing, and residential and commercial snow removal.',
    knowsAbout: locale === 'fr'
      ? ['Nettoyage de vitres', 'Nettoyage de gouttières', 'Lavage sous pression', 'Nettoyage de revêtement', 'Déneigement', 'Services résidentiels Ottawa']
      : ['Window Cleaning', 'Gutter Cleaning', 'Pressure Washing', 'Siding Cleaning', 'Snow Removal', 'Residential Services Ottawa'],
    worksFor: {
      '@type': 'HomeAndConstructionBusiness',
      name: 'All Star Cleaning',
      url: 'https://allstarcleaning.ca',
    },
  };
}
