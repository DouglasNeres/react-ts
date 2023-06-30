import { GameList } from "./GameList";
import { MainBanner } from "./MainBanner";
import { MyGamesList } from "./MyGameList";

export const ContentMain = () => {
  return (
    <div>
      <MainBanner />
      <GameList />
      <MyGamesList />
    </div>
  );
};
