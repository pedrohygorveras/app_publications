import { createContext } from "react";
import { AuthContextProps } from "./types/Context.types";

const AuthContext = createContext<AuthContextProps | null>(null);

export { AuthContext };
