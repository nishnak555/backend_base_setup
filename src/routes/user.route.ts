import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { userSchema } from "../validations/user.validation";
import { validate } from "../middleware/validate.middleware";

const router = Router();

router.post("/register", validate(userSchema), UserController.register);
router.post("/login", UserController.login);

export default router;
