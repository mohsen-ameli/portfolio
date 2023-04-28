"use client"

import Container from "@/components/ui/Container"
import Title from "@/components/ui/Title"
import { projectsList } from "./projectsList"
import Card from "./card"

const Projects = () => {
  return (
    <Container className="pt-24">
      <Title title="Projects" />

      {/* Cards */}
      {projectsList.map((proj, index) => {
        return (
          <Card
            key={index}
            img={proj.img}
            title={proj.title}
            url1={proj.url1}
            url2={proj.url2}
            body1={proj.body1}
            body2={proj.body2}
          />
        )
      })}
    </Container>
  )
}

export default Projects