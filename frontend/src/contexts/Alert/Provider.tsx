import { useState } from "react";
import { AlertContext } from "./Context";
import { AlertProviderProps } from "./types/Provider.types";
import {
  AlertContextProps,
  TypeProps,
  TitleProps,
  MessageProps,
} from "./types/Context.types";

const AlertProvider = ({ children }: AlertProviderProps) => {
  const [typeAlert, setTypeAlert] = useState<TypeProps>("error");
  const [titleAlert, setTitleAlert] = useState<TitleProps>("");
  const [messageAlert, setMessageAlert] = useState<MessageProps>("");

  const contextValue: AlertContextProps = {
    typeAlert,
    setTypeAlert,

    titleAlert,
    setTitleAlert,

    messageAlert,
    setMessageAlert,
  };

  return (
    <AlertContext.Provider value={contextValue}>
      {children}
    </AlertContext.Provider>
  );
};

export { AlertProvider };
