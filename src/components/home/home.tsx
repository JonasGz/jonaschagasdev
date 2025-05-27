import { TypeAnimation } from "react-type-animation";
import "./home.scss";

export const Home = () => {
  return (
    <div className="home">
      <div className="home__content">
        <TypeAnimation
          sequence={["Olá, eu sou", 1000]}
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
          sequence={[2000, "Engenheiro de Software"]}
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
          Acessar meu Linkedin
        </a>
      </div>
      <div className="home__rocket">
        <img src="/assets/rocket.svg" alt="rocket" title="rocket" />
      </div>
    </div>
  );
};
