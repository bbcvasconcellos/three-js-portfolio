import styled from "styled-components";

export const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  padding: 0 8em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftSide = styled.div`
  flex: 2;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const ListItem = styled.li`
  font-size: 5.5rem;
  font-weight: 900;
  color: transparent;
  -webkit-text-stroke: 1px white;
  cursor: pointer;
  position: relative;

  ::after {
    position: absolute;
    top: 0;
    left: 0;
    content: "${(props) => props.title}";
    width: 0;
    overflow: hidden;
    white-space: nowrap;
    color: #8f118b;
  }

  :hover {
    ::after {
      animation: moveText 0.7s linear both;

      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;

export const RightSide = styled.div`
  flex: 1;
  height: 100vh;
  position: relative;
`;

export const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;
