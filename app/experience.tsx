"use client"

import { Sparkles } from "@react-three/drei"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useState } from "react"
import { Vector3 } from "three"

const Experience = () => {
  return (
    <div className="w-screen h-screen absolute top-0 left-0 -z-10">
      <Canvas
        gl={{
          alpha: true,
          antialias: true,
        }}
        dpr={Math.min(window.devicePixelRatio, 3)}
      >
        <Experience0 />
      </Canvas>
    </div>
  )
}

const Experience0 = () => {
  const { camera } = useThree()

  const [center] = useState(new Vector3(0, 0, 0))

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime()
    const radius = 5
    const angle = time * 0.1
    const x = Math.sin(angle) * radius
    const z = Math.cos(angle) * radius
    camera.position.set(x, 0, z)
    camera.lookAt(center)
  })

  return <Sparkles count={1000} size={3} scale={20} />
}

export default Experience
