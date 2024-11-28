import { CategoryMenu } from "@shared/ui/CategoryMenu";
import { CategoryTab } from "@shared/ui/CategoryTab";
import { Typography } from "@shared/ui/Typography";
import styled from "styled-components";

export const CategoryWidget = () => {
  return (
    <>
      <Container>
        <Typography size="SubTitle" color="text">
          카테고리
        </Typography>
        <CategoryTab />
        <CategoryCardList>
          <CategoryMenu text="햄버거" />
          <CategoryMenu text="햄버거" />
          <CategoryMenu text="햄버거" />
          <CategoryMenu text="햄버거" />
        </CategoryCardList>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CategoryCardList = styled.div`
  display: flex;
  gap: 15px;
  overflow-x: scroll;
`;
