import { createContext } from "react";

interface SWContext{
    item?: string
  }
  



export const SWContext = createContext<SWContext | null>(null);