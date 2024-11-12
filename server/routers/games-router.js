import { Router } from "express";
import gameController from "../controllers/game-controller.js";

const gamesRouter = Router();

gamesRouter.post("/", gameController.create);
gamesRouter.get("/", gameController.getAll);
gamesRouter.put("/:gameId", gameController.start);
gamesRouter.post("/:gameId/players", gameController.join);
gamesRouter.put("/:gameId/cells", gameController.putCell);
gamesRouter.post("/:gameId/messages", gameController.sendMessage);

export default gamesRouter;
