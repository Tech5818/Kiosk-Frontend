import { HeaderWidget } from "@widgets/header/ui";
import styled from "styled-components";

export const HomePage = () => {
  return (
    <>
      <Container>
        <MainContent>
          <HeaderWidget />
        </MainContent>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
`;

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  height: 100%;
  gap: 15px;
`;
