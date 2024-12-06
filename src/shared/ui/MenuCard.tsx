import styled from "styled-components";
import { Typography } from "./Typography";
import { HStack, VStack } from "./Stack";
import { Menu } from "@shared/types/menu";

interface MenuCardProps {
  menu: Menu;
}

export const MenuCard = ({ menu }: MenuCardProps) => {
  return (
    <>
      <Container>
        <ImgBox src={menu.imgPath} />
        <VStack $gap={"20px"} $alignItems="center">
          <Typography size="SubTitle" color="text">
            {menu.name}
          </Typography>
          <CalorieBox>{menu.calories}kcal</CalorieBox>
          <HStack $justifyContent="space-between">
            <Typography size="Menu" color="text">
              {`${menu.price}원`}
            </Typography>
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
