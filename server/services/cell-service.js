import con from "../db.js";
import ApiError from "../exceptions/api-error.js";
import gameService from "./game-service.js";
import { io } from "../socket.js";
import { removedByDifficulty } from "./game-info.js";

class CellService {
  async put(userId, gameId, cellData) {
    const { row, col, val } = cellData;

    const game = await gameService.get(gameId);

    const [players] = await con.query(
      `SELECT p.player_id AS playerId, COUNT(c.cell_id) AS cellsCount 
        FROM player p
        LEFT JOIN cell c ON p.player_id = c.player_id 
        WHERE p.game_id = ? AND p.user_id = ?
        GROUP BY p.player_id`,
      [gameId, userId]
    );

    if (!players.length) throw ApiError.BadRequest("Player was not found!");

    const { playerId, cellsCount } = players[0];

    let correct = true,
      completionTime;

    if (Number(game.solved_board[row * 9 + col]) !== val) {
      correct = false;
      await con.query(
        `UPDATE player SET mistakes = mistakes + 1 WHERE player_id = ?`,
        [playerId]
      );
    } else {
      await con.query(
        `INSERT INTO cell (player_id, \`row\`, \`col\`, val) VALUES (?, ?, ?, ?)`,
        [playerId, row, col, val]
      );

      if (cellsCount + 1 === removedByDifficulty[game.difficulty]) {
        await con.query(
          "UPDATE player SET completion_time = NOW() WHERE player_id = ?",
          [playerId]
        );
        completionTime = new Date() - game.start_time;
      }
    }

    io.to(gameId).emit("update", { userId, correct, completionTime });

    return correct;
  }
}

const cellService = new CellService();
export default cellService;
