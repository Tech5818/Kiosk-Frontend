import { useCategoryType } from "@shared/model/CategoryType";
import { useCurrentCategory } from "@shared/model/CurrentCategory";
import { Category } from "@shared/types/Category";
import styled from "styled-components";
import { CategoryMenu } from "./CategoryMenu";

interface CategoryCardListProps {
  categories: Category[] | null;
}

export const CategoryCardList = ({ categories }: CategoryCardListProps) => {
  const current = useCurrentCategory((state) => state.current);
  const { type } = useCategoryType((state) => state);

  if (categories !== null && type === "normal") {
    categories = categories.filter((category) => category.isSpecial === false);
  }

  if (categories !== null && type === "special") {
    categories = categories.filter((category) => category.isSpecial === true);
  }

  return (
    <>
      <Container>
        {categories &&
          categories.map((category, idx) => {
            return (
              <CategoryMenu
                category={category}
                active={category.id === current?.id}
                key={idx}
              />
            );
          })}
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  gap: 15px;
  overflow-x: scroll;
`;
