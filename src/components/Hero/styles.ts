import styled from "styled-components";

export const Section = styled.div`
  height: 100vh;
  padding: 0 8em;
  scroll-snap-align: center;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: -5rem;
`;

export const LeftSide = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;

  gap: 4rem;
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  overflow-wrap: break-word;
`;

export const Subsection = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;
`;

export const Caption = styled.h6`
  font-size: 1.2rem;
  color: #8f118b;
  ::before {
    color: white;
    content: "- ";
  }
`;

export const Description = styled.p`
  color: lightgray;
  font-size: 1rem;
`;

export const Button = styled.button`
  height: 2.5rem;
  width: 12rem;
  padding: 0 20px;
  border: none;
  border-radius: 5px;

  color: white;
  font-weight: bold;
  background-color: #8f118b;

  :hover {
    filter: brightness(0.8);
    transition: 0.3s;
    cursor: pointer;
  }
`;

export const RightSide = styled.div`
  position: relative;
  flex: 3;
  height: 100vh;
`;

export const SphereContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const Img = styled.img`
  width: 35vw;
  border-radius: 50%;
  animation: animate 2s infinite ease alternate;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  object-fit: contain;
  margin: auto;

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;
