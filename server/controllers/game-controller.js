import gameService from "../services/game-service.js";
import playerService from "../services/player-service.js";
import cellService from "../services/cell-service.js";
import messageService from "../services/message-service.js";

class GameController {
  async create(req, res, next) {
    try {
      const { difficulty, visibility } = req.body;

      const gameId = await gameService.create(
        req.userId,
        difficulty,
        visibility
      );

      res.json(gameId);
    } catch (e) {
      next(e);
    }
  }

  async start(req, res, next) {
    try {
      const { gameId } = req.params;

      await gameService.start(req.userId, gameId);

      res.end();
    } catch (e) {
      next(e);
    }
  }

  async join(req, res, next) {
    try {
      const { gameId } = req.params;

      const game = await playerService.join(req.userId, gameId);

      res.json(game);
    } catch (e) {
      next(e);
    }
  }

  async putCell(req, res, next) {
    try {
      const { gameId } = req.params;
      const cellData = req.body;

      const cell = await cellService.put(req.userId, gameId, cellData);

      res.json(cell);
    } catch (e) {
      next(e);
    }
  }

  async sendMessage(req, res, next) {
    try {
      const { gameId } = req.params;
      const { message } = req.body;

      await messageService.send(req.userId, gameId, message);

      res.end();
    } catch (e) {
      next(e);
    }
  }

  async getAll(req, res, next) {
    try {
      const games = await gameService.getAll();

      res.json(games);
    } catch (e) {
      next(e);
    }
  }
}

const gameController = new GameController();
export default gameController;
