import { PrivateRoute } from "@/components/PrivateRoute";

import { PageHome } from "@/pages/PageHome";

export const privateRoutes = [
  {
    path: "/home",
    component: <PageHome />,
    routeGuard: PrivateRoute,
  },
];
