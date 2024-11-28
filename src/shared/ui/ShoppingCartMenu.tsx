import styled from "styled-components";
import { ShoppingCartIcon } from "./ShoppingCartIcon";

export const ShoppingCartMenu = () => {
  return (
    <>
      <Container>
        <ShoppingCartIcon />
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 50px;
  height: 50px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.light.color.light_sub};
  border-radius: 15px;
  border: 2px solid ${({ theme }) => theme.light.color.sub};
`;
