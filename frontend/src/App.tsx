import React from "react";
import { AppRouter } from "@/routes/AppRouter";
import { AuthProvider } from "./contexts/Auth/Provider";

export const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};
