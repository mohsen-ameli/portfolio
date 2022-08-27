import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/logo.png"
import Btn from "./btn";
import { MenuToggle } from "./menuToggle";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = useState(false)
  let toggle = () => setNav(!nav)
  let navigate = useNavigate()

  return (
    <div className="w-full h-20 fixed top-0 bg-[#000033ed] text-white z-10 select-none">
      <nav className="flex items-center justify-between max-w-[1240px] mx-auto p-4 md:pt-4">
        {/* Logo */}
        <button className="cursor-pointer" onClick={() => navigate("/")}>
          <motion.img drag dragSnapToOrigin={true} className="w-16" src={logo} alt="" />
        </button>

        {/* Hamburger Menu */}
        <MenuToggle className="md:hidden p-4 z-20" toggle={() => toggle()} isOpen={nav} />

        {/* Desktop Navbar */}
        <ul className="hidden md:flex items-center justify-center">
          <Btn className="mx-12 my-4" text="Home" to="/" />
          <Btn className="mx-12 my-4" text="About" to="/about" />
          <Btn className="mx-12 my-4" text="Skills" to="/skills" />
          <Btn className="mx-12 my-4" text="Projects" to="/projects" />
          <Btn className="mx-12 my-4" text="Contact" to="/contact" />
        </ul>

        {/* Mobile Navbar */}
        <AnimatePresence mode="wait">
          {nav &&
            <motion.ul className="absolute md:hidden top-0 left-0 h-screen w-screen flex flex-col items-center justify-center bg-[#000033]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeInOut", duration: .2 }}
            >
              <motion.li className="text-3xl cursor-pointer py-8">
                <Link onClick={toggle} to="/">Home</Link>
              </motion.li>
              <motion.li className="text-3xl cursor-pointer py-8">
                <Link onClick={toggle} to="/about">About</Link>
              </motion.li>
              <motion.li className="text-3xl cursor-pointer py-8">
                <Link onClick={toggle} to="/skills">Skills</Link>
              </motion.li>
              <motion.li className="text-3xl cursor-pointer py-8">
                <Link onClick={toggle} to="/projects">Projects</Link>
              </motion.li>
              <motion.li className="text-3xl cursor-pointer py-8">
                <Link onClick={toggle} to="/contact">Contact</Link>
              </motion.li>
            </motion.ul>
          }
        </AnimatePresence>
      </nav>
    </div>
  );
}
 
export default Navbar;