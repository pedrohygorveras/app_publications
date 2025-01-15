import React from "react";
import { KanbanColumn } from "@/components/KanbanColumn";
import { useKanbanBoard } from "./hooks/useKanbanBoard";

export const KanbanBoard: React.FC = () => {
  const {
    columns,
    draggingItemId,
    handleDragStart,
    handleDrop,
    handleDragEnd,
  } = useKanbanBoard();

  return (
    <div className="flex overflow-auto gap-4 p-4">
      {columns &&
        Object.entries(columns).map(([columnId, column]) => (
          <KanbanColumn
            key={columnId}
            columnId={columnId}
            column={column}
            onDragStart={handleDragStart}
            onDrop={handleDrop}
            onDragEnd={handleDragEnd}
            draggingItemId={draggingItemId}
          />
        ))}
    </div>
  );
};
