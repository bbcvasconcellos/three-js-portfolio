import styled from "styled-components";

import { Hero } from "./components/Hero";
import { Contact } from "./components/Contact";
import { WhoAmI } from "./components/WhoAmI";
import { Portfolio } from "./components/Portfolio";

import GlobalStyles from "./global/globalStyles";

function App() {
  const Container = styled.div`
    height: 100vh;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    overflow-y: auto;
    scrollbar-width: none;
    color: white;
    background: linear-gradient(60deg, #53e1f8, #010051);

    &::-webkit-scrollbar {
      display: none;
    }`;
 

  return (
    <>
      <GlobalStyles />
      <Container>
        <Hero />
        <WhoAmI />
        <Portfolio />
        <Contact />
      </Container>
    </>
    
  )
}

export default App
