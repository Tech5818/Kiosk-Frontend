import styled from "styled-components";
import { Typography } from "./Typography";
export interface ContentLabelProps {
  title: string;
  subTitle: string;
}

export const ContentLabel = ({ title, subTitle }: ContentLabelProps) => {
  return (
    <>
      <Container>
        <Typography size="SubTitle" color="dark_grey">
          {title}
        </Typography>
        <Dot />
        <Typography size="SubTitle" color="text">
          {subTitle}
        </Typography>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Dot = styled.div`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: ${({ theme }) => theme.light.color.sub};
`;
