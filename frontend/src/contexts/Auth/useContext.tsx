import { useContext } from "react";
import { AuthContext } from "./Context";
import { UseAuthContextProps } from "./types/useContext.types";

const useAuthContext = (): UseAuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};

export { useAuthContext };
