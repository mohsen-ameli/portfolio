"use client"

import { Sparkles } from "@react-three/drei"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useEffect, useState } from "react"
import { Vector3 } from "three"

const Experience = () => {
  const [dpr, setDpr] = useState(1)
  useEffect(() => setDpr(Math.min(window.devicePixelRatio, 3)), [])

  return (
    <div className="w-screen h-screen absolute top-0 left-0 -z-10">
      <Canvas
        gl={{
          alpha: true,
          antialias: true,
        }}
        dpr={dpr}
      >
        <Experience0 />
      </Canvas>
    </div>
  )
}

const Experience0 = () => {
  const { camera } = useThree()

  const [center] = useState(new Vector3(0, 0, 0))

  useFrame(state => {
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
