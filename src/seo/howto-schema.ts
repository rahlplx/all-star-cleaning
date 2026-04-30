// Schema.org HowTo JSON-LD — All Star Cleaning — Astro v6
export function getHowToSchema(locale: 'en' | 'fr') {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: locale === 'fr' ? 'Comment obtenir un devis de nettoyage extérieur' : 'How to get an exterior cleaning quote',
    description: locale === 'fr'
      ? 'Obtenez un extérieur impeccable en trois étapes simples avec All Star Cleaning à Ottawa.'
      : 'Get a spotless exterior in three simple steps with All Star Cleaning in Ottawa.',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: locale === 'fr' ? 'Demandez un Devis' : 'Request a Quote',
        text: locale === 'fr'
          ? "Appelez-nous ou remplissez notre formulaire en ligne. Nous vous répondons sous 24 heures avec un devis gratuit et sans engagement."
          : 'Call us or fill out our online form. We respond within 24 hours with a free, no-obligation quote.',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: locale === 'fr' ? 'Nous Faisons le Travail' : 'We Do the Work',
        text: locale === 'fr'
          ? "Notre équipe professionnelle arrive à l'heure, utilise un équipement de qualité et traite votre maison avec soin. Aucun dégât, aucun désordre."
          : 'Our professional crew arrives on time, uses premium equipment, and treats your home with care. No damage, no mess.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: locale === 'fr' ? 'Appréciez le Résultat' : 'Enjoy the Result',
        text: locale === 'fr'
          ? "Vitres étincelantes, gouttières propres, allées comme neuves. Et si vous n'êtes pas satisfait à 100%, nous revenons sans frais."
          : 'Sparkling windows, clean gutters, driveways like new. And if you\'re not 100% satisfied, we come back at no charge.',
      },
    ],
  };
}
