import userService from "../services/user-service.js";
import authService from "../services/auth-service.js";

class AuthController {
  authenticate = async (req, res) => {
    try {
      const user = await authService.validate(req);
      await authService.setToken(res, user);
      res.json(user);
    } catch (e) {
      const guest = await userService.createGuest();
      await authService.setToken(res, guest);
      res.json(guest);
    }
  };
}

const authController = new AuthController();
export default authController;
