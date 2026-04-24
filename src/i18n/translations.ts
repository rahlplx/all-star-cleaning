const en = {
  site: { name: 'All Star Cleaning', tagline: "Ottawa's Trusted Exterior Cleaning" },
  nav: { home: 'Home', services: 'Services', about: 'About', reviews: 'Reviews', contact: 'Contact', getQuote: 'Get a Free Quote', phone: 'Call Now' },
  services: { windowCleaning: 'Window Cleaning', gutterCleaning: 'Gutter Cleaning', pressureWashing: 'Pressure Washing', sidingCleaning: 'Siding Cleaning', snowRemoval: 'Snow Removal' },
  footer: { serviceArea: 'Service Area', contactUs: 'Contact Us', followUs: 'Follow Us', hours: 'Hours', weekdayHours: 'Mon-Fri: 7am-7pm', weekendHours: 'Sat: 8am-5pm', closed: 'Sun: Closed', copyright: 'All rights reserved.', privacy: 'Privacy Policy', terms: 'Terms of Service' },
  cta: { freeQuote: 'Get a Free Quote', callNow: 'Call Now', bookOnline: 'Book Online' },
  locations: { servingArea: 'Serving the Ottawa Region', findService: 'Find services near you' },
  meta: { defaultTitle: 'All Star Cleaning Ottawa | Exterior Cleaning Services', defaultDescription: "Ottawa's trusted exterior cleaning service. Window, gutter, pressure washing, siding & snow removal. Free quotes." },
} as const;

const fr = {
  site: { name: 'All Star Cleaning', tagline: 'Nettoyage Extérieur de Confiance à Ottawa' },
  nav: { home: 'Accueil', services: 'Services', about: 'À Propos', reviews: 'Témoignages', contact: 'Contact', getQuote: 'Obtenez un Devis Gratuit', phone: 'Appelez' },
  services: { windowCleaning: 'Nettoyage de Vitres', gutterCleaning: 'Nettoyage de Gouttières', pressureWashing: 'Lavage sous Pression', sidingCleaning: 'Nettoyage de Revêtement', snowRemoval: 'Déneigement' },
  footer: { serviceArea: 'Zone de Service', contactUs: 'Contactez-Nous', followUs: 'Suivez-Nous', hours: 'Heures', weekdayHours: 'Lun-Ven : 7h-19h', weekendHours: 'Sam : 8h-17h', closed: 'Dim : Fermé', copyright: 'Tous droits réservés.', privacy: 'Politique de Confidentialité', terms: "Conditions d'Utilisation" },
  cta: { freeQuote: 'Obtenez un Devis Gratuit', callNow: 'Appelez', bookOnline: 'Réservez en Ligne' },
  locations: { servingArea: "Desservant la Région d'Ottawa", findService: 'Trouvez des services près de chez vous' },
  meta: { defaultTitle: 'All Star Cleaning Ottawa | Services de Nettoyage Extérieur', defaultDescription: 'Service de nettoyage extérieur de confiance à Ottawa. Vitres, gouttières, lavage sous pression, revêtement et déneigement. Devis gratuits.' },
} as const;

export type TranslationKey = typeof en;
export const translations = { en, fr } as const;
export function useTranslations(locale: 'en' | 'fr'): TranslationKey {
  return translations[locale];
}
