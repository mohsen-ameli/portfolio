import { useState } from "react";
import { BsList } from "react-icons/bs"
import { IoIosClose } from "react-icons/io"
import { Link } from "react-scroll";
import logo from "../images/logo.png"

const Navbar = () => {
  const [nav, setNav] = useState(false)
  let toggle = () => setNav(!nav)

  return (
    <div className="w-full h-20 fixed top-0 bg-[#000033ed] text-white z-10 select-none">
      <nav className="flex items-center justify-between max-w-[1240px] mx-auto p-4 md:pt-4">
        <Link className="cursor-pointer" to="home" smooth={true} offset={-100} duration={500}>
          <img className="w-16" src={logo} alt="" />
        </Link>
        {!nav
        ? <BsList className="text-4xl md:hidden" onClick={toggle} />
        :  <IoIosClose className="text-5xl md:hidden z-20" onClick={toggle} />}

        <ul className="hidden md:flex items-center justify-center">
          <Link className="mx-12 my-4 text-lg cursor-pointer border-b-2 border-transparent ease-in-out duration-200 hover:border-[#FF5F1F]" to="home" smooth={true} offset={-100} duration={500}>Home</Link>
          <Link className="mx-12 my-4 text-lg cursor-pointer border-b-2 border-transparent ease-in-out duration-200 hover:border-[#FF5F1F]" to="about" smooth={true} offset={0} duration={500}>About</Link>
          <Link className="mx-12 my-4 text-lg cursor-pointer border-b-2 border-transparent ease-in-out duration-200 hover:border-[#FF5F1F]" to="skills" smooth={true} offset={150} duration={500}>Skills</Link>
          <Link className="mx-12 my-4 text-lg cursor-pointer border-b-2 border-transparent ease-in-out duration-200 hover:border-[#FF5F1F]" to="projects" smooth={true} offset={100} duration={500}>Projects</Link>
          <Link className="mx-12 my-4 text-lg cursor-pointer border-b-2 border-transparent ease-in-out duration-200 hover:border-[#FF5F1F]" to="contact" smooth={true} offset={100} duration={500}>Contact</Link>
        </ul>

        <ul className={nav ? "absolute top-0 left-0 h-screen w-screen md:hidden flex flex-col items-center justify-center bg-[#000033]" : "hidden"}>
          <li className="text-3xl cursor-pointer py-8">
            <Link onClick={toggle} to="home" smooth={true} offset={-100} duration={500}>Home</Link>
          </li>
          <li className="text-3xl cursor-pointer py-8">
            <Link onClick={toggle} to="about" smooth={true} offset={0} duration={500}>About</Link>
          </li>
          <li className="text-3xl cursor-pointer py-8">
            <Link onClick={toggle} to="skills" smooth={true} offset={150} duration={500}>Skills</Link>
          </li>
          <li className="text-3xl cursor-pointer py-8">
            <Link onClick={toggle} to="projects" smooth={true} offset={100} duration={500}>Projects</Link>
          </li>
          <li className="text-3xl cursor-pointer py-8">
            <Link onClick={toggle} to="contact" smooth={true} offset={100} duration={500}>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
 
export default Navbar;