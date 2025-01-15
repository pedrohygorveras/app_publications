import express, { Router } from "express";
import { body } from "express-validator";
import OAuthController from "../../controllers/OAuth";

class OAuthRoutes {
  public routes: Router;

  constructor() {
    this.routes = express.Router();
    this.endpoints();
  }

  private endpoints(): void {
    /**
     * @swagger
     * /oauth/login:
     *   post:
     *     summary: Log in a user
     *     tags: [Auth]
     *     description: Authenticate a user with email and password.
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             required:
     *               - email
     *               - password
     *             properties:
     *               email:
     *                 type: string
     *                 format: email
     *                 description: The email address of the user
     *                 example: user@example.com
     *               password:
     *                 type: string
     *                 format: password
     *                 description: The password of the user
     *                 example: password123
     *     responses:
     *       200:
     *         description: User logged in successfully
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 token:
     *                   type: string
     *                   description: The JWT token
     *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
     *       400:
     *         description: Bad Request
     *       500:
     *         description: Internal Server Error
     */
    this.routes.post(
      "/login",
      [
        body("email").notEmpty().withMessage("email is required"),
        body("password").notEmpty().withMessage("password is required"),
      ],
      OAuthController.login
    );

    /**
     * @swagger
     * /oauth/register:
     *   post:
     *     summary: Register a new user
     *     tags: [Auth]
     *     description: Register a new user with name, email, and password.
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             required:
     *               - name
     *               - email
     *               - password
     *             properties:
     *               name:
     *                 type: string
     *                 description: The name of the user
     *                 example: John Doe
     *               email:
     *                 type: string
     *                 format: email
     *                 description: The email address of the user
     *                 example: user@example.com
     *               password:
     *                 type: string
     *                 format: password
     *                 description: The password of the user, minimum length 8 characters
     *                 example: password123
     *     responses:
     *       201:
     *         description: User registered successfully
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 message:
     *                   type: string
     *                   example: User registered successfully
     *                 user:
     *                   type: object
     *                   properties:
     *                     id:
     *                       type: string
     *                       example: 671f77672d0b2f1c584cc1bd
     *                     email:
     *                       type: string
     *                       example: user@example.com
     *       400:
     *         description: Bad Request
     *       500:
     *         description: Internal Server Error
     */
    this.routes.post(
      "/register",
      [
        body("name").notEmpty().withMessage("name is required"),
        body("email").notEmpty().withMessage("email is required"),
        body("password").notEmpty().withMessage("password is required"),
      ],
      OAuthController.register
    );

    /**
     * @swagger
     * /oauth/refresh-token:
     *   post:
     *     summary: Refresh JWT token
     *     tags: [Auth]
     *     description: Refresh the JWT token using a valid refresh token.
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             required:
     *               - refreshToken
     *             properties:
     *               refreshToken:
     *                 type: string
     *                 description: The refresh token
     *                 example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
     *     responses:
     *       200:
     *         description: Token refreshed successfully
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 token:
     *                   type: string
     *                   description: The new JWT token
     *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
     *       400:
     *         description: Bad Request
     *       500:
     *         description: Internal Server Error
     */
    this.routes.post(
      "/refresh-token",
      [body("refreshToken").notEmpty().withMessage("refreshToken is required")],
      OAuthController.refreshToken
    );
  }
}

export default new OAuthRoutes().routes;
