import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    margin: 0;
  }
  button {
    cursor: pointer;
    padding: 5px 10px;
    
    &:focus {
        outline: none;
    }
  }

  input {
    font-size: 1em;
    padding: 5px;
  }
`;

export default GlobalStyle;
