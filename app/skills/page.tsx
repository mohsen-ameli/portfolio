"use client"

import { motion } from "framer-motion"
import Title from "@/components/ui/Title"
import Container from "@/components/ui/Container"
import Card from "./card"
import { skillsList } from "./skillsList"

/**
 * Main component
 */
const Skills = () => {
  return (
    <Container>
      <Title title="Skills" />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 select-none">
        {skillsList.map(skill => (
          <motion.div
            key={skill.id}
            className={skill.className}
            variants={skill.variants}
          >
            <Card img={skill.img} name={skill.name} />
          </motion.div>
        ))}
      </div>
    </Container>
  )
}

export default Skills
