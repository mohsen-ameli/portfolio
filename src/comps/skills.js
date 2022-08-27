import aws from "../images/aws.png"
import css from "../images/css.png"
import html from "../images/html.png"
import js from "../images/javascript.png"
import django from "../images/django2.jpg"
import react from "../images/react.png"
import tailwind from "../images/tailwind.png"
import github from "../images/github.png"
import python from "../images/python.png"
import java from "../images/java.svg"
import bootstrap from "../images/bootstrap.png"
import linux from "../images/linux.png"
import Container from "./container"
import Title from "./title"

import { motion } from "framer-motion"

const leftRight = {
  hidden: {
    opacity: 0,
    scaleX: 0,
  },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: { duration: 1 }
  }
}
const topBottom = {
  hidden: {
    opacity: 0,
    scaleY: 0,
  },
  visible: {
    opacity: 1,
    scaleY: 1,
    transition: { duration: 1 }
  }
}

const Skills = () => {
  return (
    <Container className="pt-20 pb-8 md:pb-2">
      <Title title="Skills" />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 select-none">
        <motion.div className="origin-left" variants={leftRight}>
          <Card img={linux} name="Linux" />
        </motion.div>
        <motion.div className="origin-bottom" variants={topBottom}>
          <Card img={django} name="Django" />
        </motion.div>
        <motion.div className="origin-top" variants={topBottom}>
          <Card img={python} name="Python" />
        </motion.div>
        <motion.div className="origin-right" variants={leftRight}>
          <Card img={css} name="CSS3" />
        </motion.div>
        <motion.div className="origin-top" variants={topBottom}>
          <Card img={react} name="React" />
        </motion.div>
        <motion.div className="origin-bottom" variants={topBottom}>
          <Card img={java} name="Java" />
        </motion.div>
        <motion.div className="origin-right" variants={leftRight}>
          <Card img={html} name="HTML5" />
        </motion.div>
        <motion.div className="origin-left" variants={leftRight}>
          <Card img={tailwind} name="Tailwind" />
        </motion.div>
        <motion.div className="origin-right" variants={leftRight}>
          <Card img={bootstrap} name="Bootstrap" />
        </motion.div>
        <motion.div className="origin-top" variants={topBottom}>
          <Card img={js} name="Javascript" />
        </motion.div>
        <motion.div className="origin-left" variants={leftRight}>
          <Card img={github} name="Github" />
        </motion.div>
        <motion.div className="origin-bottom" variants={topBottom}>
          <Card img={aws} name="aws" />
        </motion.div>
      </div>
    </Container>
  );
}

const Card = ({ img, name }) => {
  return (
    <motion.div className="py-4 px-12 mt-6 rounded-lg bg-sky-900 flex flex-col items-center"
      animate={{
        boxShadow: "0px 0px 10px 1px rgb(14, 165, 233)"
      }}
      whileHover={{
        scale: 1.05,
        transition: { repeat: Infinity, repeatType: "reverse", ease: "easeOut" }
      }}
    >
      <img className={"w-12 md:w-16 " + (name === "React" && "animate-[spin_5s_linear_infinite]")} src={img} alt="" />
      <p className={"text-lg md:text-xl font-thin uppercase " + (name === "Bootstrap" ? "mt-8" : "mt-4")}>{name}</p>
    </motion.div>
  )
}
 
export default Skills;