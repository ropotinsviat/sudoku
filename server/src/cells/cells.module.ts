import { Module } from '@nestjs/common';
import { CellsService } from './cells.service';
import { CellsController } from './cells.controller';
import { PlayersModule } from 'src/players/players.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cell } from './cells.entity';
import { AuthModule } from 'src/auth/auth.module';
import { GamesModule } from 'src/games/games.module';
import { WebsocketModule } from 'src/websocket/websocket.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Cell]),
    PlayersModule,
    AuthModule,
    GamesModule,
    WebsocketModule,
  ],
  providers: [CellsService],
  controllers: [CellsController],
})
export class CellsModule {}
