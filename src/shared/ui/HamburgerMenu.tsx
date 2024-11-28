import styled from "styled-components";

export const HamburgerMenu = () => {
  return (
    <>
      <Container>
        <Line />
        <Line />
        <Line />
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 12px;
  width: 50px;
  height: 50px;
  border-radius: 15px;
  background: ${({ theme }) => theme.light.color.sub};
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

const Line = styled.div`
  width: 100%;
  height: 4px;
  border-radius: 15px;
  background: ${({ theme }) => theme.light.color.white};
`;
