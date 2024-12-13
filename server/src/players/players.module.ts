import { Module } from '@nestjs/common';
import { PlayersService } from './players.service';
import { PlayersController } from './players.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player } from './players.entity';
import { GamesModule } from 'src/games/games.module';
import { UsersModule } from 'src/users/users.module';
import { AuthModule } from 'src/auth/auth.module';
import { PlayerStatsService } from './player-stats.service';
import { WebsocketModule } from 'src/websocket/websocket.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Player]),
    GamesModule,
    UsersModule,
    AuthModule,
    WebsocketModule,
  ],
  providers: [PlayersService, PlayerStatsService],
  controllers: [PlayersController],
  exports: [TypeOrmModule, PlayersService, PlayerStatsService],
})
export class PlayersModule {}
