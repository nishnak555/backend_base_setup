import request from "supertest";
import app from "../../src/app";

describe("Health Route", () => {
  it("should return 200 for GET /api/health", async () => {
    const response = await request(app).get("/api/health");
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Server is healthy"); // ✅ matches the actual message
    expect(response.body.status).toBe("OK"); // optional extra check
  });
});
