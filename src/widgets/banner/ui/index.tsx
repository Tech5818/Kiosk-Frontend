import { MenuCount } from "@shared/ui/MenuCount";
import { ContentLabel } from "@shared/ui/ContentLabel";
import { MarketInfo } from "@shared/ui/MarketInfo";
import styled from "styled-components";
import { useGetStoreInfo } from "../api/useGetStoreInfo";
import { HStack } from "@shared/ui/Stack";

export const BannerWidget = () => {
  const { data, isSuccess } = useGetStoreInfo();

  return (
    <>
      <Container>
        {isSuccess && (
          <>
            <ContentLabel title="가게명" subTitle="맥도날드" />
            <Content>
              <ContentFilter>
                <MarketInfo name={data.title} description={data.description} />
                <HStack $gap={"50px"}>
                  <MenuCountList>
                    <MenuCount account={data.total} label="총 메뉴" />
                    <MenuCount
                      account={data.category}
                      label="카테고리"
                      isLast
                    />
                    {/* <MenuCount account={3} label="세트 메뉴" isLast /> */}
                  </MenuCountList>
                  <MenuCountList>
                    <MenuCount
                      account={data.season}
                      label="시즌 메뉴"
                      isSpecial
                    />
                    <MenuCount account={data.new} label="신메뉴" isSpecial />
                    <MenuCount
                      account={data.time}
                      label="시간 한정 메뉴"
                      isSpecial
                      isLast
                    />
                  </MenuCountList>
                </HStack>
              </ContentFilter>
            </Content>
          </>
        )}
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
  border-radius: 10px;
  overflow: hidden;
  background: url("/src/shared/assets/BannerImg.png");
`;

const ContentFilter = styled.div`
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  border-radius: 10px;
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
