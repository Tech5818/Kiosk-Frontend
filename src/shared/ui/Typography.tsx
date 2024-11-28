import { FC } from "react";
import styled from "styled-components";

import type { ColorKeys, FontKeys } from "@shared/types/theme";

export interface TypographyProps {
  children: string | number;
  size?: FontKeys;
  color?: ColorKeys;
}

export const Typography: FC<TypographyProps> = ({
  children,
  size = "Body",
  color = "text",
}) => {
  return (
    <>
      <Text $size={size} $color={color}>
        {children}
      </Text>
    </>
  );
};

interface TextProps {
  $size: TypographyProps["size"];
  $color: TypographyProps["color"];
}

const Text = styled.p<TextProps>`
  font-size: ${({ theme, $size }) => theme.light.font[$size!]};
  color: ${({ theme, $color }) => theme.light.color[$color!]};
`;
