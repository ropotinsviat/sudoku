import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/users.entity';
import { WebsocketGateway } from 'src/websocket/websocket.gateway';
import { Repository } from 'typeorm';
import { Game } from '../games.entity';
import { GameRetrievalService } from './game-retrieval.service';

@Injectable()
export class GameManagementService {
  constructor(
    private readonly gameRetrievalService: GameRetrievalService,
    @InjectRepository(Game)
    private readonly gameRepository: Repository<Game>,
    private readonly websocketGateway: WebsocketGateway,
  ) {}

  async start(gameId: number, user: User): Promise<void> {
    const game = await this.gameRetrievalService.get(gameId);

    if (game.user.userId !== user.userId)
      throw new BadRequestException(
        'Only the creator of the game can start it!',
      );

    if (game.startTime)
      throw new BadRequestException('The game has already been started!');

    game.startTime = new Date();
    await this.gameRepository.save(game);

    this.websocketGateway.server.to(String(gameId)).emit('refresh');
  }
}
