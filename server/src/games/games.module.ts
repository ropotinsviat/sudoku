import { Module } from '@nestjs/common';
import { GamesController } from './games.controller';
import { Game } from './games.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { UsersModule } from 'src/users/users.module';
import { WebsocketModule } from 'src/websocket/websocket.module';
import { MessagesService } from './services/messages.service';
import { GameCreationService } from './services/game-creation.service';
import { GameManagementService } from './services/game-management.service';
import { GameRetrievalService } from './services/game-retrieval.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Game]),
    AuthModule,
    UsersModule,
    WebsocketModule,
  ],
  providers: [
    MessagesService,
    GameCreationService,
    GameManagementService,
    GameRetrievalService,
  ],
  exports: [TypeOrmModule, GameRetrievalService],
  controllers: [GamesController],
})
export class GamesModule {}
