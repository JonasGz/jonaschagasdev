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
          description="Aplicativo que transforma a experiência de ser tutor de pets em algo único e interativo. Com o PetDex, os tutores podem catalogar e compartilhar informações sobre seus pets, semelhante à famosa Pokedex, mas para animais de estimação."
        />
        <Work
          key={crypto.randomUUID()}
          img="/assets/projects/schedule.png"
          tags={["React", "Nextjs", "Firebase"]}
          title="Schedule App"
          description="O Schedule PWA é um projeto mobile/desktop com a tecnologia PWA (Progressive Web App) com o objetivo de possibilitar o agendamento de tarefas."
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
