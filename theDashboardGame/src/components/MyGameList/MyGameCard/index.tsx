import { iMyGame } from "../../../data/database";
import { StyledButton } from "../../../styles/buttons";
import { StyledParagraph, StyledTitle } from "../../../styles/typography";
import { StyledMyGameCard } from "./styles";

interface iMyGameCardProps {
  game: iMyGame;
}

export function MyGameCard({ game }: iMyGameCardProps) {
  return (
    <StyledMyGameCard>
      <div className="left">
        <img src={game.image} alt={game.name} />
        <div>
          <StyledTitle tag="h3" fontSize="md" fontWeight={700}>
            {game.name}
          </StyledTitle>
          <StyledParagraph fontSize="lg">{game.category}</StyledParagraph>
        </div>
      </div>
      <div className="right">
        <StyledParagraph fontSize="md">
          <strong>25 hours played</strong>
        </StyledParagraph>

        {game.install ? (
          <StyledButton buttonStyle="solid" buttonSize="sm">Jogar</StyledButton>
        ) : (
          <StyledButton buttonStyle="outline" buttonSize="sm">Instalar</StyledButton>
        )}
      </div>
    </StyledMyGameCard>
  );
}
