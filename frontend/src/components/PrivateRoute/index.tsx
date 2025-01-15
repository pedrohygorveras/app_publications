import React from "react";
import { LoadingAuth } from "@/components/LoadingAuth";
import { useAuthentication } from "./hooks/useAuthentication";
import { PrivateRouteProps } from "./types/PrivateRoute.types";

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { loading } = useAuthentication();

  if (loading) return <LoadingAuth />;

  return children;
};

export { PrivateRoute };
