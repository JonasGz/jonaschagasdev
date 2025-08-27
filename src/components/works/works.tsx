import { ChevronLeft, ChevronRight } from "lucide-react";
import { Work } from "./components/work/work";
import { useScroll } from "../../hooks/use-scroll";
import "./works.scss";

export const Works = () => {
  const { containerRef, handleNext, handlePrev } = useScroll({
    itemsPerView: 1,
  });

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
          img="https://sdmntprcentralus.oaiusercontent.com/files/00000000-eaf0-61f5-a2d6-b63c320f4e3b/raw?se=2025-08-27T23%3A21%3A43Z&sp=r&sv=2024-08-04&sr=b&scid=762c4d74-719f-5b90-b7cf-1cc6ed9d98e5&skoid=f28c0102-4d9d-4950-baf0-4a8e5f6cf9d4&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-27T20%3A20%3A43Z&ske=2025-08-28T20%3A20%3A43Z&sks=b&skv=2024-08-04&sig=qKphXzXn1812rbsKDLU11l5/yLwFLC7kbKE3VfmtowY%3D"
          tags={["Flutter", "Dart", "Firebase", "Dio", "Riverpod"]}
          title="Cine Flutter"
          description="Aplicativo de visualização de filmes por categorias e gêneros."
          url="https://github.com/JonasGz/cine-flutter"
        />
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
        {/* <Work
          key={crypto.randomUUID()}
          img="/assets/projects/loading.png"
          title="Em breve"
          description="..."
        /> */}
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
