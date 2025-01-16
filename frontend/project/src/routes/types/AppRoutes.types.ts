export type RouteConfig = {
  path: string;
  component: React.ReactNode;
  routeGuard?: React.ComponentType<{ children: React.ReactNode }>;
};
