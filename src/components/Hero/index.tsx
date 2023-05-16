import { Canvas } from "@react-three/fiber"
import { Navbar } from "../Navbar"
import { Button, Caption, Container, Description, Img, LeftSide, RightSide, Section, SphereContainer, Subsection, Title } from "./styles"
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei"

export const Hero = () => {

  return (
  <Section>
    <Navbar />
    <Container>
      <LeftSide>
        <Title>Think. Make. Solve.</Title>
        <Subsection>
          <Caption>What we do?</Caption>
          <Description>
            we enjoy creating delightful, human-centered digital experiences.
          </Description>
          <Button>Learn more</Button>
        </Subsection>
      </LeftSide>
      <RightSide>
        <SphereContainer>
        <Canvas>
          <OrbitControls 
            enableZoom={false} 
          />
          <ambientLight intensity={0.4}/>
          <directionalLight position={[3,2,1]} />
          <Sphere 
            args={[1, 100, 200]}
            scale={2.4}
          >
            <MeshDistortMaterial 
              color="#09011f"
              attach="material"
              distort={0.5}
              speed={2}
            />
          </Sphere>
        </Canvas>
        </SphereContainer>
        <Img 
          src="img/space-weim.png" 
          alt="A female weimaraner dog wearing a spacesuit in space"
        />
      </RightSide>
    </Container>
  </Section>
  )
}