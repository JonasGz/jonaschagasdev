import "./App.scss";
import { About } from "./components/about/about";
import { Header } from "./components/header/header";
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
    </div>
  );
}

export default App;
