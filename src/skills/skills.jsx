import Container from "../comps/container"
import Title from "../comps/title"

import { motion } from "framer-motion"

// Horizontal animation
const horizontal = {
  hidden: {
    opacity: 0,
    scaleX: 0,
  },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: { duration: 1 },
  },
}

// Vertical animation
const vertical = {
  hidden: {
    opacity: 0,
    scaleY: 0,
  },
  visible: {
    opacity: 1,
    scaleY: 1,
    transition: { duration: 1 },
  },
}

/**
 * Main component
 */
const Skills = () => {
  return (
    <Container className="pt-20 pb-8 md:pb-2">
      {/* Title */}
      <Title title="Skills" />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 select-none">
        <motion.div className="origin-left" variants={horizontal}>
          <Card img="/images/skills/linux.png" name="Linux" />
        </motion.div>
        <motion.div className="origin-bottom" variants={vertical}>
          <Card img="/images/skills/django.jpg" name="Django" />
        </motion.div>
        <motion.div className="origin-top" variants={vertical}>
          <Card img="/images/skills/python.png" name="Python" />
        </motion.div>
        <motion.div className="origin-right" variants={horizontal}>
          <Card img="/images/skills/java.svg" name="Java" />
        </motion.div>
        <motion.div className="origin-top" variants={vertical}>
          <Card img="/images/skills/html.png" name="HTML5" />
        </motion.div>
        <motion.div className="origin-bottom" variants={vertical}>
          <Card img="/images/skills/css.png" name="CSS3" />
        </motion.div>
        <motion.div className="origin-right" variants={horizontal}>
          <Card img="/images/skills/bootstrap.png" name="Bootstrap" />
        </motion.div>
        <motion.div className="origin-left" variants={horizontal}>
          <Card img="/images/skills/tailwind.png" name="Tailwind" />
        </motion.div>
        <motion.div className="origin-right" variants={horizontal}>
          <Card img="/images/skills/react.png" name="React" />
        </motion.div>
        <motion.div className="origin-top" variants={vertical}>
          <Card img="/images/skills/blender.png" name="Blender" />
        </motion.div>
        <motion.div className="origin-bottom" variants={vertical}>
          <Card img="/images/skills/threejs.png" name="THREE.js" />
        </motion.div>
        <motion.div className="origin-left" variants={horizontal}>
          <Card img="/images/skills/github.png" name="Github" />
        </motion.div>
      </div>
    </Container>
  )
}

const Card = ({ img, name }) => {
  return (
    <motion.div
      className="py-4 px-12 mt-6 rounded-lg bg-sky-900 flex flex-col items-center"
      animate={{
        boxShadow: "0px 0px 10px 1px rgb(14, 165, 233)",
      }}
      whileHover={{
        scale: 1.05,
        transition: {
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeOut",
        },
      }}
    >
      <img
        className={
          "w-12 md:w-16 " +
          (name === "React" && "animate-[spin_5s_linear_infinite]")
        }
        src={img}
        alt=""
      />
      <p
        className={
          "text-lg md:text-xl font-thin uppercase " +
          (name === "Bootstrap" ? "mt-8" : "mt-4")
        }
      >
        {name}
      </p>
    </motion.div>
  )
}

export default Skills
