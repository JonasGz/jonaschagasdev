import "./App.scss";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { About } from "./components/about/about";
import { Contacts } from "./components/contacts/contacts";
import { Experiences } from "./components/experiences/experiences";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { Home } from "./components/home/home";
import { Lps } from "./components/lps/lps";
import { Technologies } from "./components/technologies/technologies";
import { Works } from "./components/works/works";

function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.title = t("meta.title");
  }, [t, i18n.language]);

  return (
    <div className="app">
      <Header />
      <section id="home" className="app__section app__home">
        <Home />
      </section>
      <section id="about" className="app__section app__about">
        <About />
      </section>
      <section id="works" className="app__section">
        <div className="app__section-title">{t("sections.worksTitle")}</div>
        <h2 className="app__section-subtitle">{t("sections.worksSubtitle")}</h2>
        <Works />
      </section>
      <section id="lps" className="app__section">
        <div className="app__section-title">{t("sections.lpsTitle")}</div>
        <h2 className="app__section-subtitle">{t("sections.lpsSubtitle")}</h2>
        <Lps />
      </section>
      <section id="technologies" className="app__section">
        <div className="app__section-title">{t("sections.techTitle")}</div>
        <h2 className="app__section-subtitle">{t("sections.techSubtitle")}</h2>
        <Technologies />
      </section>
      <section id="experiences" className="app__section">
        <div className="app__section-title">
          {t("sections.experiencesTitle")}
        </div>
        <h2 className="app__section-subtitle">
          {t("sections.experiencesSubtitle")}
        </h2>

        <Experiences />
      </section>
      <section id="contacts" className="app__section">
        <div className="app__section-title">{t("sections.contactsTitle")}</div>
        <h2 className="app__section-subtitle">
          {t("sections.contactsSubtitle")}
        </h2>

        <Contacts />
      </section>
      <Footer />
    </div>
  );
}

export default App;
