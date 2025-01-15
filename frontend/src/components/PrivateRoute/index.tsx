import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { LoadingAuth } from "@/components/LoadingAuth";
import { useAuthentication } from "./hooks/useAuthentication";
import { PrivateRouteProps } from "./types/PrivateRoute.types";

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { logged } = useAuthentication();
  const location = useLocation();

  if (logged === null) return <LoadingAuth />;

  if (logged === "logged") {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export { PrivateRoute };
