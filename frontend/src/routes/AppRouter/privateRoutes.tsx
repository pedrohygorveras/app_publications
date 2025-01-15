import { Navigate } from "react-router-dom";

import { PrivateRoute } from "@/components/PrivateRoute";

import { PageHome } from "@/pages/PageHome";

export const privateRoutes = [
  {
    path: "/wait-list",
    component: <PageHome />,
    routeGuard: PrivateRoute,
  },
  {
    path: "/dashboard/*",
    component: <Navigate to="/dashboard/home" />,
  },
];
