import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Game } from 'src/games/games.entity';
import { User } from 'src/users/users.entity';
import { Repository } from 'typeorm';
import { Player } from './players.entity';
import gameConfig from 'src/config/game.config';
import mapGameForPlayer from './utils/player-game.mapper';
import { WebsocketGateway } from 'src/websocket/websocket.gateway';
import { NewPlayer } from './dto/new-player.dto';
import { GameRetrievalService } from 'src/games/services/game-retrieval.service';

@Injectable()
export class PlayersService {
  constructor(
    private readonly websocketGateway: WebsocketGateway,
    @InjectRepository(Player)
    private readonly playerRepository: Repository<Player>,
    private readonly gameRetrivialService: GameRetrievalService,
  ) {}

  async create(user: User, game: Game) {
    const newPlayer = this.playerRepository.create({ user, game });
    await this.playerRepository.save(newPlayer);
    return { ...newPlayer, cells: [] };
  }

  async get(gameId: number, user: User) {
    const player = await this.playerRepository.findOne({
      where: {
        user: { userId: user.userId },
        game: { gameId },
      },
      relations: ['user', 'cells'],
    });

    if (!player) throw new NotFoundException('Player not found in this game');
    return player;
  }

  async join(gameId: number, user: User) {
    const game = await this.gameRetrivialService.getWholeGameData(gameId);
    if (!game.players.some((player) => player.user.userId === user.userId)) {
      if (game.players.length >= gameConfig.maxPlayers)
        throw new BadRequestException('The game is full!');
      const newPlayer = await this.create(user, game);
      game.players.push(newPlayer);
      this.websocketGateway.server
        .to(String(gameId))
        .emit('addPlayer', new NewPlayer(newPlayer));
    }

    const board = Array.from({ length: 9 }, () => Array(9).fill({ value: 0 }));

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

    const player = game.players.find((p) => p.user.userId === user.userId);

    if (player.cells)
      for (let i = 0; i < player.cells.length; i++) {
        const { row, col, val } = player.cells[i];
        board[row][col] = { value: Number(val), correct: true };
      }

    return mapGameForPlayer(game, board);
  }
}
