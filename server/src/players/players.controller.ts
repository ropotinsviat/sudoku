import { Controller, Param, Post, Req, UseGuards } from '@nestjs/common';
import { PlayersService } from './players.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { User } from 'src/users/users.entity';

@Controller('/games/:gameId/players')
@UseGuards(AuthGuard)
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Post('')
  async create(@Param('gameId') gameId: number, @Req() req: any) {
    const user: User = req.user;
    const game = await this.playersService.join(gameId, user);
    return game;
  }
}
