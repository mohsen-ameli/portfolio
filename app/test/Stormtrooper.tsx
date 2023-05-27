import { ColladaLoader } from "three/examples/jsm/loaders/ColladaLoader"
import { useLoader } from "@react-three/fiber"
import { useEffect } from "react"
import { RigidBody } from "@react-three/rapier"

const StormtrooperURL = "/models/stormtrooper/stormtrooper.dae"

const Stormtrooper = () => {
  const trooper = useLoader(ColladaLoader, StormtrooperURL)

  useEffect(() => {
    trooper.scene.traverse(obj => {
      obj.castShadow = true
    })
  }, [trooper.scene])

  return (
    <RigidBody>
      <primitive object={trooper.scene} scale={0.5} position={[0, -1.5, 0]} />
    </RigidBody>
  )
}

export default Stormtrooper
