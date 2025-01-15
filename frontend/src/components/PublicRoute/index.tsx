import React from "react";

import { Navigate, useLocation } from "react-router-dom";

import { PublicRouteProps } from "./types/PublicRoute.types";
import { useAuthContext } from "@/contexts/Auth/useContext";

const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  const { user } = useAuthContext();
  const location = useLocation();

  if (user) {
    return <Navigate to="/home" state={{ from: location }} replace />;
  }

  return children;
};

export { PublicRoute };
