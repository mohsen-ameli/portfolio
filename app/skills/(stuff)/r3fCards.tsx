import { Canvas } from "@react-three/fiber"
import Card3d from "./card3d"
import { useEffect, useState } from "react"
import { skillsList } from "./skillsList"

const R3fCards = () => {
  const [dpr, setDpr] = useState(1)
  useEffect(() => setDpr(Math.min(window.devicePixelRatio, 3)), [])

  return (
    <Canvas
      gl={{
        alpha: true,
        antialias: true,
      }}
      dpr={dpr}
    >
      {skillsList.map(skill => (
        <Card3d
          key={skill.id}
          index={skill.id}
          img={skill.img}
          name={skill.name}
        />
      ))}
    </Canvas>
  )
}

export default R3fCards
