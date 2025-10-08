import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { validate } from "../middleware/validate.middleware";
import { registerSchema, loginSchema } from "../validations/user.validation";

const router = Router();

/**
 * @swagger
 * /api/users/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Users]
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
 *                 example: "Nishank Pathak"
 *               email:
 *                 type: string
 *                 example: "nishank@example.com"
 *               password:
 *                 type: string
 *                 example: "123456"
 *     responses:
 *       200:
 *         description: User registered successfully
 *       400:
 *         description: Invalid request
 */
router.post("/register", validate(registerSchema), UserController.register);

/**
 * @swagger
 * /api/users/login:
 *   post:
 *     summary: Login existing user
 *     tags: [Users]
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
 *                 example: "nishank@example.com"
 *               password:
 *                 type: string
 *                 example: "123456"
 *     responses:
 *       200:
 *         description: Login successful
 *       401:
 *         description: Invalid credentials
 */
router.post("/login", validate(loginSchema), UserController.login);

export default router;
