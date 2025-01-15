import express, { Router } from "express";
import { body, param } from "express-validator";
import PublicationController from "../../controllers/Publication";

class PublicationRoutes {
  public routes: Router;

  constructor() {
    this.routes = express.Router();
    this.endpoints();
  }

  private endpoints(): void {
    this.routes.post(
      "/",
      [
        body("process_number")
          .optional()
          .isString()
          .withMessage("Must be a string"),
        body("publication_date")
          .optional()
          .isISO8601()
          .withMessage("Invalid date"),
        body("author")
          .optional()
          .isString()
          .withMessage("Author must be a string"),
        body("lawyer")
          .optional()
          .isString()
          .withMessage("Lawyer must be a string"),
        body("content")
          .optional()
          .isString()
          .withMessage("Content must be a string"),
        body("principal_value")
          .optional()
          .isDecimal()
          .withMessage("Must be a decimal"),
        body("interest_value")
          .optional()
          .isDecimal()
          .withMessage("Must be a decimal"),
        body("lawyer_fees")
          .optional()
          .isDecimal()
          .withMessage("Must be a decimal"),
      ],
      PublicationController.create
    );

    this.routes.get("/", PublicationController.getAll);

    this.routes.get(
      "/:id",
      [param("id").isUUID().withMessage("Invalid ID format")],
      PublicationController.get
    );

    this.routes.patch(
      "/:id",
      [
        param("id").isUUID().withMessage("Invalid ID format"),
        body("process_number")
          .optional()
          .isString()
          .withMessage("Must be a string"),
        body("publication_date")
          .optional()
          .isISO8601()
          .withMessage("Invalid date"),
        body("author")
          .optional()
          .isString()
          .withMessage("Author must be a string"),
        body("lawyer")
          .optional()
          .isString()
          .withMessage("Lawyer must be a string"),
        body("content")
          .optional()
          .isString()
          .withMessage("Content must be a string"),
        body("principal_value")
          .optional()
          .isDecimal()
          .withMessage("Must be a decimal"),
        body("interest_value")
          .optional()
          .isDecimal()
          .withMessage("Must be a decimal"),
        body("lawyer_fees")
          .optional()
          .isDecimal()
          .withMessage("Must be a decimal"),
        body("defendant")
          .optional()
          .isString()
          .withMessage("Defendant must be a string"),
        body("status").optional().isString().withMessage("Invalid status"),
      ],
      PublicationController.update
    );

    this.routes.delete(
      "/:id",
      [param("id").isUUID().withMessage("Invalid ID format")],
      PublicationController.delete
    );
  }
}

export default new PublicationRoutes().routes;
