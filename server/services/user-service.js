import connection from "../db.js";
import ApiError from "../exceptions/api-error.js";
import generateRandomUser from "../utils/generateRandomUser.js";

class UserService {
  async createGuest() {
    const { name, picture } = generateRandomUser();

    const [result] = await connection.query(
      "INSERT INTO user (name, picture) VALUES (?, ?)",
      [name, picture]
    );
    const userId = result.insertId;

    return { userId, name, picture };
  }

  async get(userId) {
    const [users] = await connection.query(
      "SELECT * FROM user WHERE user_id = ?",
      [userId]
    );

    if (!users.length) throw ApiError.BadRequest("User was not found!");

    return { name: users[0].name, picture: users[0].picture };
  }
}

const userService = new UserService();
export default userService;
