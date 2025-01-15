import React from "react";
import { Logo } from "@/components/Logo";
import { CgLogOut } from "react-icons/cg";

export const Navbar: React.FC = () => {
  const handleLogout = () => {};

  return (
    <nav className="bg-white border-b border-base-200">
      <div className="min-h-20 flex items-center justify-between px-4 md:px-8">
        <Logo size="h-6" />
        <button
          onClick={handleLogout}
          className="flex items-center justify-center space-x-2 text-primary font-semibold hover:text-slate-900 outline-none"
        >
          <CgLogOut className="text-2xl" />
          <span className="hidden md:inline-block">Sair</span>
        </button>
      </div>
    </nav>
  );
};
