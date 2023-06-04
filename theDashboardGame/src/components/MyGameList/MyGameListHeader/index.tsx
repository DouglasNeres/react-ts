import { MdArrowForward } from "react-icons/md";
import { StyledIconLink } from "../../../styles/buttons";
import { StyledTitle } from "../../../styles/typography";

export function MyGameListHeader() {
  return (
    <header>
       <StyledTitle tag="h2" fontSize="slg" fontWeight={700}>
        Meus Jogos
      </StyledTitle>
      <StyledIconLink>
        <MdArrowForward size={30}/>
      </StyledIconLink>
    </header>
  )
}
