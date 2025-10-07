import jwt from "jsonwebtoken";
import { ENV } from "../config/env.config";

export const generateToken = (payload: object) =>
  jwt.sign(payload, ENV.JWT_SECRET, { expiresIn: "3d" });
