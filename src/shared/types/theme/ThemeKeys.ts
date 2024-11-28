import { DefaultTheme } from "styled-components/dist/types";

/**
 * DefaultTheme의 color key를 type 형태로 export
 */
export type ColorKeys = keyof DefaultTheme["light"]["color"];

export type FontKeys = keyof DefaultTheme["light"]["font"];
