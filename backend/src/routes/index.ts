import { Router } from "express";

import ApiRoutes from "./Api";
import SwaggerRoutes from "./SwaggerRoutes";
import OAuthRoutes from "./OAuth";
import PublicationRoutes from "./Publication";

class Routes {
  public routes: Router;

  constructor() {
    this.routes = Router();
    this.endpoints();
  }

  private endpoints(): void {
    this.routes.use("/", ApiRoutes);
    this.routes.use("/", SwaggerRoutes);
    this.routes.use("/oauth", OAuthRoutes);
    this.routes.use("/publication", PublicationRoutes);
  }
}

export default new Routes().routes;
