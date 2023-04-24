import styled, { css } from 'styled-components'
import { BaseTitle } from './components/typography'

export const StyledTitle = styled(BaseTitle)`
  font-family: 'Poppins', sans-serif;
  font-weight: ${({ fontWeight }) => fontWeight};

  color: ${({theme}) => theme.colors.white};

  ${({ fontSize }) => {
    switch (fontSize) {
      case "lg":
        return css`
          font-size: 44px;
          @media (max-width: 800px){
            font-size: 36px;
          }
          @media (max-width: 420px){
            font-size: 32px;
          }
        `
      case "md":
        return css`
          font-size: 20px;
        `
      case "sm":
        return css`
          font-size: 16px;
      `

    }
  }}
`

interface iStyleParagraph {
  opacity?: number;
  fontSize: "lg" | "md" | "sm";
}

export const StyledParagraph = styled.p<iStyleParagraph>`
  font-family: "Poppins", sans-serif;
  font-weight: 400;

    strong, b{
    font-weight: 700;
  }

  color: ${({theme}) => theme.colors.white};
  
  opacity: ${({opacity}) => opacity ? opacity: .5};

  ${({ fontSize }) => {
    switch (fontSize) {
      case "lg":
        return css`
          font-size: 20px;
        `
      case "md":
        return css`
          font-size: 16px;
        `
      case "sm":
        return css`
          font-size: 14px;
      `
    }
  }
}
`

interface iStyledTag{
  backgroundColor: "blue" | "red";
}

export const StyledTag = styled.span<iStyledTag>`
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-weight: 400;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  height: 34px;

  padding: 0 1.5rem;

  color: ${({theme}) => theme.colors.white};

  border-radius: 6px;

  ${({backgroundColor, theme}) => {
    switch(backgroundColor){
      case 'blue':
        return css`
          background: ${theme.colors.blue};
        `
      case 'red':
        return css`
          background: ${theme.colors.red};
        `
    }
  }}
`