import dotenv from "dotenv";
dotenv.config();

export const ENV = {
  PORT: process.env.PORT || 5000,
  DB_NAME: process.env.DB_NAME || "app_db",
  DB_USER: process.env.DB_USER || "root",
  DB_PASS: process.env.DB_PASS || "",
  DB_HOST: process.env.DB_HOST || "localhost",
  JWT_SECRET: process.env.JWT_SECRET || "supersecret",
};
