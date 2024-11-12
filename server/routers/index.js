import express from "express";
import usersRouter from "./users-router.js";
import gamesRouter from "./games-router.js";
import authMiddleware from "../middlewares/auth-middleware.js";

const router = express.Router();

router.use("/users", usersRouter);
router.use("/games", authMiddleware, gamesRouter);

export default router;
