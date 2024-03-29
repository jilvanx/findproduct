import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    background: #fff;
    -webkit-font-smoothing: antialiased !important;
  }
`;
