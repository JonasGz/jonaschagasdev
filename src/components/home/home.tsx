import { TypeAnimation } from "react-type-animation";
import { useTranslation } from "react-i18next";
import "./home.scss";

export const Home = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="home">
      <div className="home__content">
        <TypeAnimation
          key={`hello-${i18n.language}`}
          sequence={[t("home.hello"), 1000]}
          wrapper="span"
          className="home__hello"
          cursor={false}
          speed={10}
          repeat={0}
        />
        <TypeAnimation
          sequence={[1000, "Jonas Chagas", 1000]}
          wrapper="h1"
          className="home__name"
          cursor={false}
          speed={10}
          repeat={0}
        />
        <TypeAnimation
          key={`category-${i18n.language}`}
          sequence={[2000, t("home.category")]}
          wrapper="span"
          className="home__category"
          cursor={false}
          speed={10}
          repeat={0}
        />
        <a
          href="https://linkedin.com/in/jonas-chagas"
          target="_blank"
          className="home__button"
        >
          {t("home.linkedinButton")}
        </a>
      </div>
      <div className="home__rocket">
        <img src="/assets/rocket.svg" alt="rocket" title="rocket" />
      </div>
    </div>
  );
};
