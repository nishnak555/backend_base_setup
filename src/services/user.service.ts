import { UserDAO } from "../dao/user.dao";
import { hashPassword, comparePassword } from "../utils/bcrypt.util";
import { generateToken } from "../utils/token.util";
import { MESSAGES } from "../constants/messages";

export class UserService {
  static async register(name: string, email: string, password: string) {
    const existingUser = await UserDAO.findByEmail(email);
    if (existingUser) throw new Error(MESSAGES.USER_EXISTS);

    const hashed = await hashPassword(password);
    const user = await UserDAO.createUser(name, email, hashed);
    return user;
  }

  static async login(email: string, password: string) {
    const user = await UserDAO.findByEmail(email);
    if (!user) throw new Error(MESSAGES.INVALID_CREDENTIALS);

    const hashedPassword = user.getDataValue("password");
    if (!hashedPassword) throw new Error("User has no password set");

    const match = await comparePassword(password, hashedPassword);
    if (!match) throw new Error(MESSAGES.INVALID_CREDENTIALS);

    const token = generateToken({ id: user.id, email: user.email });
    return { user, token };
  }
}
