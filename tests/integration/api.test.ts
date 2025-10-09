import request from "supertest";
import app from "../../src/app";
import { sequelize } from "../../src/config/db.config";
import { MESSAGES } from "../../src/constants/messages";

describe("Integration Tests - User API", () => {
  beforeAll(async () => {
    // Sync database and reset tables
    await sequelize.sync({ force: true });
  });

  afterAll(async () => {
    // Close database connection after all tests
    await sequelize.close();
  });

  describe("POST /users/register", () => {
    it("should create a new user successfully", async () => {
      const res = await request(app).post("/users/register").send({
        name: "John Doe",
        email: "john@example.com",
        password: "123456",
      });

      expect(res.status).toBe(200);
      expect(res.body.message).toBe(MESSAGES.USER_CREATED);
      expect(res.body.data).toHaveProperty("id");
      expect(res.body.data.email).toBe("john@example.com");
    });

    it("should fail when registering with duplicate email", async () => {
      const res = await request(app).post("/users/register").send({
        name: "John Doe",
        email: "john@example.com",
        password: "123456",
      });

      expect(res.status).toBe(400);
      expect(res.body.message).toBe(MESSAGES.USER_EXISTS);
    });
  });

  describe("POST /users/login", () => {
    it("should login successfully with correct credentials", async () => {
      const res = await request(app).post("/users/login").send({
        email: "john@example.com",
        password: "123456",
      });

      expect(res.status).toBe(200);
      expect(res.body.message).toBe(MESSAGES.LOGIN_SUCCESS);
      expect(res.body.data).toHaveProperty("token");
      expect(res.body.data.user).toHaveProperty("email", "john@example.com");
    });

    it("should fail login with incorrect password", async () => {
      const res = await request(app).post("/users/login").send({
        email: "john@example.com",
        password: "wrongpassword",
      });

      expect(res.status).toBe(401);
      expect(res.body.message).toBe(MESSAGES.INVALID_CREDENTIALS);
    });

    it("should fail login for non-existent user", async () => {
      const res = await request(app).post("/users/login").send({
        email: "nonexistent@example.com",
        password: "123456",
      });

      expect(res.status).toBe(401);
      expect(res.body.message).toBe(MESSAGES.INVALID_CREDENTIALS);
    });
  });
});
