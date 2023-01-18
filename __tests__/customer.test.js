const request = require("supertest");
const app = require("../app");

describe("GET /api/admin/customers/getall", () => {
  it("should return all customers", async () => {
    const res = await request(app).get("/api/admin/customers/getall");
    expect(res.statusCode).toBe(200);
    expect(res.type).toEqual(expect.stringContaining("json"));
  });
});

describe("POST /api/admin/customers/create", () => {
  it("should create a new customer", async () => {
    const res = await request(app)
      .post("/api/admin/customers/create")
      .send({
        data: {
          name: "testName",
          email: "testEmail",
          street: "testStreet",
          zip: 1234,
          city: "testCity",
        },
      });
    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe("testName");
  });
});

describe("POST /api/admin/customers/remove", () => {
  it("should create a new customer", async () => {
    const res = await request(app)
      .post("/api/admin/customers/create")
      .send({
        data: {
          name: "testName",
          email: "testEmail",
          street: "testStreet",
          zip: 1234,
          city: "testCity",
        },
      });
    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe("testName");
  });
});
