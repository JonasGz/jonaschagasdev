import { ChevronLeft, ChevronRight } from "lucide-react";
import { Work } from "./components/work/work";
import { useWorkScroll } from "../../hooks/use-work-scroll";
import "./works.scss";

export const Works = () => {
  const { containerRef, handleNext, handlePrev } = useWorkScroll();

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
          img=""
          tags={["React", "TypeScript"]}
          title="PetDex"
          description="Projeto open source"
        />
        <Work
          key={crypto.randomUUID()}
          img=""
          tags={["React", "TypeScript"]}
          title="PetDex"
          description="Projeto open source"
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
