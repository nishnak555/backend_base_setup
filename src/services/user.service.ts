import { User } from "../models/user.model";
import { hashPassword, comparePassword } from "../utils/bcrypt.util";
import { generateToken } from "../utils/token.util";
import { MESSAGES } from "../constants/messages";

export class UserService {
  static async register(name: string, email: string, password: string) {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) throw new Error(MESSAGES.USER_EXISTS);

    const hashed = await hashPassword(password);
    const user = await User.create({ name, email, password: hashed });
    return user;
  }

  static async login(email: string, password: string) {
    const user = await User.findOne({ where: { email } });
    if (!user) throw new Error(MESSAGES.INVALID_CREDENTIALS);

    const match = await comparePassword(password, user.password);
    if (!match) throw new Error(MESSAGES.INVALID_CREDENTIALS);

    const token = generateToken({ id: user.id, email: user.email });
    return { user, token };
  }
}
