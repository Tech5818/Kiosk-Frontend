import { HamburgerMenu } from "@shared/ui/HamburgerMenu";
import { Logo } from "@shared/ui/Logo";
import { VStack } from "@shared/ui/Stack";
import styled from "styled-components";

export const HeaderWidget = () => {
  return (
    <>
      <Container>
        <HamburgerMenu />
        <VStack $flex={1} $alignItems="center">
          <Logo />
        </VStack>
      </Container>
    </>
  );
};

const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
`;
