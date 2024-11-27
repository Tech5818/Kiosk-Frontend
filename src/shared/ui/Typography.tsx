import { TypographyProps } from "@shared/types/props/TypographyProps";
import { FC } from "react";
import styled from "styled-components";

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
  font-size: ${({ theme, $size }) => theme.font[$size!]};
  color: ${({ theme, $color }) => theme.color[$color!]};
`;
