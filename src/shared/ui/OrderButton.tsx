import styled from "styled-components";
import { Typography } from "./Typography";
import { useOrder } from "@shared/api/useOrder";
import { useCurrentOrder } from "@shared/model/CurrentOrder";

export const OrderButton = () => {
  const { mutate } = useOrder();
  const { currentOrder } = useCurrentOrder((state) => state);
  const handleOrder = () => {
    if (currentOrder === null) return alert("메뉴가 담기지 않았습니다.");

    mutate(currentOrder);
  };
  return (
    <>
      <Container onClick={handleOrder}>
        <Typography size="LargeMenu" color="white">
          주문하기
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
