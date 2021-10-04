import Contact from "../Contact";
import Home from "../Home";
import Nav from "../Nav";
import Presentation from "../Presentation";
import Projects from "../Projects";
import Skills from "../Skills";
import "./app.scss";
import { Route } from "react-router-dom";
import Footer from "../Footer";

function App() {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  return (
    <div className="app">
      <Nav />
      <Home />
      <Presentation />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
