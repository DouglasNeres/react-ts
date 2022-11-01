import styled from "styled-components";

export const Container = styled.div`
    display: flex;

    > div{
        width: 50%;
        margin: auto;
    }

    h1{
        color: #1e225e;
        font-size: 56px;
        font-weight: bold;
    }

    h6{
        font-size: 16px;
        color: rgba(30, 37, 94, 0.7);
        font-weight: normal;
        padding-right: 7rem;
        margin-top: 22px;
    }
`

export const ColumnImage = styled.div`
    text-align: right;
    position: relative;

    img{
        margin-left: 108px;
    }
`

