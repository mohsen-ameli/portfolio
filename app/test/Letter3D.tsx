import { RigidBody } from "@react-three/rapier"
import { Text3DType } from "./Home.type"
import { Text3D } from "@react-three/drei"
import font from "../../public/fonts/Roboto_Slab_Regular2.json"

const Letter3D = ({ letter }: { letter: Text3DType }) => {
  return (
    <RigidBody
      key={letter.id}
      position={[letter.x, letter.y, letter.z]}
      rotation-x={-Math.PI / 2}
      scale={letter.scale}
    >
      {/* @ts-ignore */}
      <Text3D font={font} castShadow>
        {letter.text}
        <meshStandardMaterial color={letter.color} />
      </Text3D>
    </RigidBody>
  )
}

export default Letter3D
