import type { Service, FAQItem } from '@/types';

const windowCleaningFaqs: FAQItem[] = [
  {
    question: 'How much does window cleaning cost in Ottawa?',
    frQuestion: 'Combien coûte le nettoyage de vitres à Ottawa?',
    answer: 'Window cleaning in Ottawa typically costs $150-$400 depending on home size and number of windows. Contact us for a free, transparent quote.',
    frAnswer: "Le nettoyage de vitres à Ottawa coûte généralement entre 150$ et 400$ selon la taille de la maison. Contactez-nous pour un devis gratuit.",
  },
  {
    question: 'How often should windows be cleaned?',
    frQuestion: 'À quelle fréquence faut-il nettoyer les vitres?',
    answer: 'We recommend professional window cleaning twice a year — once in spring and once in fall — to maintain clarity and protect glass from hard water stains.',
    frAnswer: 'Nous recommandons un nettoyage professionnel deux fois par an — au printemps et à l\'automne — pour maintenir la clarté et protéger le verre.',
  },
  {
    question: 'Do you clean both interior and exterior windows?',
    frQuestion: 'Nettoyez-vous les vitres intérieures et extérieures?',
    answer: 'Yes, our service includes both interior and exterior window cleaning, along with screen cleaning and sill wipe-down at no extra charge.',
    frAnswer: 'Oui, notre service inclut le nettoyage intérieur et extérieur, ainsi que le nettoyage des moustiquaires et des appuis sans frais supplémentaires.',
  },
  {
    question: 'What is the pure water-fed pole system?',
    frQuestion: "Qu'est-ce que le système de perche à eau pure?",
    answer: 'Our pure water-fed pole system uses deionized water to clean windows up to 4 storeys high without ladders, leaving a streak-free finish every time.',
    frAnswer: 'Notre système de perche à eau pure utilise de l\'eau déminéralisée pour nettoyer les fenêtres jusqu\'à 4 étages sans échelle, laissant un fini sans traces.',
  },
  {
    question: 'How long does a window cleaning appointment take?',
    frQuestion: 'Combien de temps dure un rendez-vous de nettoyage de vitres?',
    answer: 'A typical residential window cleaning takes 1-3 hours depending on the number of windows and accessibility. We always arrive on schedule.',
    frAnswer: 'Un nettoyage résidentiel typique prend 1 à 3 heures selon le nombre de fenêtres. Nous arrivons toujours à l\'heure.',
  },
  {
    question: 'Is window cleaning safe for my landscaping?',
    frQuestion: 'Le nettoyage de vitres est-il sécuritaire pour mon aménagement paysager?',
    answer: 'Absolutely. Our soft-brush and pure water system is gentle on landscaping, and our crew takes care to protect your plants and property during every visit.',
    frAnswer: 'Absolument. Notre système à eau pure est doux pour l\'aménagement paysager, et notre équipe protège vos plantes à chaque visite.',
  },
  {
    question: 'Do you offer commercial window cleaning?',
    frQuestion: 'Offrez-vous le nettoyage de vitres commerciales?',
    answer: 'Yes, we serve both residential and commercial properties across Ottawa, including storefronts, offices, and multi-unit buildings.',
    frAnswer: 'Oui, nous desservons les propriétés résidentielles et commerciales à Ottawa, y compris les commerces et immeubles.',
  },
];

const gutterCleaningFaqs: FAQItem[] = [
  {
    question: 'How much does gutter cleaning cost in Ottawa?',
    frQuestion: 'Combien coûte le nettoyage de gouttières à Ottawa?',
    answer: 'Gutter cleaning in Ottawa typically ranges from $150-$350 depending on home size, number of storeys, and debris level. We provide free quotes with no obligation.',
    frAnswer: 'Le nettoyage de gouttières à Ottawa varie entre 150$ et 350$ selon la taille et le niveau de débris. Devis gratuit sans engagement.',
  },
  {
    question: 'How often should gutters be cleaned in Ottawa?',
    frQuestion: 'À quelle fréquence faut-il nettoyer les gouttières à Ottawa?',
    answer: 'Ottawa homes need gutter cleaning at least twice a year — spring and fall — due to heavy leaf fall and winter ice dam risks.',
    frAnswer: 'Les maisons d\'Ottawa nécessitent un nettoyage au moins deux fois par an — printemps et automne — en raison des feuilles et des barrages de glace.',
  },
  {
    question: 'What happens if I don\'t clean my gutters?',
    frQuestion: 'Que se passe-t-il si je ne nettoye pas mes gouttières?',
    answer: 'Clogged gutters cause water damage to foundations, roof leaks, ice dams, pest infestations, and landscape erosion. Regular cleaning prevents costly repairs.',
    frAnswer: 'Des gouttières bouchées causent des dégâts d\'eau, fuites de toit, barrages de glace et infestations. Le nettoyage régulier prévient les réparations coûteuses.',
  },
  {
    question: 'Do you flush downspouts as part of gutter cleaning?',
    frQuestion: 'Rincez-vous les descentes pluviales lors du nettoyage?',
    answer: 'Yes, we flush and test every downspout to ensure proper water flow. We also provide before and after photos of our work.',
    frAnswer: 'Oui, nous rinçons et testons chaque descente pluviale pour assurer un écoulement adéquat. Nous fournissons des photos avant et après.',
  },
  {
    question: 'Can you clean gutters on a 3-storey home?',
    frQuestion: 'Pouvez-vous nettoyer les gouttières d\'une maison de 3 étages?',
    answer: 'Yes, our professional equipment allows us to safely clean gutters on homes up to 4 storeys. We use harnesses and follow all safety protocols.',
    frAnswer: 'Oui, notre équipement professionnel permet de nettoyer les gouttières jusqu\'à 4 étages en toute sécurité.',
  },
  {
    question: 'When is the best time to clean gutters in Ottawa?',
    frQuestion: 'Quand est le meilleur moment pour nettoyer les gouttières à Ottawa?',
    answer: 'The best times are late spring (after trees bud) and late fall (after leaves drop). Ottawa\'s heavy tree canopy makes these timing windows critical.',
    frAnswer: 'Les meilleurs moments sont la fin du printemps et la fin de l\'automne. La canopée d\'Ottawa rend ces périodes critiques.',
  },
  {
    question: 'Do you offer seasonal gutter maintenance plans?',
    frQuestion: 'Offrez-vous des plans d\'entretien saisonnier des gouttières?',
    answer: 'Yes, we offer seasonal maintenance plans with priority scheduling and discounted rates. Ask about our spring-fall package for year-round protection.',
    frAnswer: 'Oui, nous offrons des plans d\'entretien avec planification prioritaire et tarifs réduits. Demandez notre forfait printemps-automne.',
  },
];

const pressureWashingFaqs: FAQItem[] = [
  {
    question: 'How much does pressure washing cost in Ottawa?',
    frQuestion: 'Combien coûte le lavage sous pression à Ottawa?',
    answer: 'Pressure washing in Ottawa ranges from $200-$600 depending on surface area and type. Driveways start around $200, full house siding from $400. Free quotes available.',
    frAnswer: 'Le lavage sous pression à Ottawa varie de 200$ à 600$ selon la surface. Les allées commencent à 200$. Devis gratuit.',
  },
  {
    question: 'Is pressure washing safe for all surfaces?',
    frQuestion: 'Le lavage sous pression est-il sécuritaire pour toutes les surfaces?',
    answer: 'We select the appropriate PSI for each surface — lower pressure for siding and decks, higher for concrete driveways. Our eco-friendly solutions are safe for plants and pets.',
    frAnswer: 'Nous sélectionnons le PSI approprié pour chaque surface. Nos solutions écologiques sont sécuritaires pour les plantes et animaux.',
  },
  {
    question: 'Can pressure washing remove oil stains from my driveway?',
    frQuestion: 'Le lavage sous pression peut-il enlever les taches d\'huile de mon entrée?',
    answer: 'Yes, our specialized cleaning solutions combined with appropriate pressure can effectively remove oil, rust, and organic stains from concrete and asphalt driveways.',
    frAnswer: 'Oui, nos solutions spécialisées combinées à la pression appropriée enlèvent efficacement les taches d\'huile et de rouille.',
  },
  {
    question: 'How often should I pressure wash my driveway?',
    frQuestion: 'À quelle fréquence faut-il laver une entrée sous pression?',
    answer: 'We recommend pressure washing driveways annually and decks every 1-2 years to prevent mold, algae, and stain buildup that can damage surfaces over time.',
    frAnswer: 'Nous recommandons un lavage annuel des allées et tous les 1-2 ans pour les terrasses pour prévenir la moisissure.',
  },
  {
    question: 'Do you use eco-friendly cleaning solutions?',
    frQuestion: 'Utilisez-vous des solutions de nettoyage écologiques?',
    answer: 'Yes, all our cleaning solutions are biodegradable and eco-friendly, safe for your lawn, garden, and pets while still delivering powerful cleaning results.',
    frAnswer: 'Oui, toutes nos solutions sont biodégradables et écologiques, sécuritaires pour votre gazon et vos animaux.',
  },
  {
    question: 'Can you pressure wash my deck without damaging the wood?',
    frQuestion: 'Pouvez-vous laver ma terrasse sans endommager le bois?',
    answer: 'Absolutely. We use reduced pressure and specialized techniques for wood surfaces, along with appropriate cleaning agents that clean without stripping or gouging the wood fibers.',
    frAnswer: 'Absolument. Nous utilisons une pression réduite et des techniques spécialisées pour le bois qui nettoient sans endommager.',
  },
  {
    question: 'What surfaces can be pressure washed?',
    frQuestion: 'Quelles surfaces peuvent être lavées sous pression?',
    answer: 'We pressure wash driveways, patios, decks, sidewalks, retaining walls, fences, and siding. Each surface gets a customized pressure and solution treatment.',
    frAnswer: 'Nous lavons les allées, patios, terrasses, trottoirs, murs de soutènement, clôtures et revêtements.',
  },
];

const sidingCleaningFaqs: FAQItem[] = [
  {
    question: 'How much does siding cleaning cost in Ottawa?',
    frQuestion: 'Combien coûte le nettoyage de revêtement à Ottawa?',
    answer: 'Siding cleaning in Ottawa typically costs $300-$700 depending on home size and siding type. We offer free, no-obligation quotes for every property.',
    frAnswer: 'Le nettoyage de revêtement à Ottawa coûte généralement entre 300$ et 700$ selon la taille. Devis gratuit sans engagement.',
  },
  {
    question: 'What is soft washing and how is it different from pressure washing?',
    frQuestion: 'Qu\'est-ce que le lavage doux et comment diffère-t-il du lavage sous pression?',
    answer: 'Soft washing uses low-pressure water combined with specialized cleaning solutions to safely remove mold, mildew, and algae without the high PSI that can damage siding.',
    frAnswer: 'Le lavage doux utilise une basse pression avec des solutions spécialisées pour enlever moisissure et algues sans le PSI élevé qui peut endommager.',
  },
  {
    question: 'Is soft washing safe for vinyl siding?',
    frQuestion: 'Le lavage doux est-il sécuritaire pour le revêtement en vinyle?',
    answer: 'Yes, soft washing is the recommended method for vinyl siding. It effectively removes dirt and biological growth without causing cracks, fading, or water intrusion behind panels.',
    frAnswer: 'Oui, le lavage doux est la méthode recommandée pour le vinyle. Il enlève la saleté sans causer de fissures ni de décoloration.',
  },
  {
    question: 'Can you remove mold and mildew from siding?',
    frQuestion: 'Pouvez-vous enlever la moisissure des revêtements?',
    answer: 'Yes, our specialized mold and mildew treatment kills spores at the root and removes visible staining, providing 2-3 years of protection against regrowth.',
    frAnswer: 'Oui, notre traitement spécialisé tue les spores à la racine et enlève les taches, offrant 2-3 ans de protection.',
  },
  {
    question: 'How long does siding cleaning take?',
    frQuestion: 'Combien de temps dure le nettoyage de revêtement?',
    answer: 'Most residential siding cleaning is completed in 2-4 hours. Larger homes or heavily soiled siding may take a full day. We always provide a time estimate upfront.',
    frAnswer: 'La plupart des nettoyages résidentiels se font en 2-4 heures. Les maisons plus grandes peuvent prendre une journée.',
  },
  {
    question: 'Do you clean aluminum and stucco siding too?',
    frQuestion: 'Nettoyez-vous aussi le revêtement en aluminium et stuc?',
    answer: 'Yes, we safely clean vinyl, aluminum, stucco, wood, and fiber cement siding using surface-appropriate techniques and cleaning agents for each material.',
    frAnswer: 'Oui, nous nettoyons le vinyle, aluminium, stuc, bois et ciment-fibre avec des techniques adaptées à chaque matériau.',
  },
  {
    question: 'How often should siding be cleaned?',
    frQuestion: 'À quelle fréquence faut-il nettoyer le revêtement?',
    answer: 'We recommend siding cleaning every 2-3 years, or more frequently if you notice green algae growth, especially on north-facing walls that receive less sunlight.',
    frAnswer: 'Nous recommandons un nettoyage aux 2-3 ans, ou plus souvent si vous remarquez de la croissance d\'algues.',
  },
];

const snowRemovalFaqs: FAQItem[] = [
  {
    question: 'How much does snow removal cost in Ottawa?',
    frQuestion: 'Combien coûte le déneigement à Ottawa?',
    answer: 'Snow removal in Ottawa ranges from $150-$400 per visit for residential properties. Seasonal contracts start at $800 and offer the best value for reliable winter service.',
    frAnswer: 'Le déneigement à Ottawa varie de 150$ à 400$ par visite. Les contrats saisonniers commencent à 800$ et offrent la meilleure valeur.',
  },
  {
    question: 'Do you offer 24/7 snow removal service?',
    frQuestion: 'Offrez-vous un service de déneigement 24/7?',
    answer: 'Yes, we provide 24/7 storm response during snow events. Our GPS-tracked fleet ensures your property is cleared promptly, even during overnight storms.',
    frAnswer: 'Oui, nous offrons une réponse 24/7 lors des tempêtes de neige. Notre flotte GPS assure un déneigement rapide.',
  },
  {
    question: 'What areas of my property do you clear?',
    frQuestion: 'Quelles zones de ma propriété déneigez-vous?',
    answer: 'We clear driveways, walkways, front steps, parking lots, and fire exits. De-icing and salting are included with every visit for safety.',
    frAnswer: 'Nous déblayons les allées, trottoirs, marches, stationnements et sorties incendie. Le déglaçage et le salage sont inclus.',
  },
  {
    question: 'Do you offer seasonal snow removal contracts?',
    frQuestion: 'Offrez-vous des contrats saisonniers de déneigement?',
    answer: 'Yes, our seasonal contracts guarantee priority service, fixed pricing, and automatic response during snow events — no need to call us each time it snows.',
    frAnswer: 'Oui, nos contrats saisonniers garantissent un service prioritaire, des prix fixes et une réponse automatique lors des chutes de neige.',
  },
  {
    question: 'How quickly can you respond after a snowstorm?',
    frQuestion: 'Combien de temps faut-il pour répondre après une tempête de neige?',
    answer: 'Our target response time is within 4 hours of snowfall ending for contract clients. We monitor weather 24/7 and pre-deploy equipment before major storms.',
    frAnswer: 'Notre temps de réponse cible est de 4 heures après la fin des chutes de neige pour les clients sous contrat.',
  },
  {
    question: 'Is your de-icing product safe for pets and concrete?',
    frQuestion: 'Votre produit de déglaçage est-il sécuritaire pour les animaux et le béton?',
    answer: 'Yes, we use pet-safe and concrete-friendly de-icing products that effectively melt ice without damaging surfaces or harming paws.',
    frAnswer: 'Oui, nous utilisons des produits de déglaçage sécuritaires pour les animaux et le béton qui font fondre la glace sans endommager.',
  },
  {
    question: 'What happens if it snows multiple times in one week?',
    frQuestion: 'Que se passe-t-il s\'il neige plusieurs fois en une semaine?',
    answer: 'With a seasonal contract, we clear your property after every significant snowfall (5cm+) at no additional charge. Per-visit pricing is also available for occasional needs.',
    frAnswer: 'Avec un contrat saisonnier, nous déblayons après chaque chute significative (5cm+) sans frais supplémentaires.',
  },
];

export const services: Service[] = [
  {
    slug: 'window-cleaning', name: 'Window Cleaning', frSlug: 'nettoyage-vitres', frName: 'Nettoyage de Vitres',
    description: 'Professional residential and commercial window cleaning in Ottawa. Streak-free results guaranteed with pure water-fed pole technology and hand-detailing for sparkling clean windows every time.',
    frDescription: 'Nettoyage professionnel de fenêtres résidentielles et commerciales à Ottawa. Résultats sans traces garantis avec technologie de perche à eau pure et finition à la main pour des fenêtres étincelantes à chaque fois.',
    icon: 'lucide:sparkles',
    features: ['Pure water-fed pole system up to 4 storeys', 'Hand-detailed interior & exterior', 'Screen cleaning included', 'Sill & frame wipe-down', 'Streak-free guarantee'],
    frFeatures: ["Système de perche à eau pure jusqu'à 4 étages", 'Finition intérieure et extérieure à la main', 'Nettoyage de moustiquaires inclus', 'Essuyage des appuis et cadres', 'Garantie sans traces'],
    metaTitle: 'Window Cleaning Ottawa | All Star Cleaning — Streak-Free Guarantee',
    metaDescription: "Ottawa's trusted window cleaning service. Pure water-fed pole + hand-detailing for streak-free windows. Free quote — residential & commercial.",
    frMetaTitle: 'Nettoyage de Vitres Ottawa | All Star Cleaning — Garantie Sans Traces',
    frMetaDescription: 'Service de nettoyage de vitres de confiance à Ottawa. Perche à eau pure + finition à la main pour des fenêtres sans traces. Devis gratuit.',
    cta: 'Get a Free Window Cleaning Quote', frCta: 'Obtenez un Devis Gratuit de Nettoyage de Vitres',
    faqs: windowCleaningFaqs,
  },
  {
    slug: 'gutter-cleaning', name: 'Gutter Cleaning', frSlug: 'nettoyage-gouttieres', frName: 'Nettoyage de Gouttières',
    description: 'Thorough gutter cleaning and downspout flushing across Ottawa. Prevent water damage, ice dams, and pest infestations with our professional gutter maintenance service designed for Canadian seasons.',
    frDescription: "Nettoyage approfondi des gouttières et rinçage des descentes pluviales à Ottawa. Prévenez les dégâts d'eau, les barrages de glace et les infestations de nuisibles avec notre service professionnel conçu pour les saisons canadiennes.",
    icon: 'lucide:droplets',
    features: ['Full debris removal by hand', 'Downspout flushing & testing', 'Before & after photos', 'Minor re-securing included', 'Seasonal maintenance plans'],
    frFeatures: ['Enlèvement complet des débris à la main', 'Rinçage et test des descentes pluviales', 'Photos avant et après', 'Ré-securement mineur inclus', "Plans d'entretien saisonnier"],
    metaTitle: 'Gutter Cleaning Ottawa | All Star Cleaning — Protect Your Home',
    metaDescription: 'Professional gutter cleaning in Ottawa. Hand-cleaned, downspouts flushed, before & after photos. Prevent water damage & ice dams. Free quote.',
    frMetaTitle: 'Nettoyage de Gouttières Ottawa | All Star Cleaning — Protégez Votre Maison',
    frMetaDescription: "Nettoyage professionnel de gouttières à Ottawa. Nettoyage à la main, rinçage des descentes, photos avant/après. Prévenez les dégâts d'eau. Devis gratuit.",
    cta: 'Get a Free Gutter Cleaning Quote', frCta: 'Obtenez un Devis Gratuit de Nettoyage de Gouttières',
    faqs: gutterCleaningFaqs,
  },
  {
    slug: 'pressure-washing', name: 'Pressure Washing', frSlug: 'lavage-sous-pression', frName: 'Lavage sous Pression',
    description: 'Transform your property with professional pressure washing in Ottawa. Driveways, patios, siding, decks — we remove years of grime, algae, and stains to restore your surfaces to like-new condition.',
    frDescription: "Transformez votre propriété avec un lavage sous pression professionnel à Ottawa. Allées, patios, revêtements, terrasses — nous éliminons des années de saleté et de taches pour redonner à vos surfaces un état comme neuf.",
    icon: 'lucide:waves',
    features: ['Surface-appropriate PSI selection', 'Eco-friendly cleaning solutions', 'Driveways, patios, decks, siding', 'Mold & algae treatment', 'Same-day results visible'],
    frFeatures: ['Sélection de PSI adaptée à la surface', 'Solutions de nettoyage écologiques', 'Allées, patios, terrasses, revêtements', "Traitement de moisissure et d'algues", 'Résultats visibles le jour même'],
    metaTitle: 'Pressure Washing Ottawa | All Star Cleaning — Driveways, Decks & More',
    metaDescription: 'Top-rated pressure washing in Ottawa. Driveways, decks, patios, siding — eco-friendly, surface-safe cleaning. Free quote — book today.',
    frMetaTitle: 'Lavage sous Pression Ottawa | All Star Cleaning — Allées, Terrasses et Plus',
    frMetaDescription: 'Lavage sous pression très bien noté à Ottawa. Allées, terrasses, patios, revêtements — nettoyage écologique et sûr. Devis gratuit.',
    cta: 'Get a Free Pressure Washing Quote', frCta: 'Obtenez un Devis Gratuit de Lavage sous Pression',
    faqs: pressureWashingFaqs,
  },
  {
    slug: 'siding-cleaning', name: 'Siding Cleaning', frSlug: 'nettoyage-revetement', frName: 'Nettoyage de Revêtement',
    description: 'Gentle yet effective siding cleaning in Ottawa. Our soft-wash technique safely removes dirt, mold, mildew, and algae from vinyl, aluminum, and stucco siding without damage or discoloration.',
    frDescription: 'Nettoyage de revêtement doux mais efficace à Ottawa. Notre technique de lavage doux élimine en toute sécurité la saleté, la moisissure et les algues des revêtements en vinyle, aluminium et stuc sans dommage ni décoloration.',
    icon: 'lucide:home',
    features: ['Soft-wash technique (no high PSI)', 'Safe for vinyl, aluminum, stucco', 'Mold & mildew treatment', 'Brightens faded siding', '2–3 year protection guarantee'],
    frFeatures: ['Technique de lavage doux (sans PSI élevé)', 'Sécuritaire pour vinyle, aluminium, stuc', 'Traitement de moisissure et de mildiou', 'Ravive les revêtements décolorés', 'Garantie de protection de 2 à 3 ans'],
    metaTitle: 'Siding Cleaning Ottawa | All Star Cleaning — Soft Wash Specialists',
    metaDescription: 'Gentle soft-wash siding cleaning in Ottawa. Safe for vinyl, aluminum & stucco. Removes mold, mildew, algae — no damage. Free quote.',
    frMetaTitle: 'Nettoyage de Revêtement Ottawa | All Star Cleaning — Spécialistes du Lavage Doux',
    frMetaDescription: 'Nettoyage doux de revêtement à Ottawa. Sécuritaire pour vinyle, aluminium et stuc. Élimine moisissure et algues. Devis gratuit.',
    cta: 'Get a Free Siding Cleaning Quote', frCta: 'Obtenez un Devis Gratuit de Nettoyage de Revêtement',
    faqs: sidingCleaningFaqs,
  },
  {
    slug: 'snow-removal', name: 'Snow Removal', frSlug: 'deneigement', frName: 'Déneigement',
    description: 'Reliable snow removal in Ottawa all winter long. Driveways, walkways, parking lots — we clear it all with 24/7 response during snow events. Seasonal contracts and per-visit pricing available.',
    frDescription: "Déneigement fiable à Ottawa tout au long de l'hiver. Allées, trottoirs, stationnements — nous déblayons tout avec une réponse 24/7 lors des événements de neige. Contrats saisonniers et tarifs à la visite disponibles.",
    icon: 'lucide:snowflake',
    features: ['24/7 storm response', 'Driveways, walkways, parking lots', 'Seasonal contracts available', 'De-icing & salting included', 'GPS-tracked service verification'],
    frFeatures: ['Réponse aux tempêtes 24/7', 'Allées, trottoirs, stationnements', 'Contrats saisonniers disponibles', 'Déglaçage et salage inclus', 'Vérification de service par GPS'],
    metaTitle: 'Snow Removal Ottawa | All Star Cleaning — 24/7 Winter Service',
    metaDescription: 'Dependable snow removal in Ottawa. 24/7 storm response, driveways, walkways, parking lots. Seasonal contracts & per-visit pricing. Free quote.',
    frMetaTitle: 'Déneigement Ottawa | All Star Cleaning — Service Hivernal 24/7',
    frMetaDescription: 'Déneigement fiable à Ottawa. Réponse aux tempêtes 24/7, allées, trottoirs, stationnements. Contrats saisonniers. Devis gratuit.',
    cta: 'Get a Free Snow Removal Quote', frCta: 'Obtenez un Devis Gratuit de Déneigement',
    faqs: snowRemovalFaqs,
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug || s.frSlug === slug);
}
export function getServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
