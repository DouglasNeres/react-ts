import { Dispatch, SetStateAction } from "react";

export interface INavMobileContext {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}