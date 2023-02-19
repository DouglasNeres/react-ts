import GlobalStyle from './styles/global'
import { StyledParagraph, StyledTitle } from './styles/typography'

export function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <StyledTitle tag='h1' fontWeight={400} fontSize="lg">Pokédashboard</StyledTitle>
      <StyledParagraph fontSize='lg' >Está é uma aplicação para o aprendizado de SC</StyledParagraph>
    </div>
  )
}