import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Game } from '../games.entity';
import gameConfig from 'src/config/game.config';
import { GameSummaryDTO } from '../dto/game-summary.dto';

@Injectable()
export class GameRetrievalService {
  constructor(
    @InjectRepository(Game)
    private readonly gameRepository: Repository<Game>,
  ) {}

  async get(gameId: number): Promise<Game> {
    const game = await this.gameRepository.findOne({
      where: { gameId },
      relations: ['user'],
    });

    if (!game) throw new BadRequestException('Game not found');
    return game;
  }

  async getWholeGameData(gameId: number): Promise<Game> {
    const game = await this.gameRepository.findOne({
      where: { gameId },
      relations: ['user', 'players', 'players.user', 'players.cells'],
    });

    if (!game) throw new NotFoundException(`Game with ID ${gameId} not found`);
    return game;
  }

  async getAll(): Promise<GameSummaryDTO[]> {
    const games = await this.gameRepository
      .createQueryBuilder('g')
      .leftJoinAndSelect('g.players', 'p')
      .select([
        'g.gameId AS gameId',
        `CASE 
          WHEN g.startTime IS NULL THEN 'Not started yet'
          WHEN TIMESTAMPDIFF(MINUTE, g.startTime, NOW()) < 60 
            THEN CONCAT('Started ', TIMESTAMPDIFF(MINUTE, g.startTime, NOW()), ' minutes ago')
          ELSE CONCAT(
            'Started ',
            FLOOR(TIMESTAMPDIFF(MINUTE, g.startTime, NOW()) / 60), ' hours ',
            MOD(TIMESTAMPDIFF(MINUTE, g.startTime, NOW()), 60), ' minutes ago'
          )
        END AS timeSinceStart`,
        'g.difficulty AS difficulty',
        'COUNT(p.playerId) AS playerCount',
      ])
      .where('g.visibility = :visibility', { visibility: 'public' })
      .andWhere('g.creationTime > NOW() - INTERVAL 2 HOUR')
      .groupBy('g.gameId, g.startTime, g.difficulty, g.creationTime')
      .having('playerCount < :maxPlayers', {
        maxPlayers: gameConfig.maxPlayers,
      })
      .getRawMany();

    return games.map((game) => ({
      gameId: game.gameId,
      timeSinceStart: game.timeSinceStart,
      difficulty: game.difficulty,
      playerCount: Number(game.playerCount),
    }));
  }
}
