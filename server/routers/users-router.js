import { Router } from "express";
import authController from "../controllers/auth-controller.js";

const usersRouter = Router();

usersRouter.post("/me", authController.authenticate);

export default usersRouter;
