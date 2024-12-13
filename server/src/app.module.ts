import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { GamesModule } from './games/games.module';
import { PlayersModule } from './players/players.module';
import { CellsModule } from './cells/cells.module';
import { WebsocketModule } from './websocket/websocket.module';
import config from './config';

@Module({
  imports: [
    TypeOrmModule.forRoot({ ...config.databaseConfig, type: 'mysql' }),
    UsersModule,
    AuthModule,
    GamesModule,
    PlayersModule,
    CellsModule,
    WebsocketModule,
  ],
})
export class AppModule {}
