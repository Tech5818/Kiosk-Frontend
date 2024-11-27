import type { ColorKeys, FontKeys } from "../theme";

export interface TypographyProps {
  children: string;
  size?: FontKeys;
  color?: ColorKeys;
}
