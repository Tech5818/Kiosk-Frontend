import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import { RouterProvider } from "react-router-dom";
import { Router } from "./Router";

const queryClient = new QueryClient();

export const Provider = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <RouterProvider router={Router} />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
};
