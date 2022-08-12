import Navbar from "./comps/navbar";
import Home from "./comps/home";
import About from "./comps/about";
import Skills from "./comps/skills";
import Projects from "./comps/projects";
import Contact from "./comps/contact";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      {/* <Projects /> */}
      <Projects />
      <Contact />
    </>
  );
}

export default App;
