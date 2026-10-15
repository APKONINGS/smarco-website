// Version française. Doit suivre exactement la structure de en.js.
export default {
  seo: {
    title: 'Architectes et ingénieurs en génie civil au Cameroun | SMART Architecture & Construction',
    description:
      "Conception architecturale, génie civil et structure, gestion de chantier et routes à Buea et partout au Cameroun. Ingénieurs agréés, plus de 10 ans d'expérience. Consultation gratuite.",
    privacyTitle: 'Politique de confidentialité | SMART Architecture & Construction',
    termsTitle: "Conditions d'utilisation | SMART Architecture & Construction",
  },

  lang: { label: 'Langue', en: 'English', fr: 'Français' },

  nav: {
    links: {
      home: 'Accueil',
      services: 'Services',
      philosophy: 'Philosophie',
      projects: 'Projets',
      process: 'Méthode',
      contact: 'Contact',
    },
    quote: 'Demander un devis',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
  },

  hero: {
    eyebrow: 'Buea, Cameroun · Architecture & Génie civil',
    line1: 'Nous transformons vos rêves',
    to: 'EN',
    reality: 'RÉALITÉ.',
    intro:
      "Un bureau d'études moderne en architecture, génie civil et gestion de chantier pour vos projets résidentiels, commerciaux, institutionnels et industriels.",
    introStrong: 'Précision, durabilité et savoir-faire — à chaque fois.',
    cta: 'Consultation gratuite',
    badges: ["10+ ans d'expérience", '100+ projets réalisés', 'Ingénieurs agréés', 'Qualité garantie'],
    scroll: 'Défiler',
    imageAlt: "Façade d'un bâtiment à l'architecture moderne",
  },

  shuffler: [
    { tag: 'Résidentiel', label: 'Villas et résidences sur mesure' },
    { tag: 'Commercial', label: 'Bureaux, commerces et immeubles mixtes' },
    { tag: 'Institutionnel', label: 'Écoles, églises et hôpitaux' },
  ],

  siteWatch: {
    title: 'Suivi de chantier',
    sitesToday: "chantiers aujourd'hui",
    statuses: [
      { text: 'Levé topographique · implantation faite', label: 'Levé' },
      { text: 'Non-conformité signalée · travée 3', label: 'Signalé' },
      { text: 'Ingénieur sur site · vérification', label: 'Contrôle' },
      { text: 'Réception validée · livré', label: 'Validé' },
    ],
  },

  scheduler: {
    days: ['L', 'M', 'M', 'J', 'V', 'S', 'D'],
    week: 'Semaine 14 · Phase 2',
    milestone: 'Jalon',
    confirmed: '✓ Jalon confirmé',
    select: 'Choisir la date du jalon',
  },

  features: {
    eyebrow: '╱ Nos métiers',
    title1: 'Trois métiers.',
    title2: 'Une seule vision.',
    cards: [
      {
        eyebrow: '01 / Conception',
        heading: 'Conception architecturale',
        sub: "De l'esquisse aux plans d'exécution",
        text: "De la première esquisse aux plans détaillés, nous concevons des espaces aussi fonctionnels que beaux — pensés pour votre façon de vivre et de travailler.",
      },
      {
        eyebrow: '02 / Contrôle',
        heading: 'Suivi de chantier',
        sub: 'Un contrôle quotidien, aucune surprise',
        text: "Nos ingénieurs supervisent chaque phase sur le terrain — matériaux, mise en œuvre et sécurité — pour que l'ouvrage respecte le cahier des charges à chaque étape.",
      },
      {
        eyebrow: '03 / Livraison',
        heading: 'Gestion de projet',
        sub: 'Dans les délais, dans le budget',
        text: "Nous planifions chaque jalon, de l'installation de chantier à la réception, et vous tenons informé avec un planning clair et des rapports d'avancement transparents.",
      },
    ],
  },

  pillars: {
    eyebrow: '╱ Trois piliers',
    title1: 'Les chiffres derrière',
    title2: 'la confiance.',
    intro:
      "Trois chiffres qui définissent notre façon de travailler. Pas du marketing — simplement ce que l'Ing. Ebua Fidelis Mvo et son équipe livrent sur chaque chantier.",
    items: [
      {
        title: 'Expérience',
        label: "ans d'exercice",
        desc: "Une décennie de projets d'architecture et de génie civil dans la Région du Sud-Ouest et au-delà.",
      },
      {
        title: 'Réalisations',
        label: 'projets livrés',
        desc: "Des résidences privées aux bâtiments institutionnels, chaque projet livré conformément au cahier des charges et dans les délais.",
      },
      {
        title: 'Exigence',
        label: 'ingénierie agréée',
        desc: 'Chaque étude et chaque suivi de chantier est dirigé par des ingénieurs qualifiés et inscrits à l’Ordre — sans raccourci, sans approximation.',
      },
    ],
  },

  projects: {
    eyebrow: '╱ Réalisations',
    title1: 'Construit, pas seulement',
    title2: 'dessiné.',
    filterLabel: 'Filtrer les projets par catégorie',
    all: 'Tous',
    categories: {
      residential: 'Résidentiel',
      commercial: 'Commercial',
      institutional: 'Institutionnel',
      infrastructure: 'Infrastructures',
    },
    // CONTENU PROVISOIRE : même ordre que PROJECTS dans App.jsx.
    items: [
      { title: 'Résidence privée', location: 'Buea', scope: 'Conception architecturale et construction' },
      { title: 'Immeuble commercial', location: 'Limbé', scope: 'Calcul de structure et suivi de chantier' },
      { title: 'Bloc de salles de classe', location: 'Région du Sud-Ouest', scope: 'Conception, DQE et gestion de chantier' },
      { title: 'Voirie et assainissement', location: 'Département du Fako', scope: 'Conception routière et travaux de drainage' },
      { title: "Rénovation d'un duplex", location: 'Buea', scope: 'Rénovation et aménagement intérieur' },
      { title: 'Salle paroissiale', location: 'Kumba', scope: 'Architecture et ingénierie structurelle' },
    ],
    imageAlt: (title, location) => `${title} à ${location} par SMART Architecture & Construction`,
  },

  process: {
    eyebrow: '╱ Notre méthode',
    title1: 'Trois étapes.',
    title2: 'Aucune surprise.',
    badge: 'Méthode SMART',
    step: 'Étape',
    steps: [
      {
        title: 'Consultation et étude du site',
        tagline: 'Nous écoutons, puis nous évaluons.',
        text: "Nous échangeons pour comprendre votre projet, votre budget et votre terrain, puis réalisons un levé complet et une étude de faisabilité avant de tracer le moindre trait.",
        alt: 'Ingénieurs examinant des plans architecturaux',
        meta: 'Étape 1 / Écoute',
      },
      {
        title: 'Conception et ingénierie',
        tagline: 'Nous transformons votre vision en plans.',
        text: "Nos architectes et ingénieurs structure développent votre concept en plans détaillés et constructibles — en conciliant ambition architecturale, réalité technique et budget.",
        alt: "Détail d'un plan architectural",
        meta: 'Étape 2 / Conception',
      },
      {
        title: 'Construction et livraison',
        tagline: 'Nous construisons, et nous restons à vos côtés.',
        text: "Nos équipes réalisent les travaux sous la supervision constante d'un ingénieur, avec des contrôles qualité à chaque jalon jusqu'à la réception et au-delà.",
        alt: 'Ouvriers sur un chantier en activité',
        meta: 'Étape 3 / Construction',
      },
    ],
  },

  services: {
    eyebrow: '╱ Tout ce que nous faisons',
    title1: "L'ensemble des services,",
    title2: 'sous un même toit.',
    intro:
      'Nous réalisons des projets de toutes tailles — résidentiels et commerciaux, publics et privés — depuis notre base de Buea et dans toute la Région du Sud-Ouest.',
    items: [
      {
        title: 'Architecture et conception',
        text: "Des premières esquisses aux plans architecturaux détaillés, nous concevons des espaces qui allient esthétique, fonctionnalité et faisabilité.",
      },
      {
        title: 'Génie civil et structure',
        text: 'Calculs de structure et génie civil pour fondations, ossatures et infrastructures conçues pour durer et supporter des charges réelles.',
      },
      {
        title: 'Gestion de chantier',
        text: "Gestion complète du chantier, coordination des entreprises et contrôle qualité pour tenir les délais et le budget.",
      },
      {
        title: 'Routes et infrastructures',
        text: "Conception et réalisation de routes, d'ouvrages d'assainissement et d'infrastructures adaptés au relief et au climat du Cameroun.",
      },
      {
        title: 'Rénovation et aménagement intérieur',
        text: 'Rénovation, réaménagement et finitions qui redonnent valeur et usage aux bâtiments existants.',
      },
      {
        title: 'Métré et conseil',
        text: "Estimations précises, devis quantitatifs (DQE) et conseil technique pour protéger votre budget de la première pierre à la réception.",
      },
    ],
  },

  trust: {
    eyebrow: '╱ Pourquoi nous faire confiance',
    title: "Plus qu'une entreprise de construction.",
    badges: [
      {
        title: 'Ingénieurs agréés',
        text: "Chaque projet est conçu et suivi par des ingénieurs qualifiés et inscrits — une expertise technique de l'étude à la livraison.",
      },
      {
        title: "Dirigé par l'Ing. Ebua Fidelis Mvo",
        text: "Notre directeur général est titulaire d'un MTech en génie civil et du DPET 2, et assure un encadrement technique direct sur chaque projet.",
      },
      {
        title: "10+ ans d'exercice",
        text: "Une décennie d'expérience en architecture, génie civil et gestion de chantier, au service de résultats durables et maîtrisés.",
      },
    ],
    cta: 'Consultation gratuite',
  },

  // À CONFIRMER AVEC LE CLIENT : mêmes réserves que la version anglaise.
  faq: {
    eyebrow: '╱ FAQ',
    title1: 'Les questions',
    title2: "qu'on nous pose souvent.",
    intro: "Vous ne trouvez pas votre réponse ? Écrivez-nous sur WhatsApp, un ingénieur vous répondra.",
    cta: 'Nous écrire sur WhatsApp',
    items: [
      {
        q: 'Où intervenez-vous ?',
        a: "Notre bureau est à Bomaka, Buea, et la plupart de nos projets se situent dans la Région du Sud-Ouest. Nous intervenons aussi ailleurs au Cameroun — indiquez-nous l'emplacement de votre terrain et nous vous le confirmerons.",
      },
      {
        q: 'Combien coûte une consultation ?',
        a: "La première consultation est gratuite. Nous discutons de votre projet, de votre budget et de votre terrain, puis nous vous remettons un devis écrit et détaillé avant tout travail payant.",
      },
      {
        q: "Pouvez-vous m'aider à obtenir un permis de bâtir ?",
        a: 'Oui. Nous préparons les plans architecturaux et structurels nécessaires à la demande de permis de bâtir et vous accompagnons dans les démarches auprès de la commune.',
      },
      {
        q: "J'ai déjà des plans. Pouvez-vous travailler avec ?",
        a: 'Oui. Nous examinons les plans existants, vérifions leur solidité structurelle et leur faisabilité, et les adaptons si nécessaire avant le début des travaux.',
      },
      {
        q: 'Faites-vous seulement les plans, ou aussi la construction ?',
        a: "Les deux. Vous pouvez nous confier uniquement la conception, uniquement le suivi de chantier, ou l'ensemble du projet, du premier plan à la réception.",
      },
      {
        q: "J'habite à l'étranger. Puis-je suivre mon projet à distance ?",
        a: "Oui. Beaucoup de nos clients vivent dans la diaspora. Nous envoyons régulièrement photos et vidéos sur WhatsApp et un rapport d'avancement à chaque jalon, pour que vous sachiez toujours où va votre argent.",
      },
      {
        q: 'Combien de temps durera mon projet ?',
        a: "Cela dépend de la taille et de l'étendue du projet. Après la visite du site, nous vous remettons un planning avec des jalons datés, et nous en rendons compte tout au long du chantier.",
      },
    ],
  },

  contact: {
    eyebrow: '╱ Contact',
    title1: 'Construisons',
    title2: 'quelque chose de concret.',
    intro:
      'Parlez-nous de votre projet et nous vous recontacterons pour en discuter : étendue, budget et prochaines étapes.',
    callOffice: 'Appeler le bureau',
    altLine: 'Ligne secondaire',
    ceo: 'Parler au directeur',
    whatsapp: 'Discuter sur WhatsApp',
    whatsappSub: 'Écrivez-nous directement',
    email: 'Nous écrire',
    office: 'Notre bureau',
    confidentialityTitle: 'Confidentialité du projet',
    confidentiality:
      "Les détails de votre projet restent strictement confidentiels. Nous utilisons vos informations uniquement pour répondre à votre demande et ne les partageons jamais avec des tiers.",
    fields: {
      name: 'Nom',
      email: 'Adresse e-mail',
      phone: 'Téléphone / WhatsApp',
      location: 'Lieu du projet',
      projectType: 'Type de projet',
      budget: 'Budget estimé',
      timeline: 'Quand souhaitez-vous commencer ?',
      message: 'Votre message',
    },
    select: 'Choisir…',
    messagePlaceholder:
      'Décrivez brièvement votre projet : surface, nombre de niveaux, si vous avez déjà un terrain ou des plans...',
    projectTypes: [
      'Construction neuve',
      'Rénovation / extension',
      'Plans architecturaux uniquement',
      'Étude structure / génie civil',
      'Routes et infrastructures',
      'Estimation / DQE',
      'Autre',
    ],
    budgets: ['Moins de 10 M FCFA', '10 M – 50 M FCFA', '50 M – 150 M FCFA', 'Plus de 150 M FCFA', 'Je ne sais pas encore'],
    timelines: ['Dès que possible', "D'ici 3 mois", 'Dans 3 à 6 mois', 'Dans plus de 6 mois', 'Je me renseigne'],
    attachTitle: 'Joindre des photos du terrain ou des images de référence',
    attachSub: 'Cliquez ou glissez vos fichiers ici (5 images max.)',
    errorBefore: "Votre demande n'a pas pu être envoyée. Réessayez, ou",
    errorLink: 'envoyez-la sur WhatsApp',
    errorAfter: '.',
    noteEndpoint: 'Nous vous recontactons au plus vite. Les champs marqués * sont obligatoires.',
    noteWhatsapp: "Votre demande s'ouvre dans WhatsApp, prête à être envoyée. Les champs marqués * sont obligatoires.",
    sending: 'Envoi...',
    send: 'Envoyer la demande',
    sendWhatsapp: 'Envoyer via WhatsApp',
    sentTitle: 'Merci pour votre message',
    sentText: 'Nous vous recontactons très vite pour discuter de votre projet.',
    waTitle: 'Presque fini : appuyez sur Envoyer dans WhatsApp',
    waText: "Votre demande est prête dans WhatsApp. N'hésitez pas à joindre des photos du terrain ou vos plans dans la discussion.",
    waRetry: "WhatsApp ne s'est pas ouvert ? Appuyez ici",
    subject: (type, name) => `Nouvelle demande de devis : ${type} — ${name}`,
    message: {
      greeting: 'Bonjour SMART Architecture, je souhaite obtenir un devis.',
      name: 'Nom',
      email: 'E-mail',
      phone: 'Téléphone',
      projectType: 'Type de projet',
      location: 'Lieu',
      budget: 'Budget',
      timeline: 'Délai',
    },
  },

  footer: {
    tagline1: 'Nous transformons vos',
    tagline2: 'rêves en réalité.',
    blurb: 'SMART Architecture & Construction Co. Ltd — basée à Buea, au service de clients dans tout le Cameroun.',
    about:
      "Un bureau d'études moderne en conception architecturale, génie civil, ingénierie structurelle et gestion de chantier pour des projets résidentiels, commerciaux, institutionnels et industriels.",
    ceoLine: 'Dirigé par l’Ing. Ebua Fidelis Mvo · MTech génie civil · DPET 2',
    services: 'Services',
    company: 'Entreprise',
    contact: 'Contact',
    faq: 'FAQ',
    whatsapp: 'Écrivez-nous sur WhatsApp',
    address: 'Bomaka, en face de la FHS, Buea, Cameroun',
    status: 'Chantiers en cours · Ouverts à de nouveaux projets',
    privacy: 'Politique de confidentialité',
    terms: "Conditions d'utilisation",
  },

  whatsappButton: {
    label: 'Discuter avec nous sur WhatsApp',
    short: 'WhatsApp',
    greeting: 'Bonjour SMART Architecture, je souhaite discuter d’un projet.',
  },

  legal: {
    back: "Retour à l'accueil",
    updated: 'Dernière mise à jour',
    or: 'ou',
    privacy: {
      title: 'Politique de confidentialité',
      updated: 'octobre 2026',
      sections: [
        {
          h: 'Informations collectées',
          p: "Lorsque vous contactez SMART Architecture & Construction Company Ltd via notre site, nous recueillons les informations que vous fournissez directement : nom, adresse e-mail, numéro de téléphone, lieu du projet, type de projet, budget et délai, message, ainsi que les photos du terrain ou images de référence que vous choisissez de joindre.",
        },
        {
          h: 'Utilisation de vos informations',
          p: "Nous utilisons ces informations uniquement pour répondre à votre demande, évaluer votre projet et vous proposer une consultation ou un devis. Nous ne vendons, ne louons et ne partageons pas vos informations avec des tiers à des fins commerciales.",
        },
        {
          h: 'Comment votre demande nous parvient',
          p: "Si vous envoyez votre demande via WhatsApp, le message est transmis par WhatsApp (Meta) et soumis à sa politique de confidentialité. Si vous utilisez le formulaire de ce site, votre demande est confiée à un service de traitement de formulaires dans le seul but de nous la transmettre.",
        },
        {
          h: 'Sécurité des données',
          p: "Nous prenons des mesures techniques et organisationnelles raisonnables pour protéger vos informations contre tout accès, modification ou divulgation non autorisés.",
        },
      ],
      contactH: 'Nous contacter',
      contactP:
        'Pour toute question sur cette politique ou pour demander la suppression de vos informations, contactez-nous à',
    },
    terms: {
      title: "Conditions d'utilisation",
      updated: 'août 2026',
      sections: [
        {
          h: 'Étendue des services',
          p: "SMART Architecture & Construction Company Ltd fournit des services de conception architecturale, de génie civil et de structure, de gestion de chantier et de conseil associé. L'étendue, le coût et les délais de chaque mission sont convenus par écrit avant le début des travaux.",
        },
        {
          h: 'Utilisation du site',
          p: "Ce site est fourni à titre informatif pour permettre aux clients potentiels de découvrir nos services et de demander une consultation. L'envoi d'une demande ne crée aucune relation contractuelle tant qu'un accord formel n'a pas été signé par les deux parties.",
        },
        {
          h: 'Propriété intellectuelle',
          p: "Tout le contenu de ce site — y compris conceptions, plans, photographies et textes — est la propriété de SMART Architecture & Construction Company Ltd, sauf mention contraire, et ne peut être reproduit sans autorisation écrite.",
        },
      ],
      contactH: 'Nous contacter',
      contactP: 'Pour toute question sur ces conditions, contactez-nous à',
    },
  },
}
