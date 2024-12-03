import con from "../db.js";
import ApiError from "../exceptions/api-error.js";
import getGame from "./game-info.js";
import { io } from "../socket.js";

class PlayerService {
  async create(userId, gameId) {
    const [users] = await con.query(
      `SELECT name, picture FROM user WHERE user_id = ?`,
      [userId]
    );

    if (!users.length) throw ApiError.BadRequest("User was not found!");

    await con.query(`INSERT INTO player (user_id, game_id) VALUES (?, ?)`, [
      userId,
      gameId,
    ]);

    return {
      userId,
      name: users[0].name,
      picture: users[0].picture,
      solved: 0,
      mistakes: 0,
      cells: [],
    };
  }

  async join(userId, gameId) {
    const game = await getGame(gameId);

    if (game.visibility === "none" && userId !== game.ownerId)
      throw ApiError.BadRequest("You cannot join this game!");

    if (!game.players[userId]) {
      if (Object.keys(game.players).length > 9)
        throw ApiError.BadRequest("The game is full!");

      const newPlayer = await this.create(userId, gameId);

      game.players[userId] = newPlayer;

      io.to(gameId).emit("addPlayer", newPlayer);
    }

    if (game.startTime) {
      const board = Array.from({ length: 9 }, () =>
        Array(9).fill({ value: 0 })
      );

      for (let i = 0; i < 81; i++) {
        const row = Math.floor(i / 9);
        const col = i % 9;
        if (Number(game.initialBoard[i]))
          board[row][col] = {
            value: Number(game.initialBoard[i]),
            correct: true,
            initial: true,
          };
      }

      for (let i = 0; i < game.players[userId].cells.length; i++) {
        const { row, col, val } = game.players[userId].cells[i];
        board[row][col] = { value: Number(val), correct: true };
      }

      game.board = board;
    }

    game.players = Object.values(game.players);

    delete game.initialBoard;

    return game;
  }
}

const playerService = new PlayerService();
export default playerService;
