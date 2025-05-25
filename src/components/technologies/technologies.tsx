import { ChevronLeft, ChevronRight } from "lucide-react";
import { Tech } from "./components/tech/tech";
import "./technologies.scss";
import { useScroll } from "../../hooks/use-scroll";

export const Technologies = () => {
  const { containerRef, handleNext, handlePrev } = useScroll();

  return (
    <div className="technologies">
      <div className="technologies__bg"></div>

      <ChevronLeft
        size={28}
        onClick={handlePrev}
        className="technologies__btn"
        color="white"
      />
      <div ref={containerRef} className="technologies__items">
        <Tech url="/assets/icons/jsIcon.svg" name="JavaScript" />
        <Tech url="/assets/icons/tsIcon.svg" name="TypeScript" />
        <Tech url="/assets/icons/reactIcon.svg" name="React" />
        <Tech url="/assets/icons/nextjsIcon.svg" name="Nextjs" />
        <Tech url="/assets/icons/flutterIcon.svg" name="Flutter" />
      </div>
      <ChevronRight
        size={28}
        onClick={handleNext}
        className="technologies__btn"
        color="white"
      />
    </div>
  );
};
