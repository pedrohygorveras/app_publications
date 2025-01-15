import { createContext } from "react";
import { AlertContextProps } from "./types/Context.types";

const AlertContext = createContext<AlertContextProps | null>(null);

export { AlertContext };
