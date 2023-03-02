import { Header } from './components/Header'
import { StyledButton } from './styles/buttons'
import { StyledParagraph, StyledTitle } from './styles/typography'

export function App() {
  return (
    <div className="App">
      <Header />
      <StyledTitle tag='h2' fontWeight={700} fontSize="md">Pokédashboard</StyledTitle>
      <StyledParagraph fontSize='md'>Está é uma aplicação para o aprendizado de SC</StyledParagraph>
      <StyledButton buttonSize='lg' buttonStyle='outline'>Teste</StyledButton>
    </div>
  )
}