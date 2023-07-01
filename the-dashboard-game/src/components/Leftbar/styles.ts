import styled from "styled-components";

export const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  height: 100%;
  gap: 2rem;
  color: ${({ theme }) => theme.colors.white};

  svg{
    font-size: 2rem;
    cursor: pointer;
  }
`;
