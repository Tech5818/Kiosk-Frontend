import styled from "styled-components";
import { Typography } from "./Typography";
import { useCategoryType } from "@shared/model/CategoryType";
import { Tab } from "./Tab";

export const CategoryTab = () => {
  const { type } = useCategoryType((state) => state);

  return (
    <>
      <Container>
        <Tab type="all">
          <Typography size="LargeMenu" color={type === "all" ? "sub" : "text"}>
            전체
          </Typography>
        </Tab>
        <Tab type="normal">
          <Typography
            size="LargeMenu"
            color={type === "normal" ? "sub" : "text"}
          >
            일반
          </Typography>
        </Tab>
        <Tab type="special">
          <Typography
            size="LargeMenu"
            color={type === "special" ? "main" : "text"}
          >
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
