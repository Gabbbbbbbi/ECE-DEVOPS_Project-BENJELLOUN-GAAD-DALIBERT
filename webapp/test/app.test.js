const request = require("supertest");
const app = require("../src/app");

describe("Web application tests", () => {
  test("GET / should return CV page with image", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain("<img");
  });

  test("GET /health should return status ok", async () => {
    const res = await request(app).get("/health");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ status: "ok" });
  });
});