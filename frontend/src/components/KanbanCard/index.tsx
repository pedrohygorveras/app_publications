import React from "react";
import { openModalPublication } from "@/actions/ModalPublication";
import { FaRegCalendar, FaRegClock } from "react-icons/fa";

interface KanbanCardProps {
  item: { id: string; content: string; time: string; date: string };
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
  const handleDragStart = (event: React.DragEvent) => {
    onDragStart(event, item.id);
  };

  return (
    <button
      draggable
      onClick={() => {
        openModalPublication();
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
          {item.time}
        </p>
        <p className="flex items-center gap-1 truncate text-xs text-gray-500">
          <FaRegCalendar />
          {item.date}
        </p>
      </div>
    </button>
  );
};
