import styled from "styled-components";
import { OrderInfo } from "./OrderInfo";
import { PaymentButton } from "./PaymentButton";
import { HStack } from "./Stack";
import { OrderButton } from "./OrderButton";

export const SideBarBottom = () => {
  return (
    <>
      <Container>
        <OrderInfo />
        <HStack $gap={"10px"}>
          <OrderButton />
          <PaymentButton />
        </HStack>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
