"use client"

import Container from "@/components/Container"
import { projectsList } from "./projectsList"
import Card from "./card"

const Projects = () => {
  return (
    <Container>
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
