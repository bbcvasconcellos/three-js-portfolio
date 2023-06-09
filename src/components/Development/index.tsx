import { OrbitControls, Stage } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

import ReactLogo from "./React_logo"

export const Development = () => {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <ReactLogo />
      </Stage>
      <OrbitControls enableZoom={false} autoRotate/>
    </Canvas>
  )
}