import { Injectable } from '@nestjs/common';
import { User } from 'src/users/users.entity';
import { CreateCellDto } from './dto/create-cell.dto';
import { Cell } from './cells.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PlayersService } from 'src/players/players.service';
import gameConfig from 'src/config/game.config';
import { PlayerStatsService } from 'src/players/player-stats.service';
import { WebsocketGateway } from 'src/websocket/websocket.gateway';
import { NewPlayer, UpdatedPlayer } from 'src/players/dto/new-player.dto';
import { GameRetrievalService } from 'src/games/services/game-retrieval.service';

@Injectable()
export class CellsService {
  constructor(
    @InjectRepository(Cell)
    private readonly cellRepository: Repository<Cell>,
    private readonly playersService: PlayersService,
    private readonly gameRetrivialService: GameRetrievalService,
    private readonly playerStatsService: PlayerStatsService,
    private readonly websocketGateway: WebsocketGateway,
  ) {}

  async create(gameId: number, user: User, cellData: CreateCellDto) {
    const game = await this.gameRetrivialService.get(gameId);
    const player = await this.playersService.get(gameId, user);

    const { row, col, val } = cellData;

    const correct = Number(game.solvedBoard[row * 9 + col]) === val;

    if (!correct) {
      await this.playerStatsService.incrementMistakes(player.playerId);
    } else {
      const newCell = this.cellRepository.create({
        row,
        col,
        val,
        player,
      });
      await this.cellRepository.save(newCell);

      if (player.cells.length + 1 === gameConfig.difficulties[game.difficulty])
        player.completionTime = await this.playerStatsService.setCompletionTime(
          player.playerId,
          game,
        );
    }

    const updatedPlayer = new UpdatedPlayer(player, game, correct);

    this.websocketGateway.server
      .to(String(gameId))
      .emit('update', updatedPlayer);

    return correct;
  }
}
