import { StatusCodes, ReasonPhrases } from "http-status-codes";

export const ERROR_CODES = {
  BAD_REQUEST: StatusCodes.BAD_REQUEST,
  UNAUTHORIZED: StatusCodes.UNAUTHORIZED,
  FORBIDDEN: StatusCodes.FORBIDDEN,
  NOT_FOUND: StatusCodes.NOT_FOUND,
  INTERNAL_ERROR: StatusCodes.INTERNAL_SERVER_ERROR,
};
