import { useTranslation } from "react-i18next";
import "./about.scss";

export const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about">
      <div className="about__picture">
        <img title="picture" alt="picture" src="/assets/avatar.png" />
      </div>
      <div className="about__content">
        <h2 className="about__title">{t("about.title")}</h2>
        <div className="about__description">{t("about.description")}</div>
        {/* <a href="/assets/jonaschagascv.pdf" download className="about__button">
          Baixar currículo
        </a> */}
      </div>
    </div>
  );
};
