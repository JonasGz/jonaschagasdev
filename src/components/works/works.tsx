import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useTranslation } from "react-i18next";
import { Work } from "./components/work/work";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./works.scss";

const works = [
  {
    id: "cineflutter",
    img: "/assets/projects/cineflutter.png",
    tags: ["Flutter", "Dart", "Firebase", "Dio", "Riverpod", "Clean Architecture"],
    title: "Cine Flutter",
    url: "https://github.com/JonasGz/cine-flutter",
  },
  {
    id: "petdex",
    img: "/assets/projects/petdex.png",
    tags: ["JavaScript", "HTML", "SCSS", "Firebase"],
    title: "PetDex",
    url: "https://petdex.vercel.app",
  },
  {
    id: "schedule",
    img: "/assets/projects/schedule.png",
    tags: ["React", "Nextjs", "PWA", "Firebase"],
    title: "Schedule App",
    url: "https://schedulepwa.vercel.app",
  },
  {
    id: "mapmarker",
    img: "/assets/projects/map-marker.png",
    tags: ["React Native", "RN Maps", "Firebase", "Expo"],
    title: "Map Marker",
    url: "https://github.com/JonasGz/map-marker-react-native",
  },
  {
    id: "abastcontrol",
    img: "/assets/projects/fuel.png",
    tags: ["Flutter", "Dart", "Firebase"],
    title: "Abast Control",
    url: "https://github.com/JonasGz/abast_control",
  },
  {
    id: "foodcontrol",
    img: "/assets/projects/foodcontrol.png",
    tags: ["Flutter", "Dart", "Firebase"],
    title: "Food Control",
    url: "https://github.com/JonasGz/food-finance-control",
  },
];

export const Works = () => {
  const { t } = useTranslation();

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
              description={t(`works.${work.id}.description`)}
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
