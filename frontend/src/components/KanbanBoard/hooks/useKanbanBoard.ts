import { useState } from "react";

type KanbanItem = {
  id: string;
  content: string;
  time: string;
  date: string;
};

type KanbanColumnType = {
  title: string;
  type: "new" | "read" | "sent_to_lawyer" | "completed";
  items: KanbanItem[];
};

type KanbanColumns = {
  [key: string]: KanbanColumnType;
};

export const useKanbanBoard = () => {
  const [columns, setColumns] = useState<KanbanColumns>({
    newPublication: {
      title: "Nova Publicação",
      type: "new",
      items: [
        {
          id: "1",
          content: "5018120-21.2021.8.13.0022",
          time: "3h",
          date: "27/01/2024",
        },
        {
          id: "1",
          content: "5018120-21.2021.8.13.0022",
          time: "3h",
          date: "27/01/2024",
        },
        {
          id: "1",
          content: "5018120-21.2021.8.13.0022",
          time: "3h",
          date: "27/01/2024",
        },
        {
          id: "1",
          content: "5018120-21.2021.8.13.0022",
          time: "3h",
          date: "27/01/2024",
        },
        {
          id: "1",
          content: "5018120-21.2021.8.13.0022",
          time: "3h",
          date: "27/01/2024",
        },
        {
          id: "1",
          content: "5018120-21.2021.8.13.0022",
          time: "3h",
          date: "27/01/2024",
        },
      ],
    },
    readPublication: {
      title: "Publicação Lida",
      type: "read",
      items: [],
    },
    toSendToLawyer: {
      title: "Enviar para Advogado Responsável",
      type: "sent_to_lawyer",
      items: [],
    },
    concluded: {
      title: "Concluído",
      type: "completed",
      items: [],
    },
  });

  const [draggingItemId, setDraggingItemId] = useState<string | null>(null);

  const handleDragStart = (event: React.DragEvent, itemId: string) => {
    event.dataTransfer.setData("itemId", itemId);
    setDraggingItemId(itemId);
  };

  const handleDrop = (event: React.DragEvent, targetColumnId: string) => {
    const itemId = event.dataTransfer.getData("itemId");
    if (!itemId) return;

    const sourceColumnId = Object.keys(columns).find((colId) =>
      columns[colId].items.some((item) => item.id === itemId)
    );

    if (!sourceColumnId || sourceColumnId === targetColumnId) return;

    const updatedColumns = moveItemBetweenColumns(
      columns,
      sourceColumnId,
      targetColumnId,
      itemId
    );

    setColumns(updatedColumns);
    setDraggingItemId(null);
  };

  const handleDragEnd = () => {
    setDraggingItemId(null);
  };

  const moveItemBetweenColumns = (
    columns: KanbanColumns,
    sourceColumnId: string,
    targetColumnId: string,
    itemId: string
  ): KanbanColumns => {
    const sourceItems = [...columns[sourceColumnId].items];
    const targetItems = [...columns[targetColumnId].items];

    const itemIndex = sourceItems.findIndex((item) => item.id === itemId);
    if (itemIndex === -1) return columns;

    const [movedItem] = sourceItems.splice(itemIndex, 1);
    targetItems.push(movedItem);

    return {
      ...columns,
      [sourceColumnId]: { ...columns[sourceColumnId], items: sourceItems },
      [targetColumnId]: { ...columns[targetColumnId], items: targetItems },
    };
  };

  return {
    columns,
    draggingItemId,
    handleDragStart,
    handleDrop,
    handleDragEnd,
  };
};
