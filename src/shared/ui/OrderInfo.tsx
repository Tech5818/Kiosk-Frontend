import styled from "styled-components";
import { HStack, VStack } from "./Stack";
import { Typography } from "./Typography";

export const OrderInfo = () => {
  return (
    <>
      <Container>
        <VStack $gap={"5px"}>
          <HStack $justifyContent="space-between">
            <Typography size="Menu">메뉴 가격</Typography>
            <Typography size="Menu">55000원</Typography>
          </HStack>
          <HStack $justifyContent="space-between">
            <Typography size="Menu">할인 가격</Typography>
            <Typography size="Menu">0원</Typography>
          </HStack>
        </VStack>
        <HStack $justifyContent="space-between">
          <Typography size="LargeMenu">총 가격</Typography>
          <Typography size="LargeMenu" color="sub">
            0원
          </Typography>
        </HStack>
      </Container>
    </>
  );
};

const Container = styled.div`
  border: 2px solid ${({ theme }) => theme.light.color.sub};
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 10px;
  width: 100%;
  user-select: none;
`;
