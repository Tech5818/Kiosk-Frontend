import styled from "styled-components";
import { LogoIcon } from "./LogoIcon";
import { Typography } from "./Typography";

export const Logo = () => {
  return (
    <>
      <Container>
        <LogoIcon />
        <Typography size="Menu" color="main">
          키오스크
        </Typography>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
`;
