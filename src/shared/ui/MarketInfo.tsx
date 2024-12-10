import styled from "styled-components";
import { VStack } from "./Stack";
import { Typography } from "./Typography";
import { MacIcon } from "./MacIcon";

interface MarketInfoProps {
  name: string;
  description: string;
}

export const MarketInfo = ({ name, description }: MarketInfoProps) => {
  return (
    <>
      <Container>
        <Icon>
          <MacIcon />
        </Icon>
        <VStack $gap={"5px"} $padding={"5px 0 0 0"}>
          <Typography size="Title" color="white">
            {name}
          </Typography>
          <Typography size="Body" color="white">
            {description}
          </Typography>
        </VStack>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const Icon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #d52b1e;
  display: flex;
  justify-content: center;
  align-items: center;
`;
