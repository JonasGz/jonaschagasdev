import "./home.scss";

export const Home = () => {
  return (
    <div className="home">
      <div className="home__content">
        <span className="home__hello">Olá, eu sou</span>
        <h1 className="home__name">Jonas Chagas</h1>
        <span className="home__category">Engenheiro de Software</span>
        <a className="home__button">Acessar meu Linkedin</a>
      </div>
      <div className="home__rocket">
        <img src="/assets/rocket.svg" alt="rocket" title="rocket" />
      </div>
    </div>
  );
};
