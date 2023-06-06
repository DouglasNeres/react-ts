import styled from "styled-components";

export const StyledGridBox = styled.div`
  background: ${({theme}) => theme.colors.white20};
  border: 1px solid ${({theme}) => theme.colors.gray15};
  border-radius: 25px;
  padding: 2rem 2.5rem;

  @media (max-width: 550px){
    padding: 1.5rem;
  }
`