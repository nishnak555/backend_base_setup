import { User } from "../models/user.model";

export class UserDAO {
  static async findByEmail(email: string) {
    return await User.findOne({ where: { email } });
  }

  static async createUser(name: string, email: string, password: string) {
    return await User.create({ name, email, password });
  }
}
