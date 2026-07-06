import type { TranslationSchema } from "./en";

export const ptPT: TranslationSchema = {
  meta: {
    title: "Portefólio - Jonas Chagas",
  },
  nav: {
    home: "Início",
    about: "Sobre mim",
    works: "Projetos",
    technologies: "Competências",
    experiences: "Experiência",
    contacts: "Contacto",
  },
  sections: {
    worksTitle: "Trabalhos",
    worksSubtitle: "Os meus projetos",
    lpsTitle: "Landing Pages",
    lpsSubtitle: "As minhas LPs",
    techTitle: "Tecnologias",
    techSubtitle: "Competências",
    experiencesTitle: "Trabalhos",
    experiencesSubtitle: "Experiência",
    contactsTitle: "Contacto",
    contactsSubtitle: "Fale comigo",
  },
  home: {
    hello: "Olá, eu sou",
    category: "Engenheiro de Software",
    linkedinButton: "Aceder ao meu Linkedin",
  },
  about: {
    title: "Sobre mim",
    description:
      "Licenciado em Análise e Desenvolvimento de Sistemas e pós-graduado em Desenvolvimento Mobile, trago disciplina, organização e capacidade de aprendizagem rápida, competências desenvolvidas como Oficial do Exército, agora aplicadas ao desenvolvimento de software. Procuro oportunidades para crescer como Engenheiro de Software e contribuir para projetos desafiantes na área da tecnologia, com foco no desenvolvimento web e mobile.",
  },
  common: {
    access: "Aceder",
  },
  works: {
    cineflutter: {
      description: "Aplicação para visualização de filmes por categorias e géneros.",
    },
    petdex: {
      description: "Aplicação que transforma a experiência de ter um animal de estimação.",
    },
    schedule: {
      description: "Aplicação PWA para agendamento de tarefas.",
    },
    mapmarker: {
      description: "Aplicação para marcação de localizações num mapa.",
    },
    abastcontrol: {
      description: "Aplicação para controlo de abastecimentos de combustível.",
    },
    foodcontrol: {
      description: "Aplicação para controlo financeiro da alimentação.",
    },
  },
  lps: {
    nutriLu: {
      category: "Saúde / Nutrição",
      description:
        "LP de nutricionista com foco na marcação de consultas pelo WhatsApp — emagrecimento, reeducação alimentar e acompanhamento personalizado.",
    },
    funding: {
      category: "Formação empresarial",
      description:
        "Curso online com certificação da ANPEI sobre captação de financiamento e incentivos à inovação.",
    },
    olimpiadas: {
      category: "Evento empresarial",
      description:
        "Imersão presencial de inovação in company da ANPEI, com DemoDay em poucos dias.",
    },
    charitas: {
      category: "Imobiliário / Captação",
      description:
        "LP de pré-lançamento de studios residenciais em Charitas (Niterói), focada na captação de leads.",
    },
    plowly: {
      category: "SaaS / Tech",
      description:
        "Produto de IA (auto-scheduler) para foco e função executiva — LP de produto internacional.",
    },
  },
  experiences: {
    current: "atual",
    sync: {
      role: "Programador Full-stack",
      description:
        "Desenvolvi páginas e sistemas responsivos para web e dispositivos móveis, garantindo compatibilidade cross-browser. Colaborei na criação de interfaces otimizadas para SEO e desempenho.",
    },
    reapho: {
      role: "Programador Full-stack",
      description:
        "Criei interfaces interativas e responsivas, incluindo soluções baseadas em canvas e rastreio ocular. Integrei funcionalidades avançadas para análise do comportamento do utilizador em tempo real.",
    },
    devhat: {
      role: "Programador Front-end",
      description:
        "Participei num projeto open-source, contribuindo para a criação de uma aplicação de adoção de animais. Implementei componentes reutilizáveis e fluxos de navegação intuitivos.",
    },
    army: {
      role: "Oficial do Exército",
      enterprise: "Exército Brasileiro",
      description:
        "As atividades desempenhadas incluíram gestão de equipas, formação de pessoas, gestão operacional e administrativa de organização militar, coordenação de projetos de Tecnologias de Informação e gestão do sistema ERP Educacional da Escola de Saúde do Exército.",
      tags: ["Disciplina", "Comunicação", "Gestão de Equipas"],
    },
  },
  contacts: {
    nameLabel: "Nome",
    emailLabel: "E-mail",
  },
};
