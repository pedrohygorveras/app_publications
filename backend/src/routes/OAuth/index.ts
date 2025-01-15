import express, { Router } from "express";

import { body, header } from "express-validator";

import OAuthController from "../../controllers/OAuth";

class OAuthRoutes {
  public routes: Router;

  constructor() {
    this.routes = express.Router();
    this.endpoints();
  }

  private endpoints(): void {
    this.routes.post(
      "/login",
      [
        body("email").notEmpty().withMessage("email is required"),
        body("password").notEmpty().withMessage("password is required"),
      ],
      OAuthController.login
    );

    this.routes.post(
      "/register",
      [
        body("name").notEmpty().withMessage("name is required"),
        body("email").notEmpty().withMessage("email is required"),
        body("password").notEmpty().withMessage("password is required"),
      ],
      OAuthController.register
    );

    this.routes.post(
      "/refresh-token",
      [body("refreshToken").notEmpty().withMessage("refreshToken is required")],
      OAuthController.refreshToken
    );
  }
}

export default new OAuthRoutes().routes;
