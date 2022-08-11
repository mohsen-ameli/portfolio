import { useState } from "react";
import { BsList } from "react-icons/bs"
import { IoIosClose } from "react-icons/io"
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false)

  return (
    <div className="w-full h-20 sticky top-0">
      <nav className="flex items-center justify-between max-w-[1240px] mx-auto p-4 md:pt-4 text-white">
        <h1 className="text-xl text-[#FF5F1F]">MOE PORT</h1>
        {!nav
        ? <BsList className="text-3xl md:hidden" onClick={() => setNav(!nav)} />
        :  <IoIosClose className="text-3xl z-10 md:hidden" onClick={() => setNav(!nav)} />}

        <ul className="hidden md:flex items-center justify-center">
          <Link className="mx-8 text-lg cursor-pointer p-4 border-b-2 border-transparent ease-in-out duration-200 hover:border-[#FF5F1F]" to="home" smooth={true} offset={-100} duration={500}>Home</Link>
          <Link className="mx-8 text-lg cursor-pointer p-4 border-b-2 border-transparent ease-in-out duration-200 hover:border-[#FF5F1F]" to="about" smooth={true} offset={-100} duration={500}>About</Link>
          <Link className="mx-8 text-lg cursor-pointer p-4 border-b-2 border-transparent ease-in-out duration-200 hover:border-[#FF5F1F]" to="skills" smooth={true} offset={-100} duration={500}>Skills</Link>
          <Link className="mx-8 text-lg cursor-pointer p-4 border-b-2 border-transparent ease-in-out duration-200 hover:border-[#FF5F1F]" to="projects" smooth={true} offset={-100} duration={500}>Projects</Link>
          <Link className="mx-8 text-lg cursor-pointer p-4 border-b-2 border-transparent ease-in-out duration-200 hover:border-[#FF5F1F]" to="contact" smooth={true} offset={-100} duration={500}>Contact</Link>
        </ul>

        <ul className={nav ? "absolute top-0 left-0 h-screen w-screen md:hidden flex flex-col items-center justify-center bg-[#000033]" : "hidden"}>
          <li className="text-3xl cursor-pointer py-8">
            <Link to="home" smooth={true} offset={-100} duration={500}>Home</Link>
          </li>
          <li className="text-3xl cursor-pointer py-8">
            <Link to="about" smooth={true} offset={-100} duration={500}>About</Link>
          </li>
          <li className="text-3xl cursor-pointer py-8">
            <Link to="skills" smooth={true} offset={-100} duration={500}>Skills</Link>
          </li>
          <li className="text-3xl cursor-pointer py-8">
            <Link to="projects" smooth={true} offset={-100} duration={500}>Projects</Link>
          </li>
          <li className="text-3xl cursor-pointer py-8">
            <Link to="contact" smooth={true} offset={-100} duration={500}>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
 
export default Navbar;