import type { TranslationSchema } from "./en";

export const es: TranslationSchema = {
  meta: {
    title: "Portafolio - Jonas Chagas",
  },
  nav: {
    home: "Inicio",
    about: "Sobre mí",
    works: "Proyectos",
    technologies: "Habilidades",
    experiences: "Experiencia",
    contacts: "Contacto",
  },
  sections: {
    worksTitle: "Trabajos",
    worksSubtitle: "Mis proyectos",
    lpsTitle: "Landing Pages",
    lpsSubtitle: "Mis LPs",
    techTitle: "Tecnologías",
    techSubtitle: "Habilidades",
    experiencesTitle: "Trabajos",
    experiencesSubtitle: "Experiencia",
    contactsTitle: "Contacto",
    contactsSubtitle: "Hablemos",
  },
  home: {
    hello: "Hola, soy",
    category: "Ingeniero de Software",
    linkedinButton: "Visitar mi Linkedin",
  },
  about: {
    title: "Sobre mí",
    description:
      "Graduado en Análisis y Desarrollo de Sistemas y posgraduado en Desarrollo Móvil, aporto disciplina, organización y capacidad de aprendizaje rápido, habilidades desarrolladas como Oficial del Ejército, aplicadas ahora al desarrollo de software. Busco oportunidades para crecer como Ingeniero de Software y contribuir a proyectos desafiantes en el área de la tecnología, con enfoque en el desarrollo web y móvil.",
  },
  common: {
    access: "Acceder",
  },
  works: {
    cineflutter: {
      description: "Aplicación para ver películas por categorías y géneros.",
    },
    petdex: {
      description: "Aplicación que transforma la experiencia de tener una mascota.",
    },
    schedule: {
      description: "Aplicación PWA para programar tareas.",
    },
    mapmarker: {
      description: "Aplicación para marcar ubicaciones en un mapa.",
    },
    abastcontrol: {
      description: "Aplicación para el control de repostajes de combustible.",
    },
    foodcontrol: {
      description: "Aplicación para el control financiero de la alimentación.",
    },
  },
  lps: {
    nutriLu: {
      category: "Salud / Nutrición",
      description:
        "Landing page de nutricionista enfocada en agendar consultas por WhatsApp — pérdida de peso, reeducación alimentaria y seguimiento personalizado.",
    },
    funding: {
      category: "Formación corporativa",
      description:
        "Curso online con certificación de ANPEI sobre captación de financiación e incentivos para la innovación.",
    },
    olimpiadas: {
      category: "Evento corporativo",
      description:
        "Inmersión presencial de innovación in company de ANPEI, con DemoDay en pocos días.",
    },
    charitas: {
      category: "Inmobiliario / Captación",
      description:
        "Landing page de prelanzamiento de estudios residenciales en Charitas (Niterói), enfocada en la captación de leads.",
    },
    plowly: {
      category: "SaaS / Tech",
      description:
        "Producto de IA (auto-scheduler) para el enfoque y la función ejecutiva — landing page de producto internacional.",
    },
  },
  experiences: {
    current: "actual",
    sync: {
      role: "Desarrollador Full-stack",
      description:
        "Desarrollé páginas y sistemas responsivos para web y dispositivos móviles, garantizando compatibilidad entre navegadores. Colaboré en la creación de interfaces optimizadas para SEO y rendimiento.",
    },
    reapho: {
      role: "Desarrollador Full-stack",
      description:
        "Creé interfaces interactivas y responsivas, incluyendo soluciones basadas en canvas y seguimiento ocular. Integré funcionalidades avanzadas para el análisis del comportamiento del usuario en tiempo real.",
    },
    devhat: {
      role: "Desarrollador Front-end",
      description:
        "Participé en un proyecto open-source, contribuyendo a la creación de una app para la adopción de mascotas. Implementé componentes reutilizables y flujos de navegación intuitivos.",
    },
    army: {
      role: "Oficial del Ejército",
      enterprise: "Ejército Brasileño",
      description:
        "Las actividades desempeñadas fueron gestión de equipos, formación de personas, gestión operativa y administrativa de una organización militar, coordinación de proyectos de Tecnología de la Información y gestión del sistema ERP Educativo de la Escuela de Salud del Ejército.",
      tags: ["Disciplina", "Comunicación", "Gestión de Equipos"],
    },
  },
  contacts: {
    nameLabel: "Nombre",
    emailLabel: "Correo",
  },
};
