import {
  Controller,
  Post,
  Get,
  Param,
  Req,
  Body,
  UseGuards,
} from '@nestjs/common';
import { GameManagementService } from './services/game-management.service';
import { MessagesService } from './services/messages.service';
import { User } from 'src/users/users.entity';
import { GameRetrievalService } from './services/game-retrieval.service';
import { GameCreationService } from './services/game-creation.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('games')
@UseGuards(AuthGuard)
export class GamesController {
  constructor(
    private readonly gameCreationService: GameCreationService,
    private readonly gameManagementService: GameManagementService,
    private readonly gameRetrivialService: GameRetrievalService,
    private readonly messagesService: MessagesService,
  ) {}

  @Post('/')
  async create(@Req() req: any, @Body() body: any) {
    const user: User = req.user;
    const { difficulty, visibility } = body;

    const gameId = await this.gameCreationService.create(
      user,
      difficulty,
      visibility,
    );
    return gameId;
  }

  @Post('/:gameId/start')
  async start(@Param('gameId') gameId: number, @Req() req: any) {
    const user: User = req.user;
    await this.gameManagementService.start(gameId, user);
    return { status: 'success' };
  }

  @Get('/')
  async getAll() {
    const games = await this.gameRetrivialService.getAll();
    return games;
  }

  @Post('/:gameId/messages')
  async sendMessage(
    @Param('gameId') gameId: number,
    @Req() req: any,
    @Body() body: any,
  ) {
    const user: User = req.user;
    const { message } = body;
    this.messagesService.send(gameId, user, message);
    return { status: 'success' };
  }
}
