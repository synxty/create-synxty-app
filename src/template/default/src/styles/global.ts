import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #222;
    color: #F1FBF7;
    font: 400 1rem Mulish, sans-serif;
  }

`;

export default GlobalStyle;
