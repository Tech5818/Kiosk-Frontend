import styled from "styled-components";
import { Typography } from "./Typography";
import { useCurrentCategory } from "@shared/model/CurrentCategory";
import { Category } from "@shared/types/category";

interface CategoryMenuProps {
  category: Category;
  active?: boolean;
}

export const CategoryMenu = ({
  category,
  active = false,
}: CategoryMenuProps) => {
  const setCurrent = useCurrentCategory((state) => state.setCurrent);

  const clickHanlder = (category: Category) => {
    setCurrent(category);
  };

  return (
    <>
      <Container
        $active={active}
        $isSpecial={category.isSpecial}
        onClick={() => clickHanlder(category)}
      >
        <Typography size="LargeBody" color={active ? "white" : "text"}>
          {category.name}
        </Typography>
      </Container>
    </>
  );
};

interface ContainerProps {
  $active: boolean;
  $isSpecial: boolean;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  min-width: 10px;
  padding: 8px 20px;
  ${({ $isSpecial, theme, $active }) =>
    $isSpecial
      ? `background: ${
          $active ? theme.light.color.main : theme.light.color.light_main
        };`
      : `background: ${
          $active ? theme.light.color.sub : theme.light.color.light_sub
        };`}

  color: ${({ theme, $active }) =>
    $active ? theme.light.color.white : theme.light.color.text};

  border: 1px solid
    ${({ theme, $isSpecial }) =>
      $isSpecial ? theme.light.color.main : theme.light.color.sub};
  border-radius: 100px;
  align-items: center;
  justify-content: center;
`;
