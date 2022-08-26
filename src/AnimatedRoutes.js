import Home from "./comps/home";
import About from "./comps/about";
import Skills from "./comps/skills";
import Projects from "./comps/projects";
import Contact from "./comps/contact";
import { Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}
 
export default AnimatedRoutes;