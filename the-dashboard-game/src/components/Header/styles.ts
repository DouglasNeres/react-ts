import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: .6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem; 

  .userMenu{
    display: flex;
    align-items: center;
    gap: 1rem;

    img {
      width: 50px;
      height: 50px;
      object-fit: cover;
    }

    button{
      color: ${({theme}) => theme.colors.white};
      transition: .4s;
      &:hover{
        color: ${({theme}) => theme.colors.blue};
      }
    }
  }

  @media (max-width: 600px){
    flex-direction: column-reverse;

    .userMenu{
      width: 100%;
      justify-content: flex-end;
    }
  }
`

export const StyledHeaderForm = styled.form`
  display: inline-flex;
  gap: 1rem;
  align-items: center;
  padding:0 1rem;
  height: 59px;
  background: ${({ theme }) => theme.colors.white20};
  border-radius: 10px;

  input{
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white};
    border: none;
    background-color: transparent;
    outline: none;
    width: 100%;
    max-width: 373px;
    
    &::placeholder{
      color: ${({ theme }) => theme.colors.white50};
    }
   }

   button{
      color: ${({theme}) => theme.colors.white50};
      transition: .4s;
      &:hover{
        color: ${({theme}) => theme.colors.white};
      }
    }

   @media (max-width: 600px){
    input{
      height: 52px;
    }
   }

`