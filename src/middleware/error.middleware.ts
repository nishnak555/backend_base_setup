import { StatusCodes, ReasonPhrases } from "http-status-codes";
import { Request, Response, NextFunction } from "express";
import { logger } from "../config/logger.config";

export const errorMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = err.status || StatusCodes.INTERNAL_SERVER_ERROR;
  const message = err.message || ReasonPhrases.INTERNAL_SERVER_ERROR;

  logger.error(err.stack || message);

  res.status(status).json({
    status: "error",
    message,
  });
};
