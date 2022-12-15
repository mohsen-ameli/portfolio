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
          <Card img="/images/aws.png" name="Linux" />
        </motion.div>
        <motion.div className="origin-bottom" variants={topBottom}>
          <Card img="/images/css.png" name="Django" />
        </motion.div>
        <motion.div className="origin-top" variants={topBottom}>
          <Card img="/images/html.png" name="Python" />
        </motion.div>
        <motion.div className="origin-right" variants={leftRight}>
          <Card img="/images/javascript.png" name="CSS3" />
        </motion.div>
        <motion.div className="origin-top" variants={topBottom}>
          <Card img="/images/django.jpg" name="React" />
        </motion.div>
        <motion.div className="origin-bottom" variants={topBottom}>
          <Card img="/images/react.png" name="Java" />
        </motion.div>
        <motion.div className="origin-right" variants={leftRight}>
          <Card img="/images/tailwind.png" name="HTML5" />
        </motion.div>
        <motion.div className="origin-left" variants={leftRight}>
          <Card img="/images/github.png" name="Tailwind" />
        </motion.div>
        <motion.div className="origin-right" variants={leftRight}>
          <Card img="/images/python.png" name="Bootstrap" />
        </motion.div>
        <motion.div className="origin-top" variants={topBottom}>
          <Card img="/images/java.svg" name="Javascript" />
        </motion.div>
        <motion.div className="origin-left" variants={leftRight}>
          <Card img="/images/bootstrap.png" name="Github" />
        </motion.div>
        <motion.div className="origin-bottom" variants={topBottom}>
          <Card img="/images/linux.png" name="aws" />
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