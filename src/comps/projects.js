import Container from "./container"
import Title from "./title"
import projectInfo from "./projectInfo"

import { MdOutlineViewInAr } from "react-icons/md"
import { BsCodeSlash } from "react-icons/bs"
import { useState } from "react"
import { motion } from "framer-motion"

const Projects = () => {
  return (
    <Container className="pt-24">
      <Title title="Projects" />

      {/* Cards */}
      {Object.keys(projectInfo).map((key, index) => {
        return (
          <Card
            key={index}
            img={projectInfo[key].img}
            title={projectInfo[key].title}
            url1={projectInfo[key].url1}
            url2={projectInfo[key].url2}
            body1={projectInfo[key].body1}
            body2={projectInfo[key].body2}
          />
        )
      })}

    </Container>
  )
}

const Card = ({ img, title, url1, url2, body1, body2 }) => {
  const [show, setShow] = useState(false)
  
  return (
    <motion.div className="w-full flex md:flex-row flex-col justify-between text-center rounded-lg bg-sky-900 text-white my-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
    >
      {/* Image */}
      <div className="md:w-1/2 h-[12rem] md:h-[23rem] bg-cover bg-center bg-no-repeat bg-origin-content group rounded-lg" 
      style={{ backgroundImage: `url(${img})` }}></div>
      <div className="self-center w-full py-4">
        {/* Tittle */}
        <h1 className="text-3xl font-semibold text-[#FF5F1F] px-4">{title}</h1>
        {/* Paragraph */}
        <p className="text-lg leading-relaxed p-4 select-text">
          {body1}
          <span className={!show ? "hidden ml-1" : "ml-1"}>
            {body2}
          </span>
          <button className="mx-2 px-1 text-sm btn text-[#FF5F1F] border-2 border-[#FF5F1F] rounded-sm hover:bg-[#FF5F1F] hover:text-white hover:scale-105 duration-150" onClick={() => setShow(!show)}>
            {!show ? "View More" : "View Less"}
          </button> 
        </p>
        {/* Buttons */}
        <div className="flex justify-center">
          <a href={url1} target="_blank" rel="noreferrer" className="cursor-pointer mt-4 py-2 px-4 mx-4 flex items-center justify-center btn font-semibold text-[#FF5F1F] border-2 border-[#FF5F1F] rounded-lg hover:bg-[#FF5F1F] hover:text-white hover:scale-105 duration-150">
            <MdOutlineViewInAr className="mx-2" size={25} /> View
          </a>
          <a href={url2} target="_blank" rel="noreferrer" className="cursor-pointer mt-4 py-2 px-4 mx-4 flex items-center justify-center btn font-semibold text-[#FF5F1F] border-2 border-[#FF5F1F] rounded-lg hover:bg-[#FF5F1F] hover:text-white hover:scale-105 duration-150">
            <BsCodeSlash className="mx-2" size={25} /> Code
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default Projects