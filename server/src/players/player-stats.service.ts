import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Player } from './players.entity';
import { Game } from 'src/games/games.entity';

@Injectable()
export class PlayerStatsService {
  constructor(
    @InjectRepository(Player)
    private readonly playerRepository: Repository<Player>,
  ) {}

  async incrementMistakes(playerId: number) {
    await this.playerRepository.increment({ playerId }, 'mistakes', 1);
  }

  async setCompletionTime(playerId: number, game: Game) {
    const completionTime = new Date().getTime() - game.startTime.getTime();
    await this.playerRepository.update({ playerId }, { completionTime });
    return completionTime;
  }
}
