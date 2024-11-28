import { BannerWidget } from "@widgets/banner/ui";
import { CategoryWidget } from "@widgets/category/ui";
import { HeaderWidget } from "@widgets/header/ui";
import { MenuWidget } from "@widgets/menu/ui";
import styled from "styled-components";

export const HomePage = () => {
  return (
    <>
      <Container>
        <MainContent>
          <HeaderWidget />
          <Content>
            <BannerWidget />
            <CategoryWidget />
            <MenuWidget />
          </Content>
        </MainContent>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  background: ${({ theme }) => theme.light.color.background};
`;

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  height: 100%;
  gap: 20px;
`;

const Content = styled.main`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
