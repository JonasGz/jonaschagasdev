import { Experience } from "./components/experience";
import "./experiences.scss";

export const Experiences = () => {
  return (
    <div className="experiences">
      <div className="experiences__items">
        <Experience
          name="Oficial do Exército"
          enterprise="Exército Brasileiro"
          period="FEV/19 - atual"
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
        <Experience
          name="Desenvolvedor Front-end"
          enterprise="DevHat"
          period="OUT/23 - NOV/24"
          description="As atividades desempenhadas foram de criação de interfaces e desenvolvimento de soluções para o projeto Pet Dex, uma aplicação voltada para facilitar o processo de adoção de pets utilizando apenas JavaScript vanilla."
          tags={["HTML", "CSS", "JavaScript", "Git", "Scrum", "Kanban"]}
        />
        <Experience
          name="Desenvolvedor Full-stack"
          enterprise="Manga"
          period="NOV/24 - atual"
          description="As atividades desempenhadas foram de desenvolvimento de interfaces interativas e responsivas, desenvolvimento de soluções utilizando canvas e rastreamento ocular com webgazerJs."
          tags={[
            "HTML",
            "CSS",
            "JavaScript",
            "TypeScript",
            "React",
            "NextJs",
            "WebGazerJs",
            "Scrum",
          ]}
        />
      </div>
    </div>
  );
};
