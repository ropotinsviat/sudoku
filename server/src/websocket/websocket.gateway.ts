import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import config from 'src/config';

@WebSocketGateway({ cors: config.socketConfig })
export class WebsocketGateway implements OnGatewayConnection {
  @WebSocketServer() server: Server;

  handleConnection(socket: Socket) {
    socket.on('join', (room) => socket.join(room));
  }
}
