export const en = {
  meta: {
    title: "Portfolio - Jonas Chagas",
  },
  nav: {
    home: "Home",
    about: "About me",
    works: "Projects",
    technologies: "Skills",
    experiences: "Experience",
    contacts: "Contact",
  },
  sections: {
    worksTitle: "Work",
    worksSubtitle: "My projects",
    lpsTitle: "Landing Pages",
    lpsSubtitle: "My LPs",
    techTitle: "Technologies",
    techSubtitle: "Skills",
    experiencesTitle: "Work",
    experiencesSubtitle: "Experience",
    contactsTitle: "Contact",
    contactsSubtitle: "Get in touch",
  },
  home: {
    hello: "Hello, I am",
    category: "Software Engineer",
    linkedinButton: "Visit my Linkedin",
  },
  about: {
    title: "About me",
    description:
      "With a degree in Systems Analysis and Development and a postgraduate degree in Mobile Development, I bring discipline, organization and fast learning — skills developed as an Army Officer and now applied to software development. I'm looking for opportunities to grow as a Software Engineer and contribute to challenging technology projects, focused on web and mobile development.",
  },
  common: {
    access: "Visit",
  },
  works: {
    cineflutter: {
      description: "App for browsing movies by category and genre.",
    },
    petdex: {
      description: "App that transforms the experience of being a pet owner.",
    },
    schedule: {
      description: "PWA app for scheduling tasks.",
    },
    mapmarker: {
      description: "App for marking locations on a map.",
    },
    abastcontrol: {
      description: "App for tracking fuel refueling.",
    },
    foodcontrol: {
      description: "App for food expense tracking.",
    },
  },
  lps: {
    nutriLu: {
      category: "Health / Nutrition",
      description:
        "Nutritionist landing page focused on booking appointments via WhatsApp — weight loss, healthy eating and personalized follow-up.",
    },
    funding: {
      category: "Corporate education",
      description:
        "Online course with ANPEI certification on raising funding and incentives for innovation.",
    },
    olimpiadas: {
      category: "Corporate event",
      description:
        "In-person in-company innovation immersion by ANPEI, with a DemoDay in just a few days.",
    },
    charitas: {
      category: "Real estate / Lead gen",
      description:
        "Pre-launch landing page for residential studios in Charitas (Niterói), focused on lead capture.",
    },
    plowly: {
      category: "SaaS / Tech",
      description:
        "AI product (auto-scheduler) for focus and executive function — an international product landing page.",
    },
  },
  experiences: {
    current: "current",
    sync: {
      role: "Full-stack Developer",
      description:
        "I built responsive pages and systems for web and mobile, ensuring cross-browser compatibility. I collaborated on creating interfaces optimized for SEO and performance.",
    },
    reapho: {
      role: "Full-stack Developer",
      description:
        "I created interactive, responsive interfaces, including canvas-based and eye-tracking solutions. I integrated advanced features for real-time user behavior analysis.",
    },
    devhat: {
      role: "Front-end Developer",
      description:
        "I took part in an open-source project, contributing to a pet-adoption app. I implemented reusable components and intuitive navigation flows.",
    },
    army: {
      role: "Army Officer",
      enterprise: "Brazilian Army",
      description:
        "My duties included team management, people training, operational and administrative management of a military organization, coordination of Information Technology projects, and management of the educational ERP system of the Army Health School.",
      tags: ["Discipline", "Communication", "Team Management"],
    },
  },
  contacts: {
    nameLabel: "Name",
    emailLabel: "E-mail",
  },
};

export type TranslationSchema = typeof en;
