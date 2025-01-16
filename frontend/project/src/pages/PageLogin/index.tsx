import React from "react";
import { ContainerAuth } from "@/components/ContainerAuth";
import { LoginForm } from "@/components/LoginForm";
import { Logo } from "@/components/Logo";

export const PageLogin: React.FC = () => {
  return (
    <ContainerAuth>
      <div className="flex flex-col items-center mb-12">
        <Logo />
      </div>
      <LoginForm />
    </ContainerAuth>
  );
};
