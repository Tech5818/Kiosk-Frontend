import styled from "styled-components";
import { HStack, VStack } from "./Stack";
import { Typography } from "./Typography";
import { useCurrentOrder } from "@shared/model/CurrentOrder";

interface OrderMenuProps {
  name: string;
  imgPath: string;
  price: number;
  quantity: number;
  isOrdered?: boolean;
  id: number;
}

export const OrderMenu = ({
  name,
  imgPath,
  price,
  quantity,
  isOrdered,
  id,
}: OrderMenuProps) => {
  const { increaseCurrentOrder, decreaseCurrentOrder } = useCurrentOrder(
    (state) => state
  );
  return (
    <>
      <Container>
        <VStack $gap={"5px"}>
          <HStack $gap={"5px"} $alignItems="center">
            <MenuImg src={imgPath} />
            <Typography size="LargeBody" color="text">
              {name}
            </Typography>
            {quantity > 1 && (
              <Typography size="LargeBody" color="text">
                {quantity + "개"}
              </Typography>
            )}
          </HStack>
          <Typography size="LargeBody" color="sub">
            {(price * quantity).toLocaleString("ko-KR") + "원"}
          </Typography>
        </VStack>
        {isOrdered ? (
          <Typography size="LargeBody" color="sub">
            주문완료
          </Typography>
        ) : (
          <HStack $gap={"10px"}>
            <Button
              onClick={() => {
                increaseCurrentOrder(id);
              }}
            >
              <Typography size="SubTitle" color="green">
                +
              </Typography>
            </Button>
            <Button
              onClick={() => {
                decreaseCurrentOrder(id);
              }}
            >
              <Typography size="SubTitle" color="red">
                -
              </Typography>
            </Button>
          </HStack>
        )}
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 8px 10px;
  border-radius: 10px;
  background: ${({ theme }) => theme.light.color.white};
  border: 1px solid ${({ theme }) => theme.light.color.dark_grey};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuImg = styled.img`
  width: 35px;
  height: 35px;
`;

const Button = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.light.color.light_sub};
  justify-content: center;
  align-items: center;
`;
