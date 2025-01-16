import React from "react";
import { openModalPublication } from "@/actions/ModalPublication";
import { FaRegCalendar, FaRegClock } from "react-icons/fa";
import { useKanbanContext } from "@/contexts/Kanban/useContext";

interface KanbanCardProps {
  item: {
    publication_id: string;
    content: string;
    publication_date: string;
    created_at: string;
  };
  onDragStart: (event: React.DragEvent, itemId: string) => void;
  onDragEnd: () => void;
  isDragging: boolean;
}

export const KanbanCard: React.FC<KanbanCardProps> = ({
  item,
  onDragStart,
  onDragEnd,
  isDragging,
}) => {
  const { setSelected } = useKanbanContext();

  const handleDragStart = (event: React.DragEvent) => {
    onDragStart(event, item.publication_id);
  };

  return (
    <button
      draggable
      onClick={() => {
        openModalPublication();
        setSelected(item);
      }}
      onDragStart={handleDragStart}
      onDragEnd={onDragEnd}
      className={`bg-white border rounded-md p-4 shadow-lg outline-none w-full text-left mb-2 ${
        isDragging ? "border-2 border-dashed border-primary" : ""
      }`}
    >
      <p className="text-sm text-primary font-medium block">{item.content}</p>
      <div className="mt-3 grid grid-cols-2">
        <p className="flex items-center gap-1 truncate text-xs text-gray-500">
          <FaRegClock />
          {new Date(item.created_at).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
        <p className="flex items-center gap-1 truncate text-xs text-gray-500">
          <FaRegCalendar />
          {new Date(item.publication_date).toLocaleDateString()}
        </p>
      </div>
    </button>
  );
};
