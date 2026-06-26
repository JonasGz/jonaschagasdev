import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Tech } from "./components/tech/tech";
import "swiper/css";
import "swiper/css/navigation";
import "./technologies.scss";

const technologies = [
  { url: "/assets/icons/jsIcon.svg", name: "JavaScript" },
  { url: "/assets/icons/dartIcon.svg", name: "Dart" },
  { url: "/assets/icons/tsIcon.svg", name: "TypeScript" },
  { url: "/assets/icons/reactIcon.svg", name: "React" },
  { url: "/assets/icons/nextjsIcon.svg", name: "Nextjs" },
  { url: "/assets/icons/flutterIcon.svg", name: "Flutter" },
  { url: "/assets/icons/reactIcon.svg", name: "React Native" },
  { url: "/assets/icons/kotlinIcon.svg", name: "Kotlin" },
  { url: "/assets/icons/gitIcon.svg", name: "Git" },
];

export const Technologies = () => {
  return (
    <div className="technologies">
      <div className="technologies__bg"></div>

      <ChevronLeft
        size={28}
        className="technologies__btn technologies__btn--prev"
        color="white"
      />
      <Swiper
        className="technologies__items"
        modules={[Navigation]}
        navigation={{
          prevEl: ".technologies__btn--prev",
          nextEl: ".technologies__btn--next",
        }}
        spaceBetween={10}
        slidesPerView={4}
        grabCursor
        loop
        centerInsufficientSlides
        breakpoints={{
          768: {
            slidesPerView: "auto",
            spaceBetween: 16,
          },
        }}
      >
        {technologies.map((tech) => (
          <SwiperSlide key={tech.name} className="technologies__slide">
            <Tech url={tech.url} name={tech.name} />
          </SwiperSlide>
        ))}
      </Swiper>
      <ChevronRight
        size={28}
        className="technologies__btn technologies__btn--next"
        color="white"
      />
    </div>
  );
};
