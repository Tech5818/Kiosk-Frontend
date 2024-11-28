import styled from "styled-components";

export const ShoppingCartMenu = () => {
  return (
    <>
      <Container>
        <ShoppingCartMenu />
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 40px;
  height: 40px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.light.color.light_sub};
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.light.color.sub};
`;
