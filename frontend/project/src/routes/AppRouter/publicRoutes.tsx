import { PublicRoute } from "@/components/PublicRoute";

import { PageLogin } from "@/pages/PageLogin";
import { PageRegister } from "@/pages/PageRegister";
import { PageResetPassword } from "@/pages/PageResetPassword";

export const publicRoutes = [
  {
    path: "/login",
    component: <PageLogin />,
    routeGuard: PublicRoute,
  },
  {
    path: "/register",
    component: <PageRegister />,
    routeGuard: PublicRoute,
  },
  {
    path: "/reset-password",
    component: <PageResetPassword />,
    routeGuard: PublicRoute,
  },
];
