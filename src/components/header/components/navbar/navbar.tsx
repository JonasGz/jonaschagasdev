import "./navbar.scss";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState(window.location.hash);

  const isActive = (hash: string) => {
    return activeSection === hash;
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || "#home";
      setActiveSection(hash);
      if (hash === "#home") {
        window.scrollTo({
          top: 0,
        });
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <nav className="navbar">
      <ul className="navbar__content">
        <a
          href="#home"
          className={`navbar__item ${
            isActive("#home") ? "navbar__item--active" : ""
          }`}
        >
          <div
            className={`navbar__item__container ${
              isActive("#home") ? "navbar__item--active__container" : ""
            }`}
          >
            Início
          </div>
        </a>
        <a
          href="#about"
          className={`navbar__item ${
            isActive("#about") ? "navbar__item--active" : ""
          }`}
        >
          <div
            className={`navbar__item__container ${
              isActive("#about") ? "navbar__item--active__container" : ""
            }`}
          >
            Sobre mim
          </div>
        </a>
        <a
          href="#works"
          className={`navbar__item ${
            isActive("#works") ? "navbar__item--active" : ""
          }`}
        >
          <div
            className={`navbar__item__container ${
              isActive("#works") ? "navbar__item--active__container" : ""
            }`}
          >
            Projetos
          </div>
        </a>
        <a
          href="#technologies"
          className={`navbar__item ${
            isActive("#technologies") ? "navbar__item--active" : ""
          }`}
        >
          <div
            className={`navbar__item__container ${
              isActive("#technologies") ? "navbar__item--active__container" : ""
            }`}
          >
            Habilidades
          </div>
        </a>
        <a
          href="#experiences"
          className={`navbar__item ${
            isActive("#experiences") ? "navbar__item--active" : ""
          }`}
        >
          <div
            className={`navbar__item__container ${
              isActive("#experiences") ? "navbar__item--active__container" : ""
            }`}
          >
            Experiências
          </div>
        </a>
        <a
          href="#contacts"
          className={`navbar__item ${
            isActive("#contacts") ? "navbar__item--active" : ""
          }`}
        >
          <div
            className={`navbar__item__container ${
              isActive("#contacts") ? "navbar__item--active__container" : ""
            }`}
          >
            Contato
          </div>
        </a>
      </ul>
    </nav>
  );
};
