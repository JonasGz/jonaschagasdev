import "./about.scss";

export const About = () => {
  return (
    <div className="about">
      <div className="about__picture">
        <img title="picture" alt="picture" src="/assets/avatar.png" />
      </div>
      <div className="about__content">
        <h2 className="about__title">Sobre mim</h2>
        <div className="about__description">
          Formado em Análise e Desenvolvimento de Sistemas e pós-graduado em
          Desenvolvimento Mobile, combino minha experiência em liderança,
          disciplina, gestão de equipes e projetos adquiridas como Oficial do
          Exército com habilidades técnicas para desenvolver soluções de
          software eficientes e inovadoras. Comprometido com a excelência, busco
          contribuir com projetos desafiadores e de alto impacto na área de
          tecnologia, consolidando minha carreira como Engenheiro de Software.
        </div>
        <a href="/assets/jonaschagascv.pdf" download className="about__button">
          Baixar currículo
        </a>
      </div>
    </div>
  );
};
