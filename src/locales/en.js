// English copy. fr.js must mirror this structure exactly (same keys, same array lengths and order).
export default {
  seo: {
    title: 'Architects & Civil Engineers in Cameroon | SMART Architecture & Construction',
    description:
      'Architectural design, civil and structural engineering, construction management and roads in Buea and across Cameroon. Licensed engineers, 10+ years. Free consultation.',
    privacyTitle: 'Privacy Policy | SMART Architecture & Construction',
    termsTitle: 'Terms of Service | SMART Architecture & Construction',
  },

  lang: { label: 'Language', en: 'English', fr: 'Français' },

  nav: {
    links: {
      home: 'Home',
      services: 'Services',
      philosophy: 'Philosophy',
      projects: 'Projects',
      process: 'Process',
      contact: 'Contact',
    },
    quote: 'Get a quote',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },

  hero: {
    eyebrow: 'Buea, Cameroon · Architecture & Civil Engineering',
    line1: 'We Transform Your Dreams',
    to: 'TO',
    reality: 'REALITY.',
    intro:
      'A modern engineering consultancy delivering architectural design, civil engineering, and construction management for residential, commercial, institutional, and industrial projects.',
    introStrong: 'Precision, durability, and craftsmanship — every time.',
    cta: 'Get a Free Consultation',
    badges: ['10+ Years Experience', '100+ Projects Delivered', 'Licensed Engineers', 'Quality Guaranteed'],
    scroll: 'Scroll',
    imageAlt: 'Modern architectural building facade',
  },

  shuffler: [
    { tag: 'Residential', label: 'Custom home & estate design' },
    { tag: 'Commercial', label: 'Offices, retail & mixed-use' },
    { tag: 'Institutional', label: 'Schools, churches & hospitals' },
  ],

  siteWatch: {
    title: 'Site Supervision',
    sitesToday: 'sites today',
    statuses: [
      { text: 'Surveying · site staked out', label: 'Survey' },
      { text: 'Non-conformance flagged · bay 3', label: 'Flagged' },
      { text: 'Engineer on-site · reviewing', label: 'Review' },
      { text: 'Inspection passed · delivered', label: 'Passed' },
    ],
  },

  scheduler: {
    days: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    week: 'Week 14 · Phase 2',
    milestone: 'Milestone',
    confirmed: '✓ Milestone confirmed',
    select: 'Select a milestone date',
  },

  features: {
    eyebrow: '╱ Our core disciplines',
    title1: 'Three disciplines.',
    title2: 'One vision.',
    cards: [
      {
        eyebrow: '01 / Design',
        heading: 'Architectural Design',
        sub: 'Concept to construction-ready',
        text: 'From first sketch to fully detailed drawings, we shape spaces that are as functional as they are beautiful — tailored to how you live and work.',
      },
      {
        eyebrow: '02 / Oversight',
        heading: 'Site Supervision',
        sub: 'Daily oversight, zero surprises',
        text: 'Our engineers supervise every phase on-site — verifying materials, workmanship, and safety so your build meets specification at every stage.',
      },
      {
        eyebrow: '03 / Delivery',
        heading: 'Project Management',
        sub: 'On time, on budget',
        text: 'We plan every milestone — from mobilization to handover — and keep you informed with clear timelines and transparent progress reporting.',
      },
    ],
  },

  pillars: {
    eyebrow: '╱ Three pillars',
    title1: 'The numbers behind',
    title2: 'the trust.',
    intro:
      'Three figures that define how we work. Not marketing — simply what Engr. Ebua Fidelis Mvo and our team deliver on every site.',
    items: [
      {
        title: 'Experience',
        label: 'years of practice',
        desc: 'A decade delivering architecture and civil engineering projects across the Southwest Region and beyond.',
      },
      {
        title: 'Delivery',
        label: 'projects completed',
        desc: 'From private residences to institutional buildings, each project delivered to specification and on schedule.',
      },
      {
        title: 'Standards',
        label: 'licensed engineering',
        desc: 'Every design and site supervision is led by qualified, registered engineers — no shortcuts, no guesswork.',
      },
    ],
  },

  projects: {
    eyebrow: '╱ Selected work',
    title1: 'Built, not just',
    title2: 'drawn.',
    filterLabel: 'Filter projects by category',
    all: 'All',
    categories: {
      residential: 'Residential',
      commercial: 'Commercial',
      institutional: 'Institutional',
      infrastructure: 'Infrastructure',
    },
    // PLACEHOLDER CONTENT: same order as PROJECTS in App.jsx.
    items: [
      { title: 'Private Residence', location: 'Buea', scope: 'Architectural design & construction' },
      { title: 'Commercial Building', location: 'Limbe', scope: 'Structural design & site supervision' },
      { title: 'School Classroom Block', location: 'Southwest Region', scope: 'Design, BoQ & construction management' },
      { title: 'Road & Drainage Works', location: 'Fako Division', scope: 'Road design & drainage construction' },
      { title: 'Duplex Renovation', location: 'Buea', scope: 'Renovation & interior fit-out' },
      { title: 'Church Hall', location: 'Kumba', scope: 'Architecture & structural engineering' },
    ],
    imageAlt: (title, location) => `${title} in ${location} by SMART Architecture & Construction`,
  },

  process: {
    eyebrow: '╱ How we work',
    title1: 'Three steps.',
    title2: 'No surprises.',
    badge: 'SMART Protocol',
    step: 'Step',
    steps: [
      {
        title: 'Consultation & Survey',
        tagline: 'We listen, then we assess.',
        text: 'We meet to understand your vision, budget, and site — followed by a full site survey and feasibility assessment before a single line is drawn.',
        alt: 'Engineers reviewing architectural plans',
        meta: 'Step 1 / Listen',
      },
      {
        title: 'Design & Engineering',
        tagline: 'We turn vision into drawings.',
        text: 'Our architects and structural engineers develop your concept into detailed, buildable drawings — balancing design ambition with engineering reality and budget.',
        alt: 'Architectural drawing and blueprint detail',
        meta: 'Step 2 / Design',
      },
      {
        title: 'Construction & Delivery',
        tagline: 'We build it, then we stand behind it.',
        text: 'Our site teams execute the build under continuous engineering supervision, with quality checks at every milestone through to final handover and beyond.',
        alt: 'Construction workers on an active site',
        meta: 'Step 3 / Build',
      },
    ],
  },

  services: {
    eyebrow: '╱ Everything we do',
    title1: 'The full scope,',
    title2: 'under one roof.',
    intro:
      'We handle projects of every scale — residential and commercial, public and private — with home base in Buea and reach across the Southwest Region.',
    items: [
      {
        title: 'Architecture & Design',
        text: 'From concept sketches to fully detailed architectural drawings, we design spaces that balance beauty, function, and buildability.',
      },
      {
        title: 'Civil & Structural Engineering',
        text: 'Structural analysis and civil engineering for foundations, frames, and infrastructure built to carry real load for the long term.',
      },
      {
        title: 'Construction Management',
        text: 'End-to-end site management, contractor coordination, and quality control that keeps your project on schedule and on budget.',
      },
      {
        title: 'Road & Infrastructure',
        text: "Design and construction of roads, drainage, and infrastructure works engineered for Cameroon's terrain and climate.",
      },
      {
        title: 'Renovation & Interior Fit-Out',
        text: 'Transforming existing structures and interiors through renovation, remodeling, and finishing that renew value and purpose.',
      },
      {
        title: 'Quantity Surveying & Consultancy',
        text: 'Accurate cost estimation, bills of quantities, and building consultancy that protect your budget from first brick to handover.',
      },
    ],
  },

  trust: {
    eyebrow: '╱ Why trust us',
    title: 'More than a contractor.',
    badges: [
      {
        title: 'Licensed Engineers',
        text: 'Every project is designed and supervised by registered, qualified engineers — technical expertise from concept to completion.',
      },
      {
        title: 'Led by Engr. Ebua Fidelis Mvo',
        text: 'Our CEO holds an MTech in Civil Engineering and DPET 2 certification, bringing hands-on technical leadership to every project.',
      },
      {
        title: '10+ Years of Practice',
        text: 'A decade of architecture, civil engineering, and construction management experience delivering durable, cost-effective results.',
      },
    ],
    cta: 'Get a Free Consultation',
  },

  // TO CONFIRM WITH CLIENT: answers describe typical practice; check each one is true for SMARCO.
  faq: {
    eyebrow: '╱ FAQ',
    title1: 'Questions we',
    title2: 'hear every week.',
    intro: "Can't find your answer? Message us on WhatsApp and an engineer will reply.",
    cta: 'Ask us on WhatsApp',
    items: [
      {
        q: 'Where do you work?',
        a: 'Our office is in Bomaka, Buea, and most of our projects are in the Southwest Region. We also take on projects elsewhere in Cameroon — tell us where your site is and we will confirm.',
      },
      {
        q: 'How much does a consultation cost?',
        a: 'The first consultation is free. We discuss your project, budget and site, then prepare a written quotation with a clear breakdown before any paid work begins.',
      },
      {
        q: 'Can you help me get a building permit?',
        a: 'Yes. We prepare the architectural and structural drawings required for a building permit application and guide you through the process with the local council.',
      },
      {
        q: 'I already have plans. Can you work with them?',
        a: 'Yes. We review existing drawings, check them for structural soundness and buildability, and adapt them where needed before construction starts.',
      },
      {
        q: 'Do you only design, or do you also build?',
        a: 'Both. You can hire us for design only, for site supervision only, or for the full project from first drawing to handover.',
      },
      {
        q: 'I live abroad. Can I follow my project remotely?',
        a: 'Yes. Many of our clients are in the diaspora. We send regular photo and video updates on WhatsApp and a progress report at every milestone, so you always know where your money is going.',
      },
      {
        q: 'How long will my project take?',
        a: 'It depends on size and scope. After the site visit we give you a schedule with dated milestones, and we report against it throughout the project.',
      },
    ],
  },

  contact: {
    eyebrow: '╱ Contact',
    title1: "Let's build",
    title2: 'something real.',
    intro: "Tell us about your project and we'll get back to you to discuss scope, budget, and next steps.",
    callOffice: 'Call the office',
    altLine: 'Alternative line',
    ceo: 'Speak to the CEO',
    whatsapp: 'Chat on WhatsApp',
    whatsappSub: 'Message us directly',
    email: 'Email us',
    office: 'Our office',
    confidentialityTitle: 'Project confidentiality',
    confidentiality:
      'Your project details are kept strictly confidential. We only use your information to discuss your inquiry and never share it with third parties.',
    fields: {
      name: 'Name',
      email: 'Email address',
      phone: 'Phone / WhatsApp',
      location: 'Project location',
      projectType: 'Project type',
      budget: 'Estimated budget',
      timeline: 'When do you want to start?',
      message: 'Your message',
    },
    select: 'Select…',
    messagePlaceholder:
      'Briefly describe your project: size, number of floors, whether you have land or plans already...',
    projectTypes: [
      'New building',
      'Renovation / extension',
      'Architectural drawings only',
      'Structural / civil engineering',
      'Road & infrastructure',
      'Cost estimate / BoQ',
      'Other',
    ],
    budgets: ['Under 10M FCFA', '10M – 50M FCFA', '50M – 150M FCFA', 'Over 150M FCFA', 'Not sure yet'],
    timelines: ['As soon as possible', 'Within 3 months', '3 – 6 months', '6+ months', 'Just exploring'],
    attachTitle: 'Attach site photos or reference images',
    attachSub: 'Click or drag files here (max 5 images)',
    errorBefore: "Your enquiry couldn't be sent. Please try again, or",
    errorLink: 'send it on WhatsApp',
    errorAfter: ' instead.',
    noteEndpoint: 'We contact you as soon as possible. Fields marked * are required.',
    noteWhatsapp: 'Your enquiry opens in WhatsApp, ready to send. Fields marked * are required.',
    sending: 'Sending...',
    send: 'Send Inquiry',
    sendWhatsapp: 'Send via WhatsApp',
    sentTitle: 'Thank you for reaching out',
    sentText: "We'll get back to you shortly to discuss your project.",
    waTitle: 'Almost done: press send in WhatsApp',
    waText: 'Your enquiry is ready in WhatsApp. Feel free to attach site photos or plans in the chat.',
    waRetry: "WhatsApp didn't open? Tap here",
    subject: (type, name) => `New quote request: ${type} — ${name}`,
    message: {
      greeting: 'Hello SMART Architecture, I would like a quote.',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      projectType: 'Project type',
      location: 'Location',
      budget: 'Budget',
      timeline: 'Timeline',
    },
  },

  footer: {
    tagline1: 'We Transform Your',
    tagline2: 'Dreams To Reality.',
    blurb: 'SMART Architecture & Construction Co. Ltd — home base in Buea, serving clients across Cameroon.',
    about:
      'A modern engineering consultancy delivering architectural design, civil engineering, structural engineering, and construction management for residential, commercial, institutional, and industrial projects.',
    ceoLine: 'Led by Engr. Ebua Fidelis Mvo · MTech Civil Engineering · DPET 2',
    services: 'Services',
    company: 'Company',
    contact: 'Contact',
    faq: 'FAQ',
    whatsapp: 'WhatsApp us',
    address: 'Bomaka, Opposite FHS, Buea, Cameroon',
    status: 'Currently Building · Open For New Projects',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
  },

  whatsappButton: {
    label: 'Chat with us on WhatsApp',
    short: 'WhatsApp',
    greeting: 'Hello SMART Architecture, I would like to discuss a project.',
  },

  legal: {
    back: 'Back to home',
    updated: 'Last updated',
    or: 'or',
    privacy: {
      title: 'Privacy Policy',
      updated: 'October 2026',
      sections: [
        {
          h: 'Information we collect',
          p: 'When you contact SMART Architecture & Construction Company Ltd through our website, we collect the information you provide directly — your name, email address, phone number, project location, project type, budget and timeline, message, and any reference images or site photos you choose to attach.',
        },
        {
          h: 'How we use your information',
          p: 'We use the information you submit solely to respond to your inquiry, assess your project, and provide you with a consultation or quotation. We do not sell, rent, or share your information with third parties for marketing purposes.',
        },
        {
          h: 'How your enquiry reaches us',
          p: 'If you send your enquiry through WhatsApp, the message is delivered by WhatsApp (Meta) and is subject to its privacy policy. If you use the form on this website, your enquiry is passed to a form-handling service solely to deliver it to us.',
        },
        {
          h: 'Data security',
          p: 'We take reasonable technical and organizational measures to protect the information you share with us from unauthorized access, alteration, or disclosure.',
        },
      ],
      contactH: 'Contact us',
      contactP:
        'If you have questions about this policy or wish to have your information removed from our records, contact us at',
    },
    terms: {
      title: 'Terms of Service',
      updated: 'August 2026',
      sections: [
        {
          h: 'Scope of services',
          p: 'SMART Architecture & Construction Company Ltd provides architectural design, civil and structural engineering, construction management, and related consultancy services. The scope, cost, and timeline of any engagement are agreed in writing before work begins.',
        },
        {
          h: 'Website use',
          p: 'This website is provided for informational purposes to help prospective clients learn about our services and request a consultation. Submitting an inquiry does not create a contractual relationship until a formal agreement is signed by both parties.',
        },
        {
          h: 'Intellectual property',
          p: 'All content on this website — including designs, drawings, photographs, and text — is the property of SMART Architecture & Construction Company Ltd unless otherwise credited, and may not be reproduced without written permission.',
        },
      ],
      contactH: 'Contact us',
      contactP: 'For questions about these terms, contact us at',
    },
  },
}
