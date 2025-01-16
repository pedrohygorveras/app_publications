import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

class SwaggerConfig {
  private options: swaggerJsdoc.Options;
  private swaggerSpec: object;
  private router: express.Router;

  constructor() {
    this.options = {
      definition: {
        openapi: "3.0.0",
        info: {
          title: "API Documentation",
          version: "1.0.0",
          description: this.getDescription(),
        },
        servers: [
          {
            url: "https://backend.pedrohygorveras.ip-ddns.com/",
            description: "Production",
          },
          {
            url: "http://3.143.224.130:3021/",
            description: "Develop",
          },
          {
            url: "http://localhost:3021/",
            description: "Local server",
          },
        ],
        components: {
          securitySchemes: {
            bearerAuth: {
              type: "http",
              scheme: "bearer",
              bearerFormat: "JWT",
            },
          },
        },
        security: [
          {
            bearerAuth: [],
          },
        ],
        tags: [
          { name: "Auth", description: "Operations related to auth" },
          {
            name: "Publication",
            description: "Operations related to publications",
          },
        ],
      },
      apis: ["./src/routes/**/*.ts"],
    };

    this.swaggerSpec = swaggerJsdoc(this.options);
    this.router = express.Router();
    this.initializeRoutes();
  }

  private getDescription(): string {
    return "<p>Este projeto tem como objetivo criar um sistema para automação, gerenciamento e processamento de publicações extraídas do Diário da Justiça Eletrônico (DJE) de São Paulo. Ele é dividido em (Python/Node.js) e Frontend (React), oferecendo uma interface intuitiva baseada em Kanban.</p>";
  }

  private initializeRoutes(): void {
    this.router.use(
      "/docs",
      swaggerUi.serve,
      swaggerUi.setup(this.swaggerSpec)
    );
  }

  public getRouter(): express.Router {
    return this.router;
  }
}

export default new SwaggerConfig().getRouter();
