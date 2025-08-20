import { Experience } from "./components/experience";
import "./experiences.scss";

export const Experiences = () => {
  return (
    <div className="experiences">
      <div className="experiences__items">
        <Experience
          name="Desenvolvedor Full-stack"
          enterprise="Sync"
          period="JAN/25 - atual"
          description="Desenvolvi páginas e sistemas responsivos para web e dispositivos móveis, garantindo compatibilidade cross-browser. Colaborei na criação de interfaces otimizadas para SEO e performance."
          tags={[
            "HTML",
            "CSS",
            "JavaScript",
            "PHP",
            "Wordpress",
            "Bootstrap",
            "MySQL",
          ]}
        />

        <Experience
          name="Desenvolvedor Full-stack"
          enterprise="Reapho"
          period="NOV/24 - JUN/25"
          description="Criei interfaces interativas e responsivas, incluindo soluções baseadas em canvas e rastreamento ocular.
          Integrei funcionalidades avançadas para análise de comportamento do usuário em tempo real."
          tags={[
            "HTML",
            "CSS",
            "JavaScript",
            "TypeScript",
            "React",
            "NextJs",
            "NestJs",
            "PostgreSQL",
            "WebGazerJs",
            "Scrum",
          ]}
        />

        <Experience
          name="Desenvolvedor Front-end"
          enterprise="DevHat"
          period="OUT/23 - NOV/24"
          description="Participei de um projeto open-source, contribuindo para a criação de um app para doação de pets.
          Implementei componentes reutilizáveis e fluxos de navegação intuitivos."
          tags={["HTML", "CSS", "JavaScript", "Git", "Scrum", "Kanban"]}
        />

        <Experience
          name="Oficial do Exército"
          enterprise="Exército Brasileiro"
          period="FEV/19 - JUN/25"
          description="As atividades desempenhadas foram de gestão de equipes, treinamento de pessoas, gestão operacional e administrativa de organização militar, coordenação de projetos de Tecnologia da Informação e gestão do sistema ERP Educacional da Escola de Saúde do Exército."
          tags={[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Git",
            "Scrum",
            "Kanban",
          ]}
        />
      </div>
    </div>
  );
};
