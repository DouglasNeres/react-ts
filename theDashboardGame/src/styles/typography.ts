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