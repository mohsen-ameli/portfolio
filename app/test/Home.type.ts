import { Mesh, MeshStandardMaterial } from "three"
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader"

export type GLTFResult = GLTF & {
  nodes: Record<string, Mesh>
  materials: Record<string, MeshStandardMaterial>
}

export type Text3DType = {
  id: number
  text: string
  y: number
  z: number
  x: number
  scale: number
  color: string
}
