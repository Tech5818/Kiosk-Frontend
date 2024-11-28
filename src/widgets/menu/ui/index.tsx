import { ContentLabel } from "@shared/ui/ContentLabel";
import { MenuCard } from "@shared/ui/MenuCard";
import styled from "styled-components";

export const MenuWidget = () => {
  return (
    <>
      <Container>
        <ContentLabel title="일반메뉴" subTitle="햄버거" />
        <MenuList>
          <MenuCard name="빅맥" calorie={257.2} price={5500} />
        </MenuList>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const MenuList = styled.div`
  display: flex;
  gap: 20px;
`;
