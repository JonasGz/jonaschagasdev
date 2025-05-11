import { ChevronLeft, ChevronRight } from "lucide-react";
import { Work } from "./components/work/work";
import { useScroll } from "../../hooks/use-scroll";
import "./works.scss";

export const Works = () => {
  const { containerRef, handleNext, handlePrev } = useScroll();

  return (
    <div className="works">
      <ChevronLeft
        size={28}
        onClick={handlePrev}
        className="works__btn"
        color="white"
      />
      <div className="works__items" ref={containerRef}>
        <Work
          key={crypto.randomUUID()}
          img="/assets/projects/petdex.png"
          tags={["JavaScript", "HTML", "SCSS", "Firebase"]}
          title="PetDex"
          description="Aplicativo que transforma a experiência de ser tutor de pets."
        />
        <Work
          key={crypto.randomUUID()}
          img="/assets/projects/schedule.png"
          tags={["React", "Nextjs", "Firebase"]}
          title="Schedule App"
          description="Aplicativo PWA de agendamento de tarefas."
        />
        <Work
          key={crypto.randomUUID()}
          img="/assets/projects/schedule.png"
          tags={["React", "Nextjs", "Firebase"]}
          title="Schedule App"
          description="Aplicativo PWA de agendamento de tarefas."
        />
        <Work
          key={crypto.randomUUID()}
          img="/assets/projects/schedule.png"
          tags={["React", "Nextjs", "Firebase"]}
          title="Schedule App"
          description="Aplicativo PWA de agendamento de tarefas."
        />
        <Work
          key={crypto.randomUUID()}
          img="/assets/projects/schedule.png"
          tags={["React", "Nextjs", "Firebase"]}
          title="Schedule App"
          description="Aplicativo PWA de agendamento de tarefas."
        />
        <Work
          key={crypto.randomUUID()}
          img="/assets/projects/schedule.png"
          tags={["React", "Nextjs", "Firebase"]}
          title="Schedule App"
          description="Aplicativo PWA de agendamento de tarefas."
        />
      </div>
      <ChevronRight
        size={28}
        onClick={handleNext}
        className="works__btn"
        color="white"
      />
    </div>
  );
};
