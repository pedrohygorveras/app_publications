"use strict";

import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import cors from "cors";
import http from "http";

import env from "../environments";

import routes from "./routes";
import { AppError } from "./errors/AppError";

class App {
  public app: express.Application;
  public server: http.Server;

  constructor() {
    this.app = express();
    this.server = http.createServer(this.app);

    this.middlewares();
    this.virtualization();
    this.routes();
    this.error();
    this.run();
  }

  private middlewares(): void {
    this.app.use(cors());

    this.app.use(express.json({ limit: "50mb" }));
    this.app.use(express.urlencoded({ limit: "50mb", extended: true }));
  }

  private virtualization(): void {
    this.app.use(express.static(__dirname + "/public/"));
  }

  private routes(): void {
    this.app.use(routes);
  }

  private error(): void {
    this.app.use(
      (
        err: Error,
        request: Request,
        response: Response,
        next: NextFunction
      ) => {
        if (err instanceof AppError) {
          return response
            .status(err.statusCode)
            .json({ status: "error", message: err.message });
        }

        return response.status(500).json({
          status: "error",
          message: `Internal Server Error`,
        });
      }
    );
  }

  private run(): void {
    const APP_PORT: number = parseInt(env.APP_PORT) || 3021;
    const APP_HOST: string = env.APP_HOST || "0.0.0.0";

    this.app.listen(APP_PORT, APP_HOST, () => {
      console.log(`Server is running in PORT ${APP_PORT}.`);
    });
  }

  public close(): void {
    this.server.close();
  }
}

export default new App().server;
