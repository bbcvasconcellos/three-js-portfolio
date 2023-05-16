import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";

import WebDev from "./Web_dev";

export const WebDesign = () => {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <WebDev />
      </Stage>
      <OrbitControls enableZoom={false} />

    </Canvas>
  )
}