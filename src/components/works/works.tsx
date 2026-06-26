import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Work } from "./components/work/work";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./works.scss";

const works = [
  {
    img: "/assets/projects/cineflutter.png",
    tags: ["Flutter", "Dart", "Firebase", "Dio", "Riverpod", "Clean Architecture"],
    title: "Cine Flutter",
    description: "Aplicativo de visualização de filmes por categorias e gêneros.",
    url: "https://github.com/JonasGz/cine-flutter",
  },
  {
    img: "/assets/projects/petdex.png",
    tags: ["JavaScript", "HTML", "SCSS", "Firebase"],
    title: "PetDex",
    description: "Aplicativo que transforma a experiência de ser tutor de pets.",
    url: "https://petdex.vercel.app",
  },
  {
    img: "/assets/projects/schedule.png",
    tags: ["React", "Nextjs", "PWA", "Firebase"],
    title: "Schedule App",
    description: "Aplicativo PWA de agendamento de tarefas.",
    url: "https://schedulepwa.vercel.app",
  },
  {
    img: "/assets/projects/map-marker.png",
    tags: ["React Native", "RN Maps", "Firebase", "Expo"],
    title: "Map Marker",
    description: "Aplicativo para marcações de localizações em mapa.",
    url: "https://github.com/JonasGz/map-marker-react-native",
  },
  {
    img: "/assets/projects/fuel.png",
    tags: ["Flutter", "Dart", "Firebase"],
    title: "Abast Control",
    description: "Aplicativo para controle de abastecimentos de combustíveis.",
    url: "https://github.com/JonasGz/abast_control",
  },
  {
    img: "/assets/projects/foodcontrol.png",
    tags: ["Flutter", "Dart", "Firebase"],
    title: "Food Control",
    description: "Aplicativo para controle financeiro de alimentação.",
    url: "https://github.com/JonasGz/food-finance-control",
  },
];

export const Works = () => {
  return (
    <div className="works">
      <div className="works__bg"></div>
      <ChevronLeft
        size={28}
        className="works__btn works__btn--prev"
        color="white"
      />
      <Swiper
        className="works__items"
        modules={[Navigation, Pagination]}
        navigation={{
          prevEl: ".works__btn--prev",
          nextEl: ".works__btn--next",
        }}
        pagination={{ clickable: true }}
        spaceBetween={24}
        slidesPerView={1}
        loop
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 32,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 32,
          },
        }}
      >
        {works.map((work) => (
          <SwiperSlide key={work.title} className="works__slide">
            <Work
              img={work.img}
              tags={work.tags}
              title={work.title}
              description={work.description}
              url={work.url}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <ChevronRight
        size={28}
        className="works__btn works__btn--next"
        color="white"
      />
    </div>
  );
};
