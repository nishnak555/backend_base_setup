import { Router } from "express";
import userRoutes from "./user.route";
import healthRoute from "./health";


const router = Router();
router.use("/users", userRoutes);
router.use("/health", healthRoute);

export default router;
