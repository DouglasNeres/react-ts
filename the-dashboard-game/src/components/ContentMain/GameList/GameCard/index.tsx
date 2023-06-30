import { iGame } from "../../../../data/database";
import { StyledTitle, StyledParagraph } from "../../../../styles/typography";
import { StyledGameCard } from "./style";

interface iGameCardProps{
  game: iGame;
}

export const GameCard = ({game}: iGameCardProps) =>{
  return(
    <StyledGameCard>
      <img src={game.image} alt={game.name} />
      <StyledTitle fontSize="md" fontWeight={700} tag="h3">
        {game.name}
      </StyledTitle>
      <StyledParagraph fontSize="lg" >
        {game.category}
      </StyledParagraph>
    </StyledGameCard>
  )
}