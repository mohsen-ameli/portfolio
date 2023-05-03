import { RigidBody } from "@react-three/rapier"
import { DoubleSide } from "three"

const Floor = () => {
  return (
    <RigidBody
      type="fixed"
      position={[0, -2, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <mesh position={[0, -2, 0]} receiveShadow>
        <boxGeometry args={[20, 20, 0.1]} />
        <meshStandardMaterial
          color="purple"
          transparent
          opacity={0.3}
          side={DoubleSide}
        />
      </mesh>
    </RigidBody>
  )
}

export default Floor
