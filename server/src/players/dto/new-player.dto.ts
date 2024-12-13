import { Game } from 'src/games/games.entity';
import { Player } from '../players.entity';
import gameConfig from 'src/config/game.config';

export class NewPlayer {
  userId: number;
  completionTime: number | null | undefined;
  mistakes: number;
  name: string;
  picture: string;
  solved: number;

  constructor(player: Player) {
    this.userId = player.user.userId;
    this.name = player.user.name;
    this.picture = player.user.picture;
    this.mistakes = player?.mistakes || 0;
    this.solved = 0;
    this.completionTime = null;
  }
}

export class UpdatedPlayer extends NewPlayer {
  constructor(player: Player, game: Game, correct: boolean) {
    super(player);
    this.completionTime = player.completionTime;
    this.mistakes = player.mistakes + (correct ? 0 : 1);
    this.solved = Math.floor(
      ((player.cells.length + (correct ? 1 : 0)) /
        gameConfig.difficulties[game.difficulty]) *
        100,
    );
  }
}
