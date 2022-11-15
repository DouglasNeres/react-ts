import { createGlobalStyle } from 'styled-components'
import Bg1 from '../assets/bg1.png'
import Bg2 from '../assets/bg2.png'

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html, body, #root{
        height: 100%;
    }

    body{
        background-color: #F8FDFF;
        overflow: hidden;
        font-family: 'Poppins', sans-serif;
    }

    button{
        background-color: transparent;
        border: none;
        outline: none;
        font-family: "Poppins", sans-serif;
        cursor: pointer;
    }

    a{
        text-decoration: none;
        outline: none;
    }
        

`

export default GlobalStyle