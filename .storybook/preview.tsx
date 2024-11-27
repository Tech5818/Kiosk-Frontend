import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import type { Preview } from "@storybook/react";
import { light } from "../src/shared/types/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../src/app/GlobalStyle";

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light,
    },
    defaultTheme: "light",
    Provider: ThemeProvider,
    GlobalStyles: GlobalStyle,
  }),
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
