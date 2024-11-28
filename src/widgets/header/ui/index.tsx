import { HamburgerMenu } from "@shared/ui/HamburgerMenu";
import { Logo } from "@shared/ui/Logo";
import { ShoppingCartMenu } from "@shared/ui/ShoppingCartMenu";
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
        <ShoppingCartMenu />
      </Container>
    </>
  );
};

const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
`;
