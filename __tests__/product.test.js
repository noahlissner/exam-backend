const request = require("supertest");
const app = require("../app");

describe("POST /api/admin/products/create", () => {
  it("should return all products", async () => {
    const res = await request(app).get("/api/admin/products/getall");
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining("json"));
  });
});

describe("POST /api/admin/products/create", () => {
  it("should create a new product", async () => {
    const res = await request(app)
      .post("/api/admin/products/create")
      .send({
        data: {
          title: "testTitle",
          img: "imgURL",
          category: "testCategory",
          price: 1234,
          published: false,
        },
      });
    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe("testTitle");
  });
});
