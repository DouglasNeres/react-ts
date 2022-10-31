import {createGlobalStyle} from 'styled-components'

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