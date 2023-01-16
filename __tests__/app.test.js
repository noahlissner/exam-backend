const app = require("../app");
const request = require("supertest");

describe("Test the root path", () => {
  it("should response the GET method", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toEqual(200);
  });
});
