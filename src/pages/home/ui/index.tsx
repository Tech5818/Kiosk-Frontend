import { useSideBar } from "@shared/model/SideBar";
import { BannerWidget } from "@widgets/banner/ui";
import { CategoryWidget } from "@widgets/category/ui";
import { HeaderWidget } from "@widgets/header/ui";
import { MenuWidget } from "@widgets/menu/ui";
import { Sidebar } from "@widgets/sidebar/ui";
import styled from "styled-components";

export const HomePage = () => {
  const { open } = useSideBar((state) => state);

  return (
    <>
      <Container>
        <MainContent $open={open}>
          <HeaderWidget />
          <Content>
            <BannerWidget />
            <CategoryWidget />
            <MenuWidget />
          </Content>
        </MainContent>
        <Sidebar />
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  background: ${({ theme }) => theme.light.color.background};
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
`;

interface MainContentProps {
  $open: boolean;
}

const MainContent = styled.main<MainContentProps>`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: ${({ $open }) => ($open ? "calc(100% - 300px)" : "100%")};
  height: 100%;
  gap: 20px;
  transition: width 0.3s;
`;

const Content = styled.main`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
