import { Injectable } from '@nestjs/common';
import { User } from 'src/users/users.entity';
import { WebsocketGateway } from 'src/websocket/websocket.gateway';

@Injectable()
export class MessagesService {
  constructor(private readonly websocketGateway: WebsocketGateway) {}

  send(gameId: number, user: User, message: string) {
    this.websocketGateway.server
      .to(String(gameId))
      .emit('message', { userName: user.name, message });
  }
}
