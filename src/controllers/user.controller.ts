import { Request, Response, NextFunction } from "express";
import { UserService } from "../services/user.service";
import { successResponse } from "../utils/response.util";
import { MESSAGES } from "../constants/messages";

export class UserController {
  static async register(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, email, password } = req.body;
      const user = await UserService.register(name, email, password);
      successResponse(res, MESSAGES.USER_CREATED, user);
    } catch (err) {
      next(err);
    }
  }

  static async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      console.log("hooo")
      const result = await UserService.login(email, password);
      successResponse(res, MESSAGES.LOGIN_SUCCESS, result);
    } catch (err) {
      next(err);
    }
  }
}
