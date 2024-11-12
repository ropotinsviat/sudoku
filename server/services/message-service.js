import { io } from "../socket.js";
import userService from "./user-service.js";

class MessageService {
  async send(userId, gameId, message) {
    const { name } = await userService.get(userId);

    io.to(gameId).emit("message", { userName: name, message });
  }
}

const messageService = new MessageService();
export default messageService;
