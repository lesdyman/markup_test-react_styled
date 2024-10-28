import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    font-family: "Open Sans", serif;
    color:#3E4056;
    font-size: 14px;
    font-weight: 400;
    background-color: rgba(236, 241, 248, 0.4);
  }
`;
