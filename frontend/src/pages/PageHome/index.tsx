import React from "react";
import { KanbanProvider } from "@/contexts/Kanban/Provider";
import { Home } from "@/components/Home";

export const PageHome: React.FC = () => {
  return (
    <KanbanProvider>
      <Home />
    </KanbanProvider>
  );
};
