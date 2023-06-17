import styled, { css } from "styled-components";

interface iStyledButtonProps {
  buttonSize: "sm" | "md" | "lg";
  buttonStyle: "solid" | "outline";
}

export const StyledIconLink = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 35px;
  min-width: 35px;
  height: 35px;
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.5;
  transition: 0.4s;
  &:hover {
    opacity: 1;
  }
`;

export const StyledButton = styled.button<iStyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;

  font-family: "Poppins", sans-serif;
  font-size: 1.1rem;

  border-radius: 12px;

  transition: 0.4s;

  ${({ buttonSize }) => {
    switch (buttonSize) {
      case "lg":
        return css`
          padding: 0 2rem;
          height: 69px;
        `;

      case "md":
        return css`
          padding: 0 2rem;
          height: 46px;
        `;

      case "sm":
        return css`
          padding: 0 1.5rem;
          height: 42px;
        `;
    }
  }}

  ${({ buttonStyle, theme }) => {
    switch (buttonStyle) {
      case "solid":
        return css`
          background: ${theme.colors.blue};
          color: ${theme.colors.white};
        `;
      case "outline":
        return css`
          border: 1px solid ${theme.colors.blue};
          background: transparent;
          color: ${theme.colors.white};
          &:hover {
            background: ${theme.colors.blue};
            color: ${theme.colors.white};
          }
        `;
    }
  }}


  &:hover {
    filter: brightness(1.1);
    box-shadow: 0px 4px 25px rgba(255, 249, 249, 0.25);
  }
`;
