import { CSSProperties } from "react";
import { ColorKeys } from "../theme";

export interface StackProps {
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
  gap?: CSSProperties["gap"];
  flex?: CSSProperties["flex"];
  background?: ColorKeys;
}
