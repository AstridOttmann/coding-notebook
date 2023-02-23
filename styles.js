import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root{
    --background-color: #000000;
    --font-color: #eb6f66;
    --font-size: 20px;
   }

  body {
    margin: 0;
    font-family: system-ui;
    background-color: var(--background-color);
    color: var(--font-color);
  }
`;
