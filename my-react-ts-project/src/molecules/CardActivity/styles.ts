import styled from "styled-components";

export const Container = styled.div` 
    position: absolute;
    top: 105px;
    left: 75px;
    background: linear-gradient(135deg, #EE9AE5 0%, #5961F9 100%);
    color: #fff;
    width: 154px;
    height: 77px;
    border-radius: 12px;
    text-align: left;
    overflow: hidden;

    small{
        font-size: 12px;
        margin-top: 2px;
    }

    strong{
        display: block;
        margin-top: 2px;
        font-size: 22px;
        font-weight: 400;
    }

    img{
        height: 19px;
        margin-left: 7px;
    }

    div{
        display: flex;
        flex-direction: column;
        margin-left: .7rem;
        margin-top: .7rem;
}

i{
    width: 154px;
    height: 77px;
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 50px;

    &.circle1{
        left: 90px;
        top: -20px;
        background: linear-gradient(
            0deg,
            rgba(255, 255, 255, 0.3),
            rgba(255, 255, 255, 0.3)
        );
    }

    &.circle2{
        background: linear-gradient(
            0deg,
            rgba(255, 255, 255, 0.3),
            rgba(255, 255, 255, 0.3)
        );
        left: 70px;
        top: 45px;
        transform: rotate(50deg);
    }

    &.circle3{
        border: 1px solid rgba(255, 255, 255, 1);
        transform: rotate(-75deg);
        top: -65px;
        left: 30px;
        opacity: 0.3;
    }

}
`