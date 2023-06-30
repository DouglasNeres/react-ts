import { myGameData } from "../../../data/database";
import { StyledGridBox } from "../../../styles/grid";
import { MyGameCard } from "./MyGameCard";
import { MyGameListHeader } from "./MyGameListHeader";
import { StyledMyGameList } from "./styles";

export const MyGamesList = () => {
  return (
    <section>
      <StyledGridBox>
        <MyGameListHeader />
        <StyledMyGameList>
          {myGameData.map((game) => (
            <MyGameCard key={game.name} game={game} />
          ))}
        </StyledMyGameList>
      </StyledGridBox>
    </section>
  );
};
