import styled from "styled-components";

export const StyledMyGameCard = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  .left{
    display: flex;
    align-items: center;
    gap: 1.5rem;

    img{
      width: 85px;
      height: 85px;
      object-fit: cover;
      border-radius: 20px;
    }
  }
  
  .right{
    display: flex;
    align-items: center;
    gap: 2rem;

    button{
      min-width: 150px;
    }
  }

  @media (max-width:850px){
    .right{
      gap: .75rem;
      flex-direction: column;
    }
  }

  @media (max-width:550px){
    align-items: flex-start;
    flex-direction: column;

    .right{
      width: 100%;
      align-items: center;

      button{
        width: 100%;
        max-width: 420px  ;
      }
    }
  }
`
