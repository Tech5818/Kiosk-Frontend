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
  padding: 12px;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: ${({ theme }) => theme.light.color.sub};
  justify-content: space-between;
  align-items: center;
`;

const Line = styled.div`
  width: 100%;
  height: 3px;
  background: ${({ theme }) => theme.light.color.white};
`;
