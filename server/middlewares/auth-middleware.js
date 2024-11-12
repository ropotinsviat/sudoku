import authService from "../services/auth-service.js";
import ApiError from "../exceptions/api-error.js";

export default async function authMiddleware(req, res, next) {
  try {
    const user = await authService.validate(req);
    await authService.setToken(res, user);
    req.userId = user.userId;

    return next();
  } catch (e) {
    console.log(e.message);
  }
  next(ApiError.BadRequest("Not authenticated!"));
}
