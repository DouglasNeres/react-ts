import {
  MdFavoriteBorder,
  MdHomeFilled,
  MdMenu,
  MdOutlineSell,
  MdOutlineShoppingBag,
} from "react-icons/md";
import { StyledSidebar } from "./styles";

export const Leftbar = () => {
  return (
    <StyledSidebar>
      <MdMenu />
      <MdHomeFilled />
      <MdFavoriteBorder />
      <MdOutlineSell />
      <MdOutlineShoppingBag />
    </StyledSidebar>
  );
};
