import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root{
    --background-color: #000000;
    --light-background: #444444;
    --font-color: #eb6f66;
    --font-size: 20px;
    --button-color: #ffe4e1;
   }

  body {
    margin: 0;
    font-family: system-ui;
    background-color: var(--background-color);
    color: var(--font-color);
  }
`;
