import con from "../db.js";
import ApiError from "../exceptions/api-error.js";

const removedByDifficulty = {
  easy: 18,
  medium: 26,
  hard: 34,
  extreme: 42,
};

export { removedByDifficulty };
export default async function getGame(gameId) {
  const [games] = await con.query(
    `SELECT 
      g.start_time, g.visibility, g.difficulty, g.user_id AS owner_id, g.initial_board,
      u.user_id, u.name, u.picture, p.mistakes, p.completion_time, 
      c.cell_id, c.row, c.col, c.val
    FROM game g
    LEFT JOIN player p ON g.game_id = p.game_id
    LEFT JOIN user u ON p.user_id = u.user_id
    LEFT JOIN cell c ON p.player_id = c.player_id 
    WHERE g.game_id = ?`,
    [gameId]
  );

  if (!games.length) throw ApiError.BadRequest("Game was not found!");

  const gameData = {
    startTime: games[0].start_time,
    visibility: games[0].visibility,
    difficulty: games[0].difficulty,
    ownerId: games[0].owner_id,
    initialBoard: games[0].initial_board,
    unsolved: removedByDifficulty[games[0].difficulty],
    players: {},
  };

  games.forEach((game) => {
    if (game.user_id)
      if (!gameData.players[game.user_id])
        gameData.players[game.user_id] = {
          userId: game.user_id,
          name: game.name,
          picture: game.picture,
          mistakes: game.mistakes,
          completionTime: game.completion_time
            ? game.completion_time - game.start_time
            : null,
          solved: 0,
          cells: [],
        };

    if (game.cell_id) {
      gameData.players[game.user_id].cells.push({
        row: game.row,
        col: game.col,
        val: game.val,
      });
      gameData.players[game.user_id].solved++;
    }
  });

  return gameData;
}
