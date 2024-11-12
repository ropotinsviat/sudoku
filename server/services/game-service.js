import con from "../db.js";
import generateSudoku from "../sudoku/generateSudoku.js";
import ApiError from "../exceptions/api-error.js";
import { io } from "../socket.js";

class GameService {
  async create(userId, difficulty, visibility) {
    const { startingBoard, solvedBoard } = generateSudoku(difficulty);

    const [result] = await con.query(
      `INSERT INTO game (user_id, difficulty, visibility, 
      initial_board, solved_board) VALUES (?, ?, ?, ?, ?)`,
      [userId, difficulty, visibility, startingBoard, solvedBoard]
    );

    return result.insertId;
  }

  async get(gameId) {
    const [games] = await con.query(`SELECT * FROM game WHERE game_id = ?`, [
      gameId,
    ]);

    if (!games.length) throw ApiError.BadRequest("The game was not found!");

    return games[0];
  }

  async getAll() {
    const [games] = await con.query(
      `SELECT g.game_id AS gameId,     
        CASE 
            WHEN start_time IS NULL THEN 'Not started yet'
            WHEN TIMESTAMPDIFF(MINUTE, start_time, NOW()) < 60 
                THEN CONCAT('Started ', TIMESTAMPDIFF(MINUTE, start_time, NOW()), ' minutes ago')
            ELSE CONCAT(
                'Started ',
                FLOOR(TIMESTAMPDIFF(MINUTE, start_time, NOW()) / 60), ' hours ',
                MOD(TIMESTAMPDIFF(MINUTE, start_time, NOW()), 60), ' minutes ago'
            )
        END AS timeSinceStart,  
        g.difficulty, COUNT(p.player_id) AS playerCount
        FROM game g
        LEFT JOIN player p ON g.game_id = p.game_id
        WHERE g.visibility = 'public' AND g.creation_time > NOW() - INTERVAL 2 HOUR
        GROUP BY g.game_id, g.start_time, g.difficulty, g.creation_time
        HAVING playerCount < 10`
    );

    return games;
  }

  async start(userId, gameId) {
    const game = await this.get(gameId);

    if (game.user_id !== userId)
      throw ApiError.BadRequest("This can do only creator of the game!");
    if (game.start_time)
      throw ApiError.BadRequest("The game has arleady been started!");

    await con.query(`UPDATE game SET start_time = NOW() WHERE game_id = ?`, [
      gameId,
    ]);

    io.to(gameId).emit("refresh");
  }
}

const gameService = new GameService();
export default gameService;
