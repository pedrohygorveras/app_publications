import express, { Router } from "express";
import { body, param } from "express-validator";
import PublicationController from "../../controllers/Publication";
import { authMiddleware } from "../../middlewares/auth";

class PublicationRoutes {
  public routes: Router;

  constructor() {
    this.routes = express.Router();
    this.endpoints();
  }

  private endpoints(): void {
    /**
     * @swagger
     * /publication:
     *   post:
     *     summary: Create a new publication
     *     tags: [Publication]
     *     security:
     *       - bearerAuth: []
     *     description: Add a new publication with the given details.
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               process_number:
     *                 type: string
     *                 description: The process number of the publication
     *                 example: "12345"
     *               publication_date:
     *                 type: string
     *                 format: date-time
     *                 description: The date of the publication
     *                 example: "2025-01-15T00:00:00Z"
     *               author:
     *                 type: string
     *                 description: The author of the publication
     *                 example: "John Doe"
     *               lawyer:
     *                 type: string
     *                 description: The lawyer associated with the publication
     *                 example: "Jane Smith"
     *               content:
     *                 type: string
     *                 description: The content of the publication
     *                 example: "This is the content of the publication."
     *               principal_value:
     *                 type: number
     *                 format: decimal
     *                 description: The principal value
     *                 example: 1000.50
     *               interest_value:
     *                 type: number
     *                 format: decimal
     *                 description: The interest value
     *                 example: 50.75
     *               lawyer_fees:
     *                 type: number
     *                 format: decimal
     *                 description: The lawyer fees
     *                 example: 200.00
     *     responses:
     *       201:
     *         description: Publication created successfully
     *       400:
     *         description: Bad Request
     *       500:
     *         description: Internal Server Error
     */
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
      authMiddleware,
      PublicationController.create
    );

    /**
     * @swagger
     * /publication:
     *   get:
     *     summary: Get all publications
     *     tags: [Publication]
     *     security:
     *       - bearerAuth: []
     *     description: Retrieve all publications with optional filters.
     *     parameters:
     *       - in: query
     *         name: limit
     *         schema:
     *           type: integer
     *           default: 25
     *         description: Number of publications to retrieve per page
     *       - in: query
     *         name: index
     *         schema:
     *           type: integer
     *           default: 0
     *         description: Index of the page to retrieve
     *       - in: query
     *         name: search
     *         schema:
     *           type: string
     *         description: Search term for process numbers
     *       - in: query
     *         name: start_date
     *         schema:
     *           type: string
     *           format: date
     *         description: Filter for publications starting from this date
     *       - in: query
     *         name: end_date
     *         schema:
     *           type: string
     *           format: date
     *         description: Filter for publications ending at this date
     *     responses:
     *       200:
     *         description: List of publications retrieved successfully
     *       400:
     *         description: Bad Request
     *       500:
     *         description: Internal Server Error
     */
    this.routes.get("/", authMiddleware, PublicationController.getAll);

    /**
     * @swagger
     * /publication/{id}:
     *   get:
     *     summary: Get a publication by ID
     *     tags: [Publication]
     *     security:
     *       - bearerAuth: []
     *     description: Retrieve a specific publication by its ID.
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *           format: uuid
     *         description: The ID of the publication to retrieve
     *     responses:
     *       200:
     *         description: Publication retrieved successfully
     *       404:
     *         description: Publication not found
     *       500:
     *         description: Internal Server Error
     */
    this.routes.get(
      "/:id",
      [param("id").isUUID().withMessage("Invalid ID format")],
      authMiddleware,
      PublicationController.get
    );

    /**
     * @swagger
     * /publication/{id}:
     *   patch:
     *     summary: Update a publication
     *     tags: [Publication]
     *     security:
     *       - bearerAuth: []
     *     description: Update a publication by its ID.
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *           format: uuid
     *         description: The ID of the publication to update
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               process_number:
     *                 type: string
     *               publication_date:
     *                 type: string
     *                 format: date-time
     *               author:
     *                 type: string
     *               lawyer:
     *                 type: string
     *               content:
     *                 type: string
     *               principal_value:
     *                 type: number
     *                 format: decimal
     *               interest_value:
     *                 type: number
     *                 format: decimal
     *               lawyer_fees:
     *                 type: number
     *                 format: decimal
     *               defendant:
     *                 type: string
     *               status:
     *                 type: string
     *     responses:
     *       200:
     *         description: Publication updated successfully
     *       400:
     *         description: Bad Request
     *       500:
     *         description: Internal Server Error
     */
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
      authMiddleware,
      PublicationController.update
    );

    /**
     * @swagger
     * /publication/{id}:
     *   delete:
     *     summary: Delete a publication
     *     tags: [Publication]
     *     security:
     *       - bearerAuth: []
     *     description: Delete a publication by its ID.
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *           format: uuid
     *         description: The ID of the publication to delete
     *     responses:
     *       204:
     *         description: Publication deleted successfully
     *       404:
     *         description: Publication not found
     *       500:
     *         description: Internal Server Error
     */
    this.routes.delete(
      "/:id",
      [param("id").isUUID().withMessage("Invalid ID format")],
      authMiddleware,
      PublicationController.delete
    );
  }
}

export default new PublicationRoutes().routes;
