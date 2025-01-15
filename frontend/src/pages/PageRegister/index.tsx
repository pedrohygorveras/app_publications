import React from "react";
import { ContainerAuth } from "@/components/ContainerAuth";
import { RegisterForm } from "@/components/RegisterForm";
import { Logo } from "@/components/Logo";

export const PageRegister: React.FC = () => {
  return (
    <ContainerAuth>
      <div className="flex flex-col items-center mb-12">
        <Logo />
      </div>
      <RegisterForm />
    </ContainerAuth>
  );
};
