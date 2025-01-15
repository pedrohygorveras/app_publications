import { useContext } from "react";
import { AlertContext } from "./Context";
import { UseAlertContextProps } from "./types/useContext.types";

const useAlertContext = (): UseAlertContextProps => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("useAlertContext must be used within a AlertProvider");
  }
  return context;
};

export { useAlertContext };
