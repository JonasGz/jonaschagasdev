import "./App.scss";
import { About } from "./components/about/about";
import { Header } from "./components/header/header";

function App() {
  return (
    <div className="app">
      <Header />
      <About />
    </div>
  );
}

export default App;
