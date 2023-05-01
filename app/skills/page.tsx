"use client"

import { skillsList } from "./skillsList"
import SpringCard from "./springCard"
import Container from "@/components/Container"

/**
 * Main component
 */
const Skills = () => {
  return (
    <Container>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 select-none">
        {skillsList.map(skill => (
          <SpringCard key={skill.id} img={skill.img} name={skill.name} />
        ))}
      </div>
    </Container>
    // <div className="w-screen h-[600px]">
    //   <R3fCards />
    // </div>
  )
}

export default Skills
