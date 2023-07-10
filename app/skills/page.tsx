import { skillsList } from "./(stuff)/skillsList"
import SpringCard from "./(stuff)/springCard"
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
  )
}

export default Skills
