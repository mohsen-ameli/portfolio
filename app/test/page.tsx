"use client"

import { OrbitControls } from "@react-three/drei"
import { Canvas, useThree } from "@react-three/fiber"
import {
  ConvexHullCollider,
  CuboidCollider,
  Physics,
  RapierRigidBody,
  RigidBody,
  RoundCuboidCollider,
} from "@react-three/rapier"
import { OrbitControls as OrbitControlType } from "three-stdlib/controls/OrbitControls"
import { BattleHammer, ModernHammer } from "./Hammer"
import Floor from "./Floor"
import { Text3DType } from "./Home.type"
import Letter3D from "./Letter3D"
import { useEffect, useRef, useState } from "react"
import { useSpring, a } from "@react-spring/three"
import { useDrag, useGesture } from "@use-gesture/react"
import { Vector3 } from "three"
import Stormtrooper from "./Stormtrooper"

const Test = () => {
  const [dpr, setDpr] = useState(1)
  const [width, setWidth] = useState(0)
  useEffect(() => {
    setDpr(Math.min(window.devicePixelRatio, 3))
    setWidth(window.innerWidth)
  }, [])

  const orbit = useRef<OrbitControlType>(null!)

  const orbitEnable = (newVal: boolean) => {
    orbit.current.enabled = newVal
  }

  const words: Text3DType[] = [
    { id: 0, text: "H", y: 0, z: -2, x: -6, scale: 0.5, color: "#FF5F1F" },
    { id: 1, text: "i", y: 0, z: -2, x: -5.4, scale: 0.5, color: "#FF5F1F" },
    { id: 2, text: ",", y: 0, z: -2, x: -5.1, scale: 0.5, color: "#FF5F1F" },
    { id: 3, text: "m", y: 0, z: -2, x: -4.5, scale: 0.5, color: "#FF5F1F" },
    { id: 4, text: "y", y: 0, z: -2, x: -3.85, scale: 0.5, color: "#FF5F1F" },
    { id: 5, text: "n", y: 0, z: -2, x: -2.75, scale: 0.5, color: "#FF5F1F" },
    { id: 6, text: "a", y: 0, z: -2, x: -2.28, scale: 0.5, color: "#FF5F1F" },
    { id: 7, text: "m", y: 0, z: -2, x: -1.85, scale: 0.5, color: "#FF5F1F" },
    { id: 8, text: "e", y: 0, z: -2, x: -1.15, scale: 0.5, color: "#FF5F1F" },
    { id: 9, text: "i", y: 0, z: -2, x: -0.25, scale: 0.5, color: "#FF5F1F" },
    { id: 10, text: "s", y: 0, z: -2, x: -0.05, scale: 0.5, color: "#FF5F1F" },

    { id: 11, text: "M", y: 0, z: -0.5, x: -6, scale: 1, color: "#FF5F1F" },
    { id: 12, text: "o", y: 0, z: -0.5, x: -4.65, scale: 1, color: "#e0f2fe" },
    { id: 13, text: "h", y: 0, z: -0.5, x: -3.8, scale: 1, color: "#e0f2fe" },
    { id: 14, text: "s", y: 0, z: -0.5, x: -2.8, scale: 1, color: "#e0f2fe" },
    { id: 15, text: "e", y: 0, z: -0.5, x: -2, scale: 1, color: "#e0f2fe" },
    { id: 16, text: "n", y: 0, z: -0.5, x: -1.15, scale: 1, color: "#e0f2fe" },
    { id: 17, text: "A", y: 0, z: -0.5, x: 0.5, scale: 1, color: "#FF5F1F" },
    { id: 18, text: "m", y: 0, z: -0.5, x: 1.6, scale: 1, color: "#e0f2fe" },
    { id: 19, text: "e", y: 0, z: -0.5, x: 2.95, scale: 1, color: "#e0f2fe" },
    { id: 20, text: "l", y: 0, z: -0.5, x: 3.75, scale: 1, color: "#e0f2fe" },
    { id: 21, text: "i", y: 0, z: -0.5, x: 4.3, scale: 1, color: "#e0f2fe" },
  ]

  return (
    <>
      <button
        className="text-white hover:cursor-pointer m-4 z-20 bg-indigo-400 rounded-lg p-2"
        onClick={() => {
          orbit.current.reset()
        }}
      >
        Reset Camera
      </button>
      <div className="w-full h-screen absolute -z-10 left-0 top-0">
        <Canvas
          camera={{
            position: [
              0,
              5, //width <= 425 ? 15 : 7,
              0, // 2
            ],
          }}
          shadows
          dpr={dpr}
        >
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[0, 1, 2]}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          <OrbitControls ref={orbit} />

          <Physics debug={true}>
            <Floor />
            <ModernHammer />
            <BattleHammer />
            {/* <Dodecahedron orbitEnable={orbitEnable} /> */}
            <Stormtrooper />

            {words.map(letter => (
              <Letter3D key={letter.id} letter={letter} />
            ))}
          </Physics>
        </Canvas>
      </div>
    </>
  )
}

const Dodecahedron = ({
  orbitEnable,
}: {
  orbitEnable: (newVal: boolean) => void
}) => {
  const { size, viewport } = useThree()
  const aspect = size.width / viewport.width

  const rigidBody = useRef<RapierRigidBody>(null)

  const [position, setPosition] = useState<[number, number, number]>()

  const [spring, springApi] = useSpring(() => ({
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    config: { friction: 10 },
  }))
  const bind = useGesture({
    onDrag: ({ dragging, offset: [x, y] }) => {
      if (!dragging) {
        orbitEnable(true)
        return
      }

      orbitEnable(false)
      springApi.start({
        position: [x / aspect, 0, y / aspect],
        rotation: [y / aspect, x / aspect, 0],
      })

      setPosition([x / aspect, 0, y / aspect])

      // rigidBody.current?.setTranslation(
      //   {
      //     x: x / factor,
      //     y: 0,
      //     z: y / factor,
      //   },
      //   true
      // )

      // rigidBody.current?.setRotation(
      //   {
      //     x: y / factor,
      //     y: x / factor,
      //     z: 0,
      //     w: 0,
      //   },
      //   true
      // )
    },
  })

  return (
    <>
      <RigidBody
        type="dynamic"
        colliders={false}
        ref={rigidBody}
        position={position}
      >
        {/* <ConvexHullCollider args={[1, 1, 1]} /> */}
        <CuboidCollider args={[1, 1, 1]} />
      </RigidBody>

      {/* @ts-ignore */}
      <a.mesh {...spring} {...bind()} castShadow>
        <dodecahedronBufferGeometry args={[1.4, 0]} />
        <meshNormalMaterial />
      </a.mesh>
    </>
  )
}

export default Test
