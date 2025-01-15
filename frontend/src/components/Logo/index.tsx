import React from "react";
import logo from "@/assets/logo-white.svg";

type LogoProps = {
  size?: string;
};

export const Logo: React.FC<LogoProps> = ({ size = "h-10" }) => {
  return <img src={logo} alt="Logo" className={`${size} w-auto`} />;
};
