import styled from "styled-components";
import { ShoppingCartIcon } from "./ShoppingCartIcon";
import { useSideBar } from "@shared/model/SideBar";

export const ShoppingCartMenu = () => {
  const { setOpen, open } = useSideBar((state) => state);

  return (
    <>
      <Container
        onClick={() => {
          setOpen(!open);
        }}
      >
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
