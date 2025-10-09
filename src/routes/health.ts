import { Router, Request, Response } from "express";

const router = Router();

/**
 * GET /health
 * Simple health check route
 */
router.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    status: "OK",
    message: "Server is healthy",
    timestamp: new Date().toISOString(),
  });
});

export default router;
