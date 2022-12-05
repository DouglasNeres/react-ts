import { NavMobileProvider } from "contexts/NavMobileContext";
import React from "react";

export * from './NavMobileContext'

export function AppContexts({children}: {children:React.ReactNode}) {
  return(
    <>
    <NavMobileProvider>{children}</NavMobileProvider> 
    </>
  )
}