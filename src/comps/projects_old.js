import img1 from "../images/zarathustrust.jpg"
import img2 from "../images/screenshot1.png"
import img3 from "../images/cute_cat.png"

import { MdOutlineViewInAr } from "react-icons/md"
import { BsCodeSlash } from "react-icons/bs"
import { BsInfoCircle } from "react-icons/bs"

const Projects = () => {
  return (
    <div name="projects" className="w-full h-screen pt-32 px-4 max-w-[1000px] mx-auto text-white flex flex-col items-center">
      <h1 className="w-[10.5rem] py-2 text-5xl font-semibold border-b-4 border-[#FF5F1F]">Projects</h1>
      {/* <p className="py-6 font-thin">My projects that I've done over the years.</p> */}

      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* ZarathusTrust */}
        <div className="h-[300px] bg-cover bg-center bg-no-repeat bg-origin-content group rounded-lg" style={{ backgroundImage: `url(${img1})` }}>
          <div className="w-full h-full px-4 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 first-letter:z-20 bg-sky-800 rounded-lg">
            <h1 className="text-3xl text-[#FF5F1F]">ZarathusTrust</h1>
            <button className="w-full mt-4 py-2 flex items-center justify-center btn font-semibold text-[#FF5F1F] border-2 border-[#FF5F1F] rounded-lg hover:bg-[#FF5F1F] hover:text-white hover:scale-105 duration-150">
              <MdOutlineViewInAr className="mx-2" size={25} /> View Project
            </button>
            <button className="w-full mt-4 py-2 flex items-center justify-center btn font-semibold text-[#FF5F1F] border-2 border-[#FF5F1F] rounded-lg hover:bg-[#FF5F1F] hover:text-white hover:scale-105 duration-150">
              <BsCodeSlash className="mx-2" size={25} /> Source Code
            </button>
            <button className="w-full mt-4 py-2 flex items-center justify-center btn font-semibold text-[#FF5F1F] border-2 border-[#FF5F1F] rounded-lg hover:bg-[#FF5F1F] hover:text-white hover:scale-105 duration-150">
              <BsInfoCircle className="mx-2" size={25} /> More Info
            </button>
          </div>
        </div>
        
        {/* PersianEmpire */}
        <div className="h-[300px] bg-cover bg-start bg-no-repeat bg-origin-content group rounded-lg" style={{ backgroundImage: `url(${img2})` }}>
          <div className="w-full h-full px-4 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 first-letter:z-20 bg-sky-800 rounded-lg">
            <h1 className="text-3xl text-[#FF5F1F]">PersianEmpire</h1>
            <button className="w-full mt-4 py-2 flex items-center justify-center btn font-semibold text-[#FF5F1F] border-2 border-[#FF5F1F] rounded-lg hover:bg-[#FF5F1F] hover:text-white hover:scale-105 duration-150">
              <MdOutlineViewInAr className="mx-2" size={25} /> View Project
            </button>
            <button className="w-full mt-4 py-2 flex items-center justify-center btn font-semibold text-[#FF5F1F] border-2 border-[#FF5F1F] rounded-lg hover:bg-[#FF5F1F] hover:text-white hover:scale-105 duration-150">
              <BsCodeSlash className="mx-2" size={25} /> Source Code
            </button>
            <button className="w-full mt-4 py-2 flex items-center justify-center btn font-semibold text-[#FF5F1F] border-2 border-[#FF5F1F] rounded-lg hover:bg-[#FF5F1F] hover:text-white hover:scale-105 duration-150">
              <BsInfoCircle className="mx-2" size={25} /> More Info
            </button>
          </div>
        </div>
        
        {/* Randimalz */}
        <div className="h-[300px] bg-cover bg-center bg-no-repeat bg-origin-content group rounded-lg" style={{ backgroundImage: `url(${img3})` }}>
          <div className="w-full h-full px-4 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 first-letter:z-20 bg-sky-800 rounded-lg">
            <h1 className="text-3xl text-[#FF5F1F]">ZarathusTrust</h1>
            <button className="w-full mt-4 py-2 flex items-center justify-center btn font-semibold text-[#FF5F1F] border-2 border-[#FF5F1F] rounded-lg hover:bg-[#FF5F1F] hover:text-white hover:scale-105 duration-150">
              <MdOutlineViewInAr className="mx-2" size={25} /> View Project
            </button>
            <button className="w-full mt-4 py-2 flex items-center justify-center btn font-semibold text-[#FF5F1F] border-2 border-[#FF5F1F] rounded-lg hover:bg-[#FF5F1F] hover:text-white hover:scale-105 duration-150">
              <BsCodeSlash className="mx-2" size={25} /> Source Code
            </button>
            <button className="w-full mt-4 py-2 flex items-center justify-center btn font-semibold text-[#FF5F1F] border-2 border-[#FF5F1F] rounded-lg hover:bg-[#FF5F1F] hover:text-white hover:scale-105 duration-150">
              <BsInfoCircle className="mx-2" size={25} /> More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Projects;