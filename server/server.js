import "dotenv/config";
import { app, server } from "./socket.js";
import cors from "cors";
import express from "express";
import router from "./routers/index.js";
import errorMiddleware from "./middlewares/error-middleware.js";

app.use(
  cors({
    origin: [process.env.CLIENT_URL],
    credentials: true,
    exposedHeaders: ["Authorization"],
  })
);
app.use(express.json());
app.use(router);
app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`🚀 Server listening on port ${PORT}`));
