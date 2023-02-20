import { StyledParagraph, StyledTitle } from './styles/typography'

export function App() {
  return (
    <div className="App">
      <StyledTitle tag='h1' fontWeight={700} fontSize="lg">Pokédashboard</StyledTitle>
      <StyledParagraph fontSize='md' >Está é uma aplicação para o aprendizado de SC</StyledParagraph>
    </div>
  )
}