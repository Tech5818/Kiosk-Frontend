import styled from "styled-components";
import { Typography } from "./Typography";
import { HStack, VStack } from "./Stack";
import { Menu } from "@shared/types/Menu";
import { AddCartIcon } from "./AddCartIcon";
import { useCurrentOrder } from "@shared/model/CurrentOrder";
import { CurrentOrder } from "@shared/types/CurrentOrder";

interface MenuCardProps {
  menu: Menu;
}

export const MenuCard = ({ menu }: MenuCardProps) => {
  const { setCurrentOrder, currentOrder } = useCurrentOrder((state) => state);

  const handleOrder = () => {
    if (currentOrder === null || currentOrder.length === 0) {
      const newOrder: CurrentOrder = {
        menuId: menu.id,
        imgPath: menu.imgPath,
        name: menu.name,
        price: menu.price,
        quantity: 1,
      };

      setCurrentOrder([newOrder]);
      return;
    } else {
      for (const order of currentOrder) {
        if (order.menuId === menu.id)
          return alert("이미 장바구니 안에 있는 상품입니다.");

        const newOrder: CurrentOrder = {
          menuId: menu.id,
          imgPath: menu.imgPath,
          name: menu.name,
          price: menu.price,
          quantity: 1,
        };

        setCurrentOrder([...currentOrder, newOrder]);
      }
    }

    console.log(currentOrder);
  };

  return (
    <>
      <Container>
        <ImgBox src={menu.imgPath} />
        <VStack $gap={"20px"} $alignItems="center">
          <Typography size="SubTitle" color="text">
            {menu.name}
          </Typography>
          <CalorieBox>{menu.calories.toLocaleString("ko-KR")}kcal</CalorieBox>
          <HStack
            $justifyContent="space-between"
            $gap={"50px"}
            $alignItems="center"
          >
            <Typography size="LargeMenu" color="text">
              {`${menu.price.toLocaleString("ko-KR")}원`}
            </Typography>
            <AddOrder onClick={handleOrder}>
              <AddCartIcon />
            </AddOrder>
          </HStack>
        </VStack>
      </Container>
    </>
  );
};

const Container = styled.div`
  background: ${({ theme }) => theme.light.color.white};
  padding: 50px 40px 25px;
  border-radius: 30px;
  box-shadow: 0 0 30px -15px rgba(0, 0, 0, 0.3);
  display: flex;
  gap: 5px;
  flex-direction: column;
  align-items: center;
`;

const ImgBox = styled.img`
  width: 120px;
  height: 120px;
  /* background: ${({ theme }) => theme.light.color.dark_grey}; */
`;

const CalorieBox = styled.div`
  border-top: 1px solid ${({ theme }) => theme.light.color.dark_grey};
  border-bottom: 1px solid ${({ theme }) => theme.light.color.dark_grey};
  display: flex;
  justify-content: center;
  padding: 10px 0;
  width: 100%;
`;

const AddOrder = styled.div``;
