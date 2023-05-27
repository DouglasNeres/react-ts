import { gameData } from "../../data/database"
import { GameCard } from "./GameCard"
import { StyledGameList } from "./style"

export const GameList = () => {
  const newGameData = [...gameData]
  newGameData.length = 3
  return(
    <StyledGameList>
      {newGameData.map(game =>(
        <GameCard game={game} />
      ))}
    </StyledGameList>
  )
}