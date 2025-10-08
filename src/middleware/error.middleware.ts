import { Request, Response, NextFunction } from "express";
import { logger } from "../config/logger.config";

export const errorMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Log full stack (includes file:line)
  logger.error(err.stack || err.message || JSON.stringify(err));

  res.status(err.status || 500).json({
    status: "error",
    message: err.message || "Internal Server Error",
  });
};
