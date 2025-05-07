import "./App.scss";
import { About } from "./components/about/about";
import { Contacts } from "./components/contacts/contacts";
import { Experiences } from "./components/experiences/experiences";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { Technologies } from "./components/technologies/technologies";
import { Works } from "./components/works/works";

function App() {
  return (
    <div className="app">
      <Header />
      <section id="about">
        <About />
      </section>
      <section id="works" className="app__section">
        <div className="app__section-title">Trabalhos</div>
        <Works />
      </section>
      <section id="technologies" className="app__section">
        <div className="app__section-title">Tecnologias</div>
        <Technologies />
      </section>
      <section id="experiences" className="app__section">
        <div className="app__section-title">Experiências</div>
        <Experiences />
      </section>
      <section id="contacts" className="app__section">
        <div className="app__section-title">Contato</div>
        <Contacts />
      </section>
      <Footer />
    </div>
  );
}

export default App;
