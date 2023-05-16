import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Cube } from "../Cube";
import { Button, Caption, Description, LeftSide, RightSide, Section, Subsection, Title } from "./styles";

export const WhoAmI = () => {

  return (
  <Section>
    <LeftSide>
      <Canvas
        camera={{fov: 40, position: [5,5,5]}}
      >
        <OrbitControls 
          enableZoom={false} 
          autoRotate
          autoRotateSpeed={0.75}
        />
        <ambientLight intensity={0.4}/>
        <directionalLight position={[3,2,1]} />
        <Cube />
      </Canvas>
    </LeftSide>
    <RightSide>
      <Title>Think outside the square space</Title>
      <Subsection>
        <Caption>Who are we?</Caption>
        <Description>
          We are an inspired group of designers and developers with a passion for beautiful UI and great UX.
        </Description>
        <Button>See our works</Button>
      </Subsection>
    </RightSide>
  </Section>
  )
}