import { useCurrentCategory } from "@shared/model/CurrentCategory";
import { ContentLabel } from "@shared/ui/ContentLabel";
import { MenuCard } from "@shared/ui/MenuCard";
import styled from "styled-components";
import { useMenu } from "../api/useMenu";

export const MenuWidget = () => {
  const { data } = useMenu();
  const current = useCurrentCategory((state) => state.current);

  const Menus = data?.filter((menu) => menu.category.id === current?.id);

  return (
    <>
      <Container>
        <ContentLabel
          title={current?.isSpecial ? "스페셜메뉴" : "일반메뉴"}
          subTitle={current?.name!!}
        />
        <MenuList>
          {Menus &&
            Menus.map((menu, idx) => {
              return <MenuCard menu={menu} key={idx} />;
            })}
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
