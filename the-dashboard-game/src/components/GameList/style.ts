import styled from "styled-components";

export const StyledGameList = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  
  @media (max-width: 1150px){
    img{
      width: 20rem;
    }
    overflow-x: scroll;
    padding-bottom: 1rem;

    ::-webkit-scrollbar{
      height: .5rem;
    }

    ::-webkit-scrollbar-track{
      background: #333;
    }

    ::-webkit-scrollbar-thumb{
      border-radius: 5px;
      background: ${({theme}) => theme.colors.red};
    }
  }
`