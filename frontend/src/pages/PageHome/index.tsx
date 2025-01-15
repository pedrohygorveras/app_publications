import React from "react";
import { Navbar } from "@/components/Navbar";
import { KanbanBoard } from "@/components/KanbanBoard";
import { ModalPublication } from "@/components/ModalPublication";
import { KanbanHeader } from "@/components/KanbanHeader";

export const PageHome: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="h-[calc(100vh_-_120px)]">
        <div className="py-8">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <KanbanHeader />
            <KanbanBoard />
          </div>
        </div>
      </div>

      <ModalPublication />
    </div>
  );
};
