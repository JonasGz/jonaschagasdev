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
          Desenvolvimento Mobile, trago disciplina, organização e capacidade de
          aprendizado rápido, habilidades desenvolvidas como Oficial do
          Exército, aplicadas agora no desenvolvimento de software. Busco
          oportunidades para crescer como Engenheiro de Software e contribuir
          com projetos desafiadores na área de tecnologia, com foco no
          desenvolvimento web e mobile.
        </div>
        {/* <a href="/assets/jonaschagascv.pdf" download className="about__button">
          Baixar currículo
        </a> */}
      </div>
    </div>
  );
};
