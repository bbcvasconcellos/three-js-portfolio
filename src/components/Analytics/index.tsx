import { Canvas } from "@react-three/fiber"
import { OrbitControls, Stage } from "@react-three/drei"

import AnalyticsChart from "./Analytics"


export const Analytics = () => {
  return (
    <Canvas>
      <Stage environment="studio" intensity={0.6}>
      <AnalyticsChart />
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}