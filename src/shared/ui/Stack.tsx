import { StackProps } from "@shared/types/props/StackProps";
import styled from "styled-components";

const BaseStack = styled.div<StackProps>`
  display: flex;
  ${({ justifyContent }) => (justifyContent ? justifyContent : "")};
  ${({ alignItems }) => (alignItems ? alignItems : "")};
  ${({ gap }) => (gap ? gap : "")};
  ${({ flex }) => (flex ? flex : "")};
  ${({ background, theme }) => (background ? theme.color[background] : "")};
`;

export const HStack = styled(BaseStack)``;

export const VStack = styled(BaseStack)`
  flex-direction: column;
`;
