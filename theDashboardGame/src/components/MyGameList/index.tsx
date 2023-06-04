import { myGameData } from "../../data/database"
import { MyGameCard } from "./MyGameCard"
import { MyGameListHeader } from "./MyGameListHeader"

export const MyGamesList = () => {
  return (
    <section>
      <MyGameListHeader />
      <ul>
        {myGameData.map(game =>(
          <MyGameCard key={game.name} game={game}/>
        ))}
      </ul>
    </section>
  )
}
