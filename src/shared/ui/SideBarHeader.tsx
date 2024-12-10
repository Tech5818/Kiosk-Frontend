import styled from "styled-components";
import { Typography } from "./Typography";
import { useSideBar } from "@shared/model/SideBar";

export const SideBarHeader = () => {
  const { setOpen } = useSideBar((state) => state);
  return (
    <>
      <Container>
        <Typography size="Label">장바구니</Typography>
        <Close
          onClick={() => {
            setOpen(false);
          }}
        />
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0 0 0;
`;

const Close = styled.div`
  box-sizing: content-box;
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.light.color.dark_grey};
  padding: 1px;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before,
  &::after {
    position: absolute;
    content: " ";
    height: 15px;
    width: 3px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.light.color.text};
  }

  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
`;
