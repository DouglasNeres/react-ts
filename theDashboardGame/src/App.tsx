import { GameList } from './components/GameList'
import { Header } from './components/Header'
import { MainBanner } from './components/MainBanner'
import { StyledButton } from './styles/buttons'
import { StyledParagraph, StyledTitle } from './styles/typography'

export function App() {
  return (
    <div className="App">
      <Header />
      <MainBanner />
      <GameList />
    </div>
  )
}