import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        color: inherit;
        text-decoration: none;
        font-family: "Moneygraphy";
    }

    @font-face {
        font-family: "Moneygraphy";
        src: url("./font/Moneygraphy-Rounded.ttf") format("truetype"),
             url("./font/Moneygraphy-Rounded.woff2") format("woff2");
    }
`;
