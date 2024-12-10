import { createContext } from "react";
import { SWContextValue } from "./types";
import { navItems } from "./constants";

export const SWContext = createContext<SWContextValue>({
    changePage: (page: string) => {console.log(page)},
    page: navItems[0].path
});