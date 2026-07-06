import type { TranslationSchema } from "./en";

export const ptBR: TranslationSchema = {
  meta: {
    title: "Portfólio - Jonas Chagas",
  },
  nav: {
    home: "Início",
    about: "Sobre mim",
    works: "Projetos",
    technologies: "Habilidades",
    experiences: "Experiências",
    contacts: "Contato",
  },
  sections: {
    worksTitle: "Trabalhos",
    worksSubtitle: "Meus projetos",
    lpsTitle: "Landing Pages",
    lpsSubtitle: "Minhas LPs",
    techTitle: "Tecnologias",
    techSubtitle: "Habilidades",
    experiencesTitle: "Trabalhos",
    experiencesSubtitle: "Experiências",
    contactsTitle: "Contato",
    contactsSubtitle: "Fale comigo",
  },
  home: {
    hello: "Olá, eu sou",
    category: "Engenheiro de Software",
    linkedinButton: "Acessar meu Linkedin",
  },
  about: {
    title: "Sobre mim",
    description:
      "Formado em Análise e Desenvolvimento de Sistemas e pós-graduado em Desenvolvimento Mobile, trago disciplina, organização e capacidade de aprendizado rápido, habilidades desenvolvidas como Oficial do Exército, aplicadas agora no desenvolvimento de software. Busco oportunidades para crescer como Engenheiro de Software e contribuir com projetos desafiadores na área de tecnologia, com foco no desenvolvimento web e mobile.",
  },
  common: {
    access: "Acessar",
  },
  works: {
    cineflutter: {
      description: "Aplicativo de visualização de filmes por categorias e gêneros.",
    },
    petdex: {
      description: "Aplicativo que transforma a experiência de ser tutor de pets.",
    },
    schedule: {
      description: "Aplicativo PWA de agendamento de tarefas.",
    },
    mapmarker: {
      description: "Aplicativo para marcações de localizações em mapa.",
    },
    abastcontrol: {
      description: "Aplicativo para controle de abastecimentos de combustíveis.",
    },
    foodcontrol: {
      description: "Aplicativo para controle financeiro de alimentação.",
    },
  },
  lps: {
    nutriLu: {
      category: "Saúde / Nutrição",
      description:
        "LP de nutricionista com foco em agendamento de consulta pelo WhatsApp — emagrecimento, reeducação alimentar e acompanhamento personalizado.",
    },
    funding: {
      category: "Educação corporativa",
      description:
        "Curso online com certificação da ANPEI sobre captação de fomento e incentivos para inovação.",
    },
    olimpiadas: {
      category: "Evento corporativo",
      description:
        "Imersão presencial de inovação in company da ANPEI, com DemoDay em poucos dias.",
    },
    charitas: {
      category: "Imobiliário / Captação",
      description:
        "LP de pré-lançamento de studios residenciais em Charitas (Niterói), focada em captura de leads.",
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
      role: "Desenvolvedor Full-stack",
      description:
        "Desenvolvi páginas e sistemas responsivos para web e dispositivos móveis, garantindo compatibilidade cross-browser. Colaborei na criação de interfaces otimizadas para SEO e performance.",
    },
    reapho: {
      role: "Desenvolvedor Full-stack",
      description:
        "Criei interfaces interativas e responsivas, incluindo soluções baseadas em canvas e rastreamento ocular. Integrei funcionalidades avançadas para análise de comportamento do usuário em tempo real.",
    },
    devhat: {
      role: "Desenvolvedor Front-end",
      description:
        "Participei de um projeto open-source, contribuindo para a criação de um app para doação de pets. Implementei componentes reutilizáveis e fluxos de navegação intuitivos.",
    },
    army: {
      role: "Oficial do Exército",
      enterprise: "Exército Brasileiro",
      description:
        "As atividades desempenhadas foram de gestão de equipes, treinamento de pessoas, gestão operacional e administrativa de organização militar, coordenação de projetos de Tecnologia da Informação e gestão do sistema ERP Educacional da Escola de Saúde do Exército.",
      tags: ["Disciplina", "Comunicação", "Gestão de Equipes"],
    },
  },
  contacts: {
    nameLabel: "Nome",
    emailLabel: "E-mail",
  },
};
