"use client"

import { skillsList } from "./skillsList"
import { Canvas, ThreeEvent, useFrame, useThree } from "@react-three/fiber"
import { Image, Text } from "@react-three/drei"
import { Mesh } from "three"
import { useCallback, useEffect, useRef, useState } from "react"
import { Power0, Power2, gsap } from "gsap"

/**
 * Main component
 */

const LENGTH_X = 3.25
const LENGTH_Y = 2.25

const Skills = () => {
  const [dpr, setDpr] = useState(1)
  useEffect(() => setDpr(Math.min(window.devicePixelRatio, 3)), [])

  return (
    <div className="w-screen h-[600px]">
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
    </div>
  )
}

type CardProps = {
  index: number
  img: string
  name: string
}

const Card3d = ({ index, img, name }: CardProps) => {
  const { camera } = useThree()

  const ref = useRef<Mesh>(null!)

  const [id, setId] = useState(1)
  const [pos, setPos] = useState({
    x: 0,
    y: 0,
    z: 0,
  })

  const child = ref.current?.children[0]
  const isReact = child?.name === "React"

  // Animating the cards, and rotating the react icon
  useFrame(state => {
    const elapsed = state.clock.getElapsedTime()
    ref.current.position.y = pos.y + Math.sin(elapsed * 1.5) / 10

    if (isReact) child.rotation.z = elapsed
  })

  // When user leaves the card with their pointer device
  const handleLeave = () => {
    if (!ref.current) return

    gsap.to(ref.current.rotation, {
      x: 0,
      y: 0,
      ease: Power2.easeInOut,
    })
  }

  // Converts a range of values to a number between -0.5 and 0.5
  const mapValueToRange = (value: number, min: number, max: number) => {
    const newMin = -0.5
    const newMax = 0.5

    const newValue = ((value - min) / (max - min)) * (newMax - newMin) + newMin
    return newValue
  }

  // Handling the wobble of th cards
  const handleMove = (e: ThreeEvent<globalThis.PointerEvent>) => {
    if (!ref.current) return

    let minX
    let minY = 0

    if (id === 0) {
      minX = -6.118153772762372
    } else if (id === 1) {
      minX = -2.6191426295217757
    } else if (id === 2) {
      minX = 0.8936411995092197
    } else {
      minX = 4.382684913171167
    }

    if (index <= 3) {
      minY = 3.629456570205411
    } else if (index <= 7) {
      minY = 1.194472266564044
    } else {
      minY = -1.35305348963918
    }

    const maxX = minX + LENGTH_X
    const maxY = minY + LENGTH_Y

    const x = mapValueToRange(e.point.x, minX, maxX) * 0.5
    const y = mapValueToRange(e.point.y, minY, maxY) * 0.5 + 0.5

    gsap.to(ref.current.rotation, {
      x: -y,
      y: x,
      ease: Power0.easeOut,
    })
  }

  // WARNING: Heavy math in this component, for the resize to work
  // Getting the left most element's x value
  const handleResize = useCallback(() => {
    const w = window?.innerWidth
    let x = 0
    let y = 0
    let id_ = 0

    if (w <= 300) {
      x = 2
    } else if (w <= 600) {
      x = 4
    } else if (w <= 700) {
      x = -5
    } else if (w <= 800) {
      x = -5.5
    } else if (w <= 900) {
      x = -6
    } else if (w <= 1000) {
      x = -6.5
    } else {
      x = -6.9
    }

    // Have two cards
    if (w <= 600) {
      id_ = index % 2
      y =
        (w <= 450 ? 4 : 2.5) +
        (index <= 1
          ? 2.5
          : index <= 3
          ? 0
          : index <= 5
          ? -2.5
          : index <= 7
          ? -5
          : index <= 9
          ? -7.5
          : -10)
      x = -1.5 + ((x + 3) * (-id_ + 1)) / 2
      camera.position.z = w <= 450 ? 11 : 9
    }
    // Have three cards
    else if (w <= 1000) {
      id_ = index % 3
      y = 1 + (index <= 2 ? 2.5 : index <= 5 ? 0 : index <= 8 ? -2.5 : -5)
      x = ((x - 2) * (-id_ + 1)) / 2
      camera.position.z = 7
    }
    // Have four cards
    else {
      id_ = index % 4
      x = -1.1 + (x * (-id_ + 0.9)) / 2
      y = index <= 3 ? 2.4 : index <= 7 ? 0 : -2.4
      camera.position.z = 5
    }

    camera.updateProjectionMatrix()

    setPos({ x, y, z: 0 })
    setId(id_)
  }, [camera, index])

  // Resize stuff
  useEffect(() => {
    handleResize()
    window?.addEventListener("resize", handleResize)
    return () => window?.removeEventListener("resize", handleResize)
  }, [handleResize])

  return (
    <mesh
      ref={ref}
      position={[pos.x, pos.y, pos.z]}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      <meshBasicMaterial color="#0c4a6e" />
      {/* <boxGeometry args={[3.25, 2.25, 0.5]} /> */}
      <planeGeometry args={[LENGTH_X, LENGTH_Y]} />

      {/* eslint-disable */}
      <Image
        transparent
        url={img}
        name={name}
        position={[0, 0.3, 0.01]}
        scale={0.75}
      />
      <Text
        position={[0, -0.7, 0.01]}
        fontSize={0.35}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {name}
      </Text>
    </mesh>
  )
}

export default Skills
