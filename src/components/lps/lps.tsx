import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useTranslation } from "react-i18next";
import { Lp } from "./components/lp/lp";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./lps.scss";

const lps = [
  {
    id: "nutriLu",
    img: "/assets/lps/lp-nutricionista-lu.webp",
    title: "Lu Pascoal Nutri",
    url: "https://www.lupascoalnutri.com.br/",
  },
  {
    id: "funding",
    img: "/assets/lps/funding-architect.webp",
    title: "Funding Architect",
    url: "https://produtos.anpei.org.br/funding-architect/",
  },
  {
    id: "olimpiadas",
    img: "/assets/lps/olimpiadas.webp",
    title: "Olimpíadas de Inovação",
    url: "https://produtos.anpei.org.br/olimpiadas/",
  },
  {
    id: "charitas",
    img: "/assets/lps/hub-charitas.webp",
    title: "Sou+ Hub Charitas",
    url: "https://habitaresa.com.br/empreendimentos/soumais/lp-hub-charitas/",
  },
  {
    id: "plowly",
    img: "/assets/lps/plowly.webp",
    title: "Plowly",
    url: "https://plowly.app/",
  },
];

export const Lps = () => {
  const { t } = useTranslation();

  return (
    <div className="lps">
      <div className="lps__bg"></div>
      <ChevronLeft
        size={28}
        className="lps__btn lps__btn--prev"
        color="white"
      />
      <Swiper
        className="lps__items"
        modules={[Navigation, Pagination]}
        navigation={{
          prevEl: ".lps__btn--prev",
          nextEl: ".lps__btn--next",
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
        {lps.map((lp) => (
          <SwiperSlide key={lp.title} className="lps__slide">
            <Lp
              img={lp.img}
              tags={[t(`lps.${lp.id}.category`)]}
              title={lp.title}
              description={t(`lps.${lp.id}.description`)}
              url={lp.url}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <ChevronRight
        size={28}
        className="lps__btn lps__btn--next"
        color="white"
      />
    </div>
  );
};
