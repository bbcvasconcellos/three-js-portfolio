import styled from "styled-components";

export const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
`;

export const LeftSide = styled.div`
  flex: 4;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60%;

  gap: 1.5rem;
`;

export const Title = styled.h4`
  font-size: 1.5rem;
  font-weight: 400;
  color: lightgray;
`;

export const Input = styled.input`
  padding: 20px;
  border-style: none;
  border-radius: 5px;
  height: 2.5rem;
`;

export const TextArea = styled.textarea`
  padding: 20px;
  resize: none;
  border-radius: 5px;
  border-style: none;
`;

export const Button = styled.button`
  height: 2.5rem;
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
  flex: 3;
  height: 100vh;
`;
