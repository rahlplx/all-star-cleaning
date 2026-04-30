const en = {
  site: { name: 'All Star Cleaning', tagline: "Ottawa's Trusted Exterior Cleaning" },
  nav: { home: 'Home', services: 'Services', about: 'About', reviews: 'Reviews', contact: 'Contact', getQuote: 'Get a Free Quote', phone: 'Call Now' },
  services: { windowCleaning: 'Window Cleaning', gutterCleaning: 'Gutter Cleaning', pressureWashing: 'Pressure Washing', sidingCleaning: 'Siding Cleaning', snowRemoval: 'Snow Removal' },
  footer: { serviceArea: 'Service Area', contactUs: 'Contact Us', followUs: 'Follow Us', hours: 'Hours', weekdayHours: 'Mon–Sun: 9am–7pm', weekendHours: 'Open 7 Days a Week', closed: '', copyright: 'All rights reserved.', privacy: 'Privacy Policy', terms: 'Terms of Service' },
  cta: { freeQuote: 'Get a Free Quote', callNow: 'Call Now', bookOnline: 'Book Online' },
  locations: { servingArea: 'Serving the Ottawa Region', findService: 'Find services near you' },
  meta: { defaultTitle: 'All Star Cleaning Ottawa | Exterior Cleaning Services', defaultDescription: "Ottawa's trusted exterior cleaning service. Window, gutter, pressure washing, siding & snow removal. Free quotes." },
  usps: {
    expertise: { title: 'Years of Local Expertise', description: 'Decades serving Ottawa homes means we master harsh winters, gutters, and siding. We deliver customized, reliable results competitors can\'t match.' },
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
  nav: { home: 'Accueil', services: 'Services', about: 'À Propos', reviews: 'Témoignages', contact: 'Contact', getQuote: 'Obtenez un Devis Gratuit', phone: 'Appelez' },
  services: { windowCleaning: 'Nettoyage de Vitres', gutterCleaning: 'Nettoyage de Gouttières', pressureWashing: 'Lavage sous Pression', sidingCleaning: 'Nettoyage de Revêtement', snowRemoval: 'Déneigement' },
  footer: { serviceArea: 'Zone de Service', contactUs: 'Contactez-Nous', followUs: 'Suivez-Nous', hours: 'Heures', weekdayHours: 'Lun–Dim : 9h–19h', weekendHours: 'Ouvert 7 Jours par Semaine', closed: '', copyright: 'Tous droits réservés.', privacy: 'Politique de Confidentialité', terms: "Conditions d'Utilisation" },
  cta: { freeQuote: 'Obtenez un Devis Gratuit', callNow: 'Appelez', bookOnline: 'Réservez en Ligne' },
  locations: { servingArea: "Desservant la Région d'Ottawa", findService: 'Trouvez des services près de chez vous' },
  meta: { defaultTitle: 'All Star Cleaning Ottawa | Services de Nettoyage Extérieur', defaultDescription: 'Service de nettoyage extérieur de confiance à Ottawa. Vitres, gouttières, lavage sous pression, revêtement et déneigement. Devis gratuits.' },
  usps: {
    expertise: { title: "Des Décennies d'Expertise Locale", description: "Des décennies au service des foyers d'Ottawa signifient que nous maîtrisons les hivers rigoureux, les gouttières et les revêtements. Nous offrons des résultats personnalisés et fiables que nos concurrents ne peuvent égaler." },
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

export type TranslationKey = typeof en;
export const translations = { en, fr } as const;
export function useTranslations(locale: 'en' | 'fr'): TranslationKey {
  return translations[locale];
}
