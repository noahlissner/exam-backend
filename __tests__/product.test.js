const request = require("supertest");
const app = require("../app");

describe("Test the product route", () => {
  it("should return all products", async () => {
    const res = await request(app).get("/api/admin/products/getall");
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining("json"));
  });
});
