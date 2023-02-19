import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
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