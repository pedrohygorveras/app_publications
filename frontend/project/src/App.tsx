import React from "react";
import { AppRouter } from "@/routes/AppRouter";
import { AlertProvider } from "./contexts/Alert/Provider";
import { AuthProvider } from "./contexts/Auth/Provider";
import { ModalAlert } from "./components/ModalAlert";

export const App: React.FC = () => {
  return (
    <AlertProvider>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
      <ModalAlert />
    </AlertProvider>
  );
};
