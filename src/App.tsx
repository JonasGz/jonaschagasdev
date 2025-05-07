import "./App.scss";
import { About } from "./components/about/about";
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
    </div>
  );
}

export default App;
