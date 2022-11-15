import styled from "styled-components"

export const Container = styled.button`
    width: 130px;
    height: 42px;
    border-radius: 4px;
    border: 1px solid #17a4d0;
    color: #17a4d0;
    font-size: 14px;
    margin-left: 25px;
    transition: all 0.25s ease-out;
    box-shadow: 0px 0px 17px -8px transparent;
    animation: animationBtn linear 0.5s forwards;

    &:hover{
        color: #fff;
        background-color: #17a4d0;
        box-shadow: 0px 0px 17px -5px #17a4d0;
    }

    @keyframes animationBtn {
        from{
            opacity: 0;
        }   

        to{
            opacity: 1;
        }
    }
    

`