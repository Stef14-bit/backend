const request = require("supertest");
const app = require("../../app");

describe("User Routes", () => {
  describe("POST /users", () => {
    test("should create a new user with valid input", async () => {
      const user = {
        email: "test@example.com",
        password: "Test1234!",
        role_id: "1",
        image: "https://example.com/image.png",
        full_name: "Test User",
        username: "testuser",
      };

      const response = await request(app).post("/users").send(user);

      expect(response.status).toBe(201);
      expect(response.body.email).toBe(user.email);
      expect(response.body.role_id).toBe(user.role_id);
      expect(response.body.image).toBe(user.image);
      expect(response.body.full_name).toBe(user.full_name);
      expect(response.body.username).toBe(user.username);
    });

    test("should return a 422 error with invalid input", async () => {
      const user = {
        email: "not_an_email",
        password: "shortpw",
        role_id: "",
        image: 123, // not a string
        full_name: "",
        username: "t", // too short
      };

      const response = await request(app).post("/users").send(user);

      expect(response.status).toBe(422);
      expect(response.body.validationErrors).toHaveLength(7);
      expect(response.body.validationErrors[0].param).toBe("email");
      expect(response.body.validationErrors[0].msg).toBe(
        "Please provide a valid email address"
      );
      expect(response.body.validationErrors[1].param).toBe("password");
      expect(response.body.validationErrors[1].msg).toBe(
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one symbol"
      );
      expect(response.body.validationErrors[2].param).toBe("role_id");
      expect(response.body.validationErrors[2].msg).toBe("Invalid value");
      expect(response.body.validationErrors[3].param).toBe("image");
      expect(response.body.validationErrors[3].msg).toBe("Invalid value");
      expect(response.body.validationErrors[4].param).toBe("full_name");
      expect(response.body.validationErrors[4].msg).toBe(
        "Invalid value"
      );
      expect(response.body.validationErrors[5].param).toBe("username");
      expect(response.body.validationErrors[5].msg).toBe(
        "Invalid value"
      );
    });
  });
