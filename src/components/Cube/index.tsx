import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei"

export const Cube = () => {
  const textRef = useRef<THREE.Mesh>(null!);
  useFrame((state, delta) => 
    textRef.current.position.x = Math.sin(state.clock.elapsedTime));

  return (
    <mesh>
      <boxGeometry args={[2,2,2]}/>
      <meshLambertMaterial>
        <RenderTexture 
          attach="map" 
          sourceFile={[]}
        >
          <PerspectiveCamera 
            makeDefault
            position={[0,0,5]}
          />
          <color 
            attach="background" 
            args={["#8f118b"]}
          />
          <Text 
            fontSize={2.5} 
            color="#fff"
            ref={textRef}
          >
            Hello
          </Text>
        </RenderTexture>
      </meshLambertMaterial>
    </mesh>
  )
}