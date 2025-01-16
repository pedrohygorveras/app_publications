import { useAuthContext } from "@/contexts/Auth/useContext";
import { useKanbanContext } from "@/contexts/Kanban/useContext";
import { useNotifyError } from "@/hooks/useNotifyError";
import { updatePublication } from "@/services/publication";
import { useEffect, useState } from "react";

type KanbanItem = {
  publication_id: string;
  process_number: string;
  publication_date: string;
  author: string;
  lawyer: string;
  content: string;
  principal_value: string;
  interest_value: string;
  lawyer_fees: string;
  defendant: string;
  status: "new" | "read" | "sent_to_lawyer" | "completed";
  created_at: string;
  updated_at: string;
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
  const { user } = useAuthContext();

  const { notifyError } = useNotifyError();
  const { refresh, columns, setColumns } = useKanbanContext();

  const [draggingItemId, setDraggingItemId] = useState<string | null>(null);

  const handleDragStart = (event: React.DragEvent, itemId: string) => {
    event.dataTransfer.setData("itemId", itemId);
    setDraggingItemId(itemId);
  };

  const handleDrop = async (event: React.DragEvent, targetColumnId: string) => {
    if (!user) return;
    if (!columns) return;

    const { accessToken } = user;

    const itemId = event.dataTransfer.getData("itemId");
    if (!itemId) return;

    const sourceColumnId = Object.keys(columns).find((colId) =>
      columns[colId].items.some((item) => item.publication_id === itemId)
    );

    if (!sourceColumnId || sourceColumnId === targetColumnId) return;

    const sourceType = columns[sourceColumnId].type;
    const targetType = columns[targetColumnId].type;

    const isValidMove =
      (sourceType === "new" && targetType === "read") ||
      (sourceType === "read" && targetType === "sent_to_lawyer") ||
      (sourceType === "sent_to_lawyer" &&
        (targetType === "read" || targetType === "completed"));

    if (!isValidMove) {
      notifyError("Você não pode mover esse item para essa coluna.");
      setDraggingItemId(null);
      return;
    }

    const updatedColumns = moveItemBetweenColumns(
      columns,
      sourceColumnId,
      targetColumnId,
      itemId
    );

    setColumns(updatedColumns);

    const newStatus = columns[targetColumnId].type;

    try {
      await updatePublication(itemId, { status: newStatus }, accessToken);
    } catch (error) {
      notifyError("Erro ao atualizar o status no servidor.");
    }

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

    const itemIndex = sourceItems.findIndex(
      (item) => item.publication_id === itemId
    );
    if (itemIndex === -1) return columns;

    const [movedItem] = sourceItems.splice(itemIndex, 1);
    targetItems.push(movedItem);

    return {
      ...columns,
      [sourceColumnId]: { ...columns[sourceColumnId], items: sourceItems },
      [targetColumnId]: { ...columns[targetColumnId], items: targetItems },
    };
  };

  useEffect(() => {
    refresh();
  }, [refresh]);

  return {
    columns,
    draggingItemId,
    handleDragStart,
    handleDrop,
    handleDragEnd,
  };
};
