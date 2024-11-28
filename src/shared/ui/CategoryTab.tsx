import styled from "styled-components";
import { Typography } from "./Typography";

export const CategoryTab = () => {
  return (
    <>
      <Container>
        <Tab>
          <Typography size="LargeMenu" color="sub">
            전체
          </Typography>
        </Tab>
        <Tab>
          <Typography size="LargeMenu" color="text">
            일반
          </Typography>
        </Tab>
        <Tab>
          <Typography size="LargeMenu" color="text">
            스페셜
          </Typography>
        </Tab>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  gap: 10px;
`;

const Tab = styled.div``;
