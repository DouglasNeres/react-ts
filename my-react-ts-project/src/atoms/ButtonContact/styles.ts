import styled from "styled-components";

export const Container = styled.button`
    background-color: #17a4d0;
    border: 1px solid #17a4d0;
    color: #fff;
    font-size: 14px;
    font-weight: 400;
    width: 200px;
    height: 60px;
    border-radius: 100px;
    margin-top: 50px;
    transition: all 0.25s ease-out;
    animation: animationBtnCtt linear 0.5s forwards;

    &:hover{
        background-color: #f8fdff;
        color: #17a4d0;

    }

    @keyframes animationBtnCtt {
        from{
            opacity: 0;
        }   

        to{
            opacity: 1;
        }
    }
`