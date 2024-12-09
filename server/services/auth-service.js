import ApiError from "../exceptions/api-error.js";
import { verifyToken, signToken } from "./token-service.js";

class AuthService {
  async validate(req) {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) throw ApiError.BadRequest("No token provided");

    const { data: user } = verifyToken(token);

    if (!user) throw ApiError.BadRequest("User is not verified");

    return user;
  }

  async setToken(res, user) {
    const token = signToken(user);
    res.set("Authorization", `Bearer ${token}`);
  }
}

const authService = new AuthService();
export default authService;
