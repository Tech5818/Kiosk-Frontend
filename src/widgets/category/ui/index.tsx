import { CategoryTab } from "@shared/ui/CategoryTab";
import { Typography } from "@shared/ui/Typography";
import styled from "styled-components";
import { CategoryCardList } from "@shared/ui/CategoryCardList";
import { useGetCategoryList } from "../api/useGetCategoryList";

export const CategoryWidget = () => {
  const { data, isSuccess } = useGetCategoryList();

  return (
    <>
      <Container>
        <Typography size="SubTitle" color="text">
          카테고리
        </Typography>
        <CategoryTab />
        <CategoryCardList categories={isSuccess ? data : null} />
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
