import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body{
    background: #000;
  }

  button{
    cursor: pointer;
    background: transparent;
    border: none;
  }

  ul, ol{
    padding: 0;
    margin: 0;
    list-style: none;
  }

  li{
    list-style: none;
  }

`

export const ColorsTheme = {
  colors: {
    white: "#FFFFFF",
    white20: "rgba(217, 217, 217, 0.15)",
    white50: "rgba(255, 255, 255, .5)",
    gray15: "rgba(217, 217, 217, 0.15)",
    red: "#F55859",
    blue: "#0F81EC",
  }  
}