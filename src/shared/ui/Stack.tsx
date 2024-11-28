import { StackProps } from "@shared/types/props/StackProps";
import styled from "styled-components";

const BaseStack = styled.div<StackProps>`
  display: flex;
  ${({ $justifyContent }) =>
    $justifyContent ? `justify-content: ${$justifyContent}` : ""};
  ${({ $alignItems }) => ($alignItems ? `align-items: ${$alignItems}` : "")};
  ${({ $gap }) => ($gap ? `gap: ${$gap}` : "")};
  ${({ $flex }) => ($flex ? `flex: ${$flex}` : "")};
  ${({ $background, theme }) =>
    $background ? `background: ${theme.light.color[$background]}` : ""};
`;

export const HStack = styled(BaseStack)``;

export const VStack = styled(BaseStack)`
  flex-direction: column;
`;
