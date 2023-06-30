import { MdArrowForward } from "react-icons/md";
import { StyledIconLink } from "../../../../styles/buttons";
import { StyledTitle } from "../../../../styles/typography";
import { StyledMyGameListHeader } from "./styles";

export function MyGameListHeader() {
  return (
    <StyledMyGameListHeader>
       <StyledTitle tag="h2" fontSize="slg" fontWeight={700}>
        Meus Jogos
      </StyledTitle>
      <StyledIconLink>
        <MdArrowForward size={30}/>
      </StyledIconLink>
    </StyledMyGameListHeader>
  )
}
