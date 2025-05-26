import { ChevronLeft, ChevronRight } from "lucide-react";
import { Work } from "./components/work/work";
import { useScroll } from "../../hooks/use-scroll";
import "./works.scss";

export const Works = () => {
  const { containerRef, handleNext, handlePrev } = useScroll();

  return (
    <div className="works">
      <div className="works__bg"></div>
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
          url="https://petdex.vercel.app"
        />
        <Work
          key={crypto.randomUUID()}
          img="/assets/projects/schedule.png"
          tags={["React", "Nextjs", "PWA", "Firebase"]}
          title="Schedule App"
          description="Aplicativo PWA de agendamento de tarefas."
          url="https://schedulepwa.vercel.app"
        />
        <Work
          key={crypto.randomUUID()}
          img="/assets/projects/map-marker.png"
          tags={["React Native", "RN Maps", "Firebase", "Expo"]}
          title="Map Marker"
          description="Aplicativo para marcações de localizações em mapa."
          url="https://github.com/JonasGz/map-marker-react-native"
        />
        <Work
          key={crypto.randomUUID()}
          img="/assets/projects/fuel.png"
          tags={["Flutter", "Dart", "Firebase"]}
          title="Abast Control"
          description="Aplicativo para controle de abastecimentos de combustíveis."
          url="https://github.com/JonasGz/abast_control"
        />
        <Work
          key={crypto.randomUUID()}
          img="/assets/projects/foodcontrol.png"
          tags={["Flutter", "Dart", "Firebase"]}
          title="Food Control"
          description="Aplicativo para controle financeiro de alimentação."
          url="https://github.com/JonasGz/food-finance-control"
        />
        <Work
          key={crypto.randomUUID()}
          img="/assets/projects/loading.png"
          title="Em breve"
          description="..."
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
