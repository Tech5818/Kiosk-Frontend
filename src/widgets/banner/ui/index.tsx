import { MenuCount } from "@shared/ui/MenuCount";
import { ContentLabel } from "@shared/ui/ContentLabel";
import { MarketInfo } from "@shared/ui/MarketInfo";
import styled from "styled-components";

export const BannerWidget = () => {
  return (
    <>
      <Container>
        <ContentLabel title="가게명" subTitle="맥도날드" />
        <Content>
          <MarketInfo name="맥도날드" description="햄버거 프렌차이즈" />
          <MenuCountList>
            <MenuCount account={15} label="총 메뉴 갯수" />
            <MenuCount account={7} label="카테고리" />
            <MenuCount account={3} label="세트 메뉴" isLast />
          </MenuCountList>
        </Content>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Content = styled.div`
  width: 100%;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.5);
  padding: 30px;
  overflow-x: scroll;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const MenuCountList = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
