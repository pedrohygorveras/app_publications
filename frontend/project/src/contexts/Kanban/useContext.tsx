import { useContext } from "react";
import { KanbanContext } from "./Context";
import { UseKanbanContextProps } from "./types/useContext.types";

const useKanbanContext = (): UseKanbanContextProps => {
  const context = useContext(KanbanContext);
  if (!context) {
    throw new Error("useKanbanContext must be used within a KanbanProvider");
  }
  return context;
};

export { useKanbanContext };
