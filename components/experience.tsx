"use client"

import { Sparkles } from "@react-three/drei"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useEffect, useRef, useState } from "react"
import { BufferGeometry, Material, Points, Vector3 } from "three"

const ExperienceContainer = () => {
  const [dpr, setDpr] = useState(1)
  useEffect(() => setDpr(Math.min(window.devicePixelRatio, 3)), [])

  return (
    <div className="w-screen h-screen fixed top-0 left-0 -z-10">
      <Canvas
        gl={{
          alpha: true,
          antialias: true,
        }}
        dpr={dpr}
      >
        <Experience />
      </Canvas>
    </div>
  )
}

const Experience = () => {
  const { camera } = useThree()

  const sparkles = useRef<Points<BufferGeometry, Material | Material[]>>(null!)

  const [center] = useState(new Vector3(0, 0, 0))

  const scroll = useRef(0)

  const handleScroll = () => {
    scroll.current = window.scrollY / window.innerHeight
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  })

  useFrame(state => {
    const time = state.clock.getElapsedTime()
    const radius = 5
    const angle = time * 0.1
    const x = Math.sin(angle) * radius
    const z = Math.cos(angle) * radius
    camera.position.set(x, 0, z)
    camera.lookAt(center)

    sparkles.current.position.y = scroll.current
  })

  return <Sparkles ref={sparkles} count={1000} size={3} scale={20} />
}

export default ExperienceContainer
