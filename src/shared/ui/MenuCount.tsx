import styled from "styled-components";
import { Typography } from "./Typography";

interface MenuCount {
  label: string;
  account: number;
  isSpecial?: boolean;
  isLast?: boolean;
}

export const MenuCount = ({
  account,
  label,
  isSpecial = false,
  isLast = false,
}: MenuCount) => {
  return (
    <>
      <Container>
        <Typography size="Title" color={isSpecial ? "main" : "sub"}>
          {account}
        </Typography>
        <Typography size="Menu" color="white">
          {label}
        </Typography>
      </Container>
      {!isLast && <DivideBar />}
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

const DivideBar = styled.div`
  width: 3px;
  height: 10px;
  border-radius: 100px;
  background: ${({ theme }) => theme.light.color.dark_grey};
`;
