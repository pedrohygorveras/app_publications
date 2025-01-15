import React from "react";
import { KanbanCard } from "@/components/KanbanCard";
import { BiListCheck } from "react-icons/bi";

type KanbanColumnProps = {
  columnId: string;
  column: {
    title: string;
    type: "new" | "read" | "sent_to_lawyer" | "completed";
    items: {
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
    }[];
  };
  onDragStart: (event: React.DragEvent, itemId: string) => void;
  onDrop: (event: React.DragEvent, columnId: string) => void;
  onDragEnd: () => void;
  draggingItemId: string | null;
};

export const KanbanColumn: React.FC<KanbanColumnProps> = ({
  columnId,
  column,
  onDragStart,
  onDragEnd,
  onDrop,
  draggingItemId,
}) => {
  const { title, items, type } = column;
  const concluded = type === "completed";

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent) => {
    onDrop(event, columnId);
  };

  return (
    <div
      className="w-full min-w-64 bg-base-200 rounded-sm"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div className="flex  items-center gap-3 p-4 h-14 border border-gray-300 rounded-sm">
        {concluded && <BiListCheck className="text-2xl text-green-500" />}
        <h2
          className={`text-sm font-semibold ${concluded ? "text-green-500" : "text-primary"}`}
        >
          {title}
        </h2>
        <h2 className="text-sm text-gray-400">{items.length || 0}</h2>
      </div>
      <div className="space-y-2 min-h-[100px] max-h-[500px] overflow-auto p-3">
        {items && (
          <div>
            {items.length > 0 ? (
              items.map((item) => (
                <KanbanCard
                  key={item.publication_id}
                  item={item}
                  onDragStart={onDragStart}
                  onDragEnd={onDragEnd}
                  isDragging={draggingItemId === item.publication_id}
                />
              ))
            ) : (
              <p className="text-sm text-gray-400 text-center mt-4">
                Nenhum card encontrado
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
