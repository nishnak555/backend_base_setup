import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/db.config";
import { IUser } from "../interfaces"; // ✅ imported from index.ts

type UserCreationAttributes = Optional<IUser, "id">;

export class User extends Model<IUser, UserCreationAttributes> implements IUser {
  public id!: number;
  public name!: string;
  public email!: string;
  public password!: string;
}

User.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
  },
  {
    sequelize,
    tableName: "users",
    timestamps: true,
  }
);
