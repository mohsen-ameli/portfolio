import { useState } from "react";
import { BsList } from "react-icons/bs"
import { IoIosClose } from "react-icons/io"
import { Link } from "react-router-dom";
import logo from "../images/logo.png"

const Navbar = () => {
  const [nav, setNav] = useState(false)
  let toggle = () => setNav(!nav)

  return (
    <div className="w-full h-20 fixed top-0 bg-[#000033ed] text-white z-10 select-none">
      <nav className="flex items-center justify-between max-w-[1240px] mx-auto p-4 md:pt-4">
        <Link className="cursor-pointer" to="/">
          <img className="w-16" src={logo} alt="" />
        </Link>
        {!nav
        ? <BsList className="text-4xl md:hidden" onClick={toggle} />
        :  <IoIosClose className="text-5xl md:hidden z-20" onClick={toggle} />}

        <ul className="hidden md:flex items-center justify-center">
          <Link className="mx-12 my-4 text-lg cursor-pointer border-b-2 border-transparent ease-in-out duration-200 hover:border-[#FF5F1F]" to="/">Home</Link>
          <Link className="mx-12 my-4 text-lg cursor-pointer border-b-2 border-transparent ease-in-out duration-200 hover:border-[#FF5F1F]" to="/about">About</Link>
          <Link className="mx-12 my-4 text-lg cursor-pointer border-b-2 border-transparent ease-in-out duration-200 hover:border-[#FF5F1F]" to="/skills">Skills</Link>
          <Link className="mx-12 my-4 text-lg cursor-pointer border-b-2 border-transparent ease-in-out duration-200 hover:border-[#FF5F1F]" to="/projects">Projects</Link>
          <Link className="mx-12 my-4 text-lg cursor-pointer border-b-2 border-transparent ease-in-out duration-200 hover:border-[#FF5F1F]" to="/contact">Contact</Link>
        </ul>

        <ul className={nav ? "absolute top-0 left-0 h-screen w-screen md:hidden flex flex-col items-center justify-center bg-[#000033]" : "hidden"}>
          <li className="text-3xl cursor-pointer py-8">
            <Link onClick={toggle} to="/">Home</Link>
          </li>
          <li className="text-3xl cursor-pointer py-8">
            <Link onClick={toggle} to="/about">About</Link>
          </li>
          <li className="text-3xl cursor-pointer py-8">
            <Link onClick={toggle} to="/skills">Skills</Link>
          </li>
          <li className="text-3xl cursor-pointer py-8">
            <Link onClick={toggle} to="/projects">Projects</Link>
          </li>
          <li className="text-3xl cursor-pointer py-8">
            <Link onClick={toggle} to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
 
export default Navbar;