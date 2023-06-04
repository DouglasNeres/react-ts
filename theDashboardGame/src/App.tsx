import { GameList } from './components/GameList'
import { Header } from './components/Header'
import { MainBanner } from './components/MainBanner'
import { MyGamesList } from './components/MyGameList'

export function App() {
  return (
    <div className="App">
      <Header />
      <MainBanner />
      <GameList />
      <MyGamesList />
    </div>
  )
}