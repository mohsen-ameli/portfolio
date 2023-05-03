import React, { useEffect } from "react"
import { useGLTF } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier"
import { GLTFResult } from "./Home.type"

const ModernHammer = () => {
  const hammer = useGLTF("/models/hammer_of_dwarf.glb") as GLTFResult

  useEffect(() => {
    hammer.scene.traverse(obj => {
      obj.castShadow = true
    })
  }, [hammer.scene])

  return (
    <RigidBody
      colliders="hull"
      rotation={[-Math.PI / 2, 0, Math.PI * 0.2]}
      position={[-2, 2, -4]}
      scale={2.5}
      mass={5}
    >
      <primitive object={hammer.scene} />
    </RigidBody>
  )
}

const BattleHammer = () => {
  const hammer = useGLTF("/models/battle_hammer.glb") as GLTFResult

  useEffect(() => {
    hammer.scene.traverse(obj => {
      obj.castShadow = true
    })
  }, [hammer.scene])

  return (
    <RigidBody
      colliders="hull"
      rotation={[Math.PI / 2, 0, -Math.PI * 0.2]}
      position={[2, 5, -6]}
      scale={0.015}
      mass={5}
    >
      <primitive object={hammer.scene} />
    </RigidBody>
  )
}

useGLTF.preload("/models/battle_hammer.gltf")
useGLTF.preload("/models/hammer_of_dwarf.glb")

export { BattleHammer, ModernHammer }
