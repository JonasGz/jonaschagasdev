import "./navbar.scss";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__content">
        <li className="navbar__item--active">
          <div className="navbar__item--active__container">Início</div>
        </li>
        <li className="navbar__item">
          <div className="navbar__item__container">Sobre mim</div>
        </li>
        <li className="navbar__item">
          <div className="navbar__item__container">Projetos</div>
        </li>
        <li className="navbar__item">
          <div className="navbar__item__container">Habilidades</div>
        </li>
        <li className="navbar__item">
          <div className="navbar__item__container">Contato</div>
        </li>
      </ul>
    </nav>
  );
};
