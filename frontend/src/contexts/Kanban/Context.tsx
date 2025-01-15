import { createContext } from "react";
import { KanbanContextProps } from "./types/Context.types";

const KanbanContext = createContext<KanbanContextProps | null>(null);

export { KanbanContext };
