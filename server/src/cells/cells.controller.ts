import { Body, Controller, Param, Post, Req, UseGuards } from '@nestjs/common';
import { CellsService } from './cells.service';
import { CreateCellDto } from './dto/create-cell.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { User } from 'src/users/users.entity';

@Controller('/games/:gameId/cells')
@UseGuards(AuthGuard)
export class CellsController {
  constructor(private readonly cellsService: CellsService) {}

  @Post('')
  async create(
    @Param('gameId') gameId: number,
    @Req() req: any,
    @Body() cellData: CreateCellDto,
  ) {
    const user: User = req.user;
    return await this.cellsService.create(gameId, user, cellData);
  }
}
