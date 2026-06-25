const en = {
  site: { name: 'All Star Cleaning', tagline: "Ottawa's Trusted Exterior Cleaning" },
  nav: { home: 'Home', services: 'Services', about: 'About', reviews: 'Reviews', contact: 'Contact', getQuote: 'Get a Free Quote', phone: 'Call Now', area: 'Areas', privacy: 'Privacy Policy', terms: 'Terms of Service' },
  services: { windowCleaning: 'Window Cleaning', gutterCleaning: 'Gutter Cleaning', pressureWashing: 'Pressure Washing', sidingCleaning: 'Siding Cleaning', snowRemoval: 'Snow Removal' },
  footer: { serviceArea: 'Service Area', contactUs: 'Contact Us', followUs: 'Follow Us', hours: 'Hours', weekdayHours: 'Mon–Sun: 9am–7pm', weekendHours: 'Open 7 Days a Week', closed: '', copyright: 'All rights reserved.', privacy: 'Privacy Policy', terms: 'Terms of Service', sitemap: 'Sitemap' },
  cta: { freeQuote: 'Get a Free Quote', callNow: 'Call Now', bookOnline: 'Book Online' },
  trust: { insured: 'Insured & Bonded' },
  ui: { learnMore: 'Learn more', followUs: 'Follow Us' },
  locations: { servingArea: 'Serving the Ottawa Region', findService: 'Find services near you' },
  area: {
    zones: {
      central: 'Central Ottawa',
      east: 'East Ottawa',
      west: 'West Ottawa',
      south: 'South Ottawa',
      southWest: 'South-West Ottawa',
      eastCentral: 'East-Central Ottawa',
      southEast: 'South-East Ottawa',
    },
  },
  terms: { services: 'Services', guarantee: 'Guarantee', contact: 'Contact' },
  meta: { defaultTitle: 'All Star Cleaning Ottawa | Exterior Cleaning Services', defaultDescription: "Ottawa's trusted exterior cleaning service. Window, gutter, pressure washing, siding & snow removal. Free quotes." },
  usps: {
    expertise: { title: 'Local Expertise', description: 'Serving Ottawa homes means we master harsh winters, gutters, and siding. We deliver customized, reliable results competitors can\'t match.' },
    equipment: { title: 'Premium, Damage-Free Equipment', description: 'We use specialized vacuums, gutter cameras, and safe pressure washers. They ensure thorough cleans without home damage, harsh chemicals, or risks.' },
    guarantee: { title: 'Hassle-Free Satisfaction Guarantee', description: '100% satisfaction promised with flexible scheduling and eco-friendly products. You get spotless results, no mess, and lasting trust.' },
  },
  contact: {
    phone: '(613) 314-3300',
    phoneLink: '+16133143300',
    email: 'hello@allstarcleaning.ca',
    address: '800 Hunt Club Rd, Ottawa, ON K1V 1C3',
    hours: 'Monday to Sunday: 9AM – 7PM',
  },
} as const;

const fr = {
  site: { name: 'All Star Cleaning', tagline: 'Nettoyage Extérieur de Confiance à Ottawa' },
  nav: { home: 'Accueil', services: 'Services', about: 'À Propos', reviews: 'Témoignages', contact: 'Contact', getQuote: 'Obtenez un Devis Gratuit', phone: 'Appelez', area: 'Régions', privacy: 'Politique de Confidentialité', terms: "Conditions d'Utilisation" },
  services: { windowCleaning: 'Nettoyage de Vitres', gutterCleaning: 'Nettoyage de Gouttières', pressureWashing: 'Lavage sous Pression', sidingCleaning: 'Nettoyage de Revêtement', snowRemoval: 'Déneigement' },
  footer: { serviceArea: 'Zone de Service', contactUs: 'Contactez-Nous', followUs: 'Suivez-Nous', hours: 'Heures', weekdayHours: 'Lun–Dim : 9h–19h', weekendHours: 'Ouvert 7 Jours par Semaine', closed: '', copyright: 'Tous droits réservés.', privacy: 'Politique de Confidentialité', terms: "Conditions d'Utilisation", sitemap: 'Plan du Site' },
  cta: { freeQuote: 'Obtenez un Devis Gratuit', callNow: 'Appelez', bookOnline: 'Réservez en Ligne' },
  trust: { insured: 'Assuré & Cautionné' },
  ui: { learnMore: 'En savoir plus', followUs: 'Suivez-nous' },
  locations: { servingArea: "Desservant la Région d'Ottawa", findService: 'Trouvez des services près de chez vous' },
  area: {
    zones: {
      central: 'Ottawa Centre',
      east: 'Ottawa Est',
      west: 'Ottawa Ouest',
      south: 'Ottawa Sud',
      southWest: 'Ottawa Sud-Ouest',
      eastCentral: 'Ottawa Est-Centre',
      southEast: 'Ottawa Sud-Est',
    },
  },
  terms: { services: 'Services', guarantee: 'Garantie', contact: 'Contact' },
  meta: { defaultTitle: 'All Star Cleaning Ottawa | Services de Nettoyage Extérieur', defaultDescription: 'Service de nettoyage extérieur de confiance à Ottawa. Vitres, gouttières, lavage sous pression, revêtement et déneigement. Devis gratuits.' },
  usps: {
    expertise: { title: "Expertise Locale", description: "Servir les foyers d'Ottawa signifie que nous maîtrisons les hivers rigoureux, les gouttières et les revêtements. Nous offrons des résultats personnalisés et fiables que nos concurrents ne peuvent égaler." },
    equipment: { title: 'Équipement Premium sans Dommage', description: 'Nous utilisons des aspirateurs spécialisés, des caméras de gouttière et des laveuses sous pression sécuritaires. Ils assurent un nettoyage approfondi sans dommage à la maison, produits chimiques agressifs ou risques.' },
    guarantee: { title: 'Garantie de Satisfaction sans Tracas', description: "Satisfaction à 100% garantie avec des horaires flexibles et des produits écologiques. Vous obtenez des résultats impeccables, sans désordre, et une confiance durable." },
  },
  contact: {
    phone: '(613) 314-3300',
    phoneLink: '+16133143300',
    email: 'hello@allstarcleaning.ca',
    address: '800, chemin Hunt Club, Ottawa, ON K1V 1C3',
    hours: 'Lundi au dimanche : 9h – 19h',
  },
} as const;

export interface Translation {
  site: { name: string; tagline: string };
  nav: { home: string; services: string; about: string; reviews: string; contact: string; getQuote: string; phone: string; area: string; privacy: string; terms: string };
  services: { windowCleaning: string; gutterCleaning: string; pressureWashing: string; sidingCleaning: string; snowRemoval: string };
  footer: { serviceArea: string; contactUs: string; followUs: string; hours: string; weekdayHours: string; weekendHours: string; closed: string; copyright: string; privacy: string; terms: string; sitemap: string };
  cta: { freeQuote: string; callNow: string; bookOnline: string };
  trust: { insured: string };
  ui: { learnMore: string; followUs: string };
  locations: { servingArea: string; findService: string };
  area: { zones: { central: string; east: string; west: string; south: string; southWest: string; eastCentral: string; southEast: string } };
  terms: { services: string; guarantee: string; contact: string };
  meta: { defaultTitle: string; defaultDescription: string };
  usps: {
    expertise: { title: string; description: string };
    equipment: { title: string; description: string };
    guarantee: { title: string; description: string };
  };
  contact: {
    phone: string;
    phoneLink: string;
    email: string;
    address: string;
    hours: string;
  };
}

export const translations: Record<'en' | 'fr', Translation> = { en, fr };

export function useTranslations(locale: 'en' | 'fr'): Translation {
  return translations[locale];
}
