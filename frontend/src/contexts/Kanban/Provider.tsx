import { useState, useCallback } from "react";
import { KanbanContext } from "./Context";
import { KanbanProviderProps } from "./types/Provider.types";
import {
  SelectedProps,
  SearchProps,
  DateProps,
  KanbanContextProps,
  ColumnsProps,
} from "./types/Context.types";
import { getPublications } from "@/services/publication";
import { useAuthContext } from "../Auth/useContext";

const KanbanProvider = ({ children }: KanbanProviderProps) => {
  const { user } = useAuthContext();

  const [selected, setSelected] = useState<SelectedProps>(null);
  const [search, setSearch] = useState<SearchProps>(null);
  const [startDate, setStartDate] = useState<DateProps>(null);
  const [endDate, setEndDate] = useState<DateProps>(null);
  const [columns, setColumns] = useState<ColumnsProps>(null);

  const refresh = useCallback(async () => {
    if (!user) return;

    const { accessToken } = user;

    setSelected(null);
    setSearch(null);
    setStartDate(null);
    setEndDate(null);

    const [
      newPublicationsResult,
      readPublicationsResult,
      sentToLawyerPublicationsResult,
      completedPublicationsResult,
    ] = await Promise.all([
      getPublications({ status: "new" }, accessToken),
      getPublications({ status: "read" }, accessToken),
      getPublications({ status: "sent_to_lawyer" }, accessToken),
      getPublications({ status: "completed" }, accessToken),
    ]);

    if (newPublicationsResult.error) return;
    if (readPublicationsResult.error) return;
    if (sentToLawyerPublicationsResult.error) return;
    if (completedPublicationsResult.error) return;

    const data: any = {
      newPublication: {
        title: "Nova Publicação",
        type: "new",
        items: newPublicationsResult.data,
      },
      readPublication: {
        title: "Publicação Lida",
        type: "read",
        items: readPublicationsResult.data,
      },
      toSendToLawyer: {
        title: "Enviar para Advogado Responsável",
        type: "sent_to_lawyer",
        items: sentToLawyerPublicationsResult.data,
      },
      concluded: {
        title: "Concluído",
        type: "completed",
        items: completedPublicationsResult.data,
      },
    };

    console.log(data);
    setColumns(data);
  }, []);

  const contextValue: KanbanContextProps = {
    columns,
    setColumns,

    selected,
    setSelected,

    search,
    setSearch,

    startDate,
    setStartDate,

    endDate,
    setEndDate,

    refresh,
  };

  return (
    <KanbanContext.Provider value={contextValue}>
      {children}
    </KanbanContext.Provider>
  );
};

export { KanbanProvider };
