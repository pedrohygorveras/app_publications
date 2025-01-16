import React from "react";
import { openModalPublication } from "@/actions/ModalPublication";
import { FaRegCalendar } from "react-icons/fa";
import { useKanbanContext } from "@/contexts/Kanban/useContext";

interface KanbanCardProps {
  item: any;
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
      <p className="text-sm text-primary font-medium block">
        {item?.process_number}
      </p>
      <div className="mt-3">
        <p className="flex items-center justify-end gap-1 truncate text-xs text-gray-500">
          <FaRegCalendar />
          {new Date(item.publication_date).toLocaleTimeString([], {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })}
        </p>
      </div>
    </button>
  );
};
