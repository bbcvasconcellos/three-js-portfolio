import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 25px;
  padding: 15px 0;
  background: transparent;
`;

export const Links = styled.div``;
export const Logo = styled.img``;

export const List = styled.ul`
  display: flex;
  list-style: none;
  gap: 60px;
`;
export const ListItem = styled.li`
  cursor: pointer;
`;

export const Button = styled.button`
  height: 2.2rem;
  padding: 0 20px;
  border: none;
  border-radius: 5px;

  color: white;
  font-weight: bold;
  background-color: #8f118b;

  cursor: pointer;

  :hover {
    filter: brightness(0.8);
    transition: 0.3s;
  }
`;
