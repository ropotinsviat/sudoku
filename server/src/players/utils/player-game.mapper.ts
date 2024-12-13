import gameConfig from 'src/config/game.config';
import { Game } from 'src/games/games.entity';

export default function mapGameForPlayer(original: Game, board: any[][]) {
  return {
    gameId: original.gameId,
    startTime: original.startTime,
    visibility: original.visibility,
    difficulty: original.difficulty,
    initialBoard: original.initialBoard,
    solvedBoard: original.solvedBoard,
    creationTime: original.creationTime,
    ownerId: original.user.userId,
    players: original.players.map((player) => ({
      userId: player.user.userId,
      name: player.user.name,
      picture: player.user.picture,
      mistakes: player.mistakes,
      completionTime: player.completionTime,
      solved: Math.floor(
        (player.cells.length / gameConfig.difficulties[original.difficulty]) *
          100,
      ),
    })),
    board,
  };
}
