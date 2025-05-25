import "./App.scss";
import { About } from "./components/about/about";
import { Contacts } from "./components/contacts/contacts";
import { Experiences } from "./components/experiences/experiences";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { Home } from "./components/home/home";
import { Technologies } from "./components/technologies/technologies";
import { Works } from "./components/works/works";

function App() {
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
        <div className="app__section-title">Trabalhos</div>
        <h2 className="app__section-subtitle">Meus projetos</h2>
        <Works />
      </section>
      <section id="technologies" className="app__section">
        <div className="app__section-title">Tecnologias</div>
        <h2 className="app__section-subtitle">Habilidades</h2>
        <Technologies />
      </section>
      <section id="experiences" className="app__section">
        <div className="app__section-title">Trabalhos</div>
        <h2 className="app__section-subtitle">Experiências</h2>

        <Experiences />
      </section>
      <section id="contacts" className="app__section">
        <div className="app__section-title">Contato</div>
        <h2 className="app__section-subtitle">Fale comigo</h2>

        <Contacts />
      </section>
      <Footer />
    </div>
  );
}

export default App;
