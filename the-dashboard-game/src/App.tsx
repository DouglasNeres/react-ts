import { GameList } from './components/GameList'
import { Header } from './components/Header'
import { MainBanner } from './components/MainBanner'
import { MyGamesList } from './components/MyGameList'
import { Sidebar } from './components/Sidebar'

export function App() {
  return (
    <div className="App">
      <Sidebar />
      <Header />
      <MainBanner />
      <GameList />
      <MyGamesList />
    </div>
  )
}