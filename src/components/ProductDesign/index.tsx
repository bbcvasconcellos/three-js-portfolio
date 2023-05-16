import { Canvas } from "@react-three/fiber"
import { OrbitControls, Stage } from "@react-three/drei"

import Phone from "./Phone";

export const ProductDesign = () => {
  return (
    <Canvas>
      <Stage environment="dawn" intensity={0.6}>
        <Phone />
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}