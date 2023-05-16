import styled from "styled-components";

export const Section = styled.div`
  height: 100vh;
  padding: 0 8em;
  scroll-snap-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftSide = styled.div`
  flex: 1;
  height: 100vh;
`;

export const Img = styled.img``;

export const RightSide = styled.div`
  flex: 1;
  gap: 4rem;

  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
`;

export const Subsection = styled.div`
  display: flex;
  flex-direction: column;
  overflow-wrap: break-word;
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
  font-size: 1rem;
  color: lightgray;
`;

export const Button = styled.button`
  height: 2.2rem;
  width: 10rem;
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
