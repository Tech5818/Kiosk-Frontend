import styled from "styled-components";
import { Typography } from "./Typography";

export const PaymentButton = () => {
  return (
    <>
      <Container>
        <Typography size="LargeMenu" color="white">
          결제하기
        </Typography>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 14px;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  background: ${({ theme }) => theme.light.color.green};
  cursor: pointer;
  user-select: none;
`;
