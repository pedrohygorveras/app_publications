import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { publicRoutes } from "./publicRoutes";
import { privateRoutes } from "./privateRoutes";

import { RouteConfig } from "../types/AppRoutes.types";

const renderRoutes = (routes: RouteConfig[]) =>
  routes.map(({ path, component, routeGuard: RouteGuard }, index) => (
    <Route
      key={index}
      path={path}
      element={RouteGuard ? <RouteGuard>{component}</RouteGuard> : component}
    />
  ));

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {renderRoutes(publicRoutes)}
        {renderRoutes(privateRoutes)}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
};

export { AppRouter };
