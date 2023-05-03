"use client"

import { OrbitControls, OrbitControlsProps } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Physics } from "@react-three/rapier"
import { OrbitControls as OrbitControlType } from "three-stdlib/controls/OrbitControls"
import { BattleHammer, ModernHammer } from "./Hammer"
import Floor from "./Floor"
import { Text3DType } from "./Home.type"
import Letter3D from "./Letter3D"
import { useRef } from "react"

const Test = () => {
  const orbit = useRef<OrbitControlType>(null!)

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
            position: [0, window.innerWidth <= 425 ? 15 : 7, 2],
          }}
          shadows
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, 1, 1]} castShadow />
          <OrbitControls ref={orbit} />

          <Physics debug={false}>
            <Floor />
            <ModernHammer />
            <BattleHammer />

            {words.map(letter => (
              <Letter3D key={letter.id} letter={letter} />
            ))}
          </Physics>
        </Canvas>
      </div>
    </>
  )
}

export default Test
