import styled from "styled-components";
import { Typography } from "./Typography";

interface CategoryMenuProps {
  text: string;
  active?: boolean;
}

export const CategoryMenu = ({ text, active = false }: CategoryMenuProps) => {
  return (
    <>
      <Container $active={active}>
        <Typography size="LargeBody" color={active ? "white" : "text"}>
          {text}
        </Typography>
      </Container>
    </>
  );
};

interface ContainerProps {
  $active: boolean;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  min-width: 10px;
  padding: 8px 20px;
  background: ${({ theme, $active }) =>
    $active ? theme.light.color.sub : theme.light.color.light_sub};
  border: 1px solid ${({ theme }) => theme.light.color.sub};
  border-radius: 100px;
  align-items: center;
  justify-content: center;
`;
