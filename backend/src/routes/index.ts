import { Router } from "express";

import ApiRoutes from "./Api";
import OAuthRoutes from "./OAuth";
// import UserRoutes from "./User";

class Routes {
  public routes: Router;

  constructor() {
    this.routes = Router();
    this.endpoints();
  }

  private endpoints(): void {
    this.routes.use("/", ApiRoutes);
    this.routes.use("/oauth", OAuthRoutes);
    // this.routes.use("/user", UserRoutes);
  }
}

export default new Routes().routes;
