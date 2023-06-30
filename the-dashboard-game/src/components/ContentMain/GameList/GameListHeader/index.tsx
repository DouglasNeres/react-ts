import { StyledIconLink } from "../../../../styles/buttons";
import { StyledTitle } from "../../../../styles/typography";
import { StyledGameListHeader } from "./style";
import { MdArrowForward } from "react-icons/md";
export const GameListHeader = () => {
  return (
    <StyledGameListHeader>
      <StyledTitle tag="h2" fontSize="slg" fontWeight={700}>
        Os mais jogados
      </StyledTitle>
      <StyledIconLink>
        <MdArrowForward size={30}/>
      </StyledIconLink>
    </StyledGameListHeader>
  );
};
