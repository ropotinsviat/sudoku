import { useEffect } from "react";
import { io } from "socket.io-client";

export const useGameSocket = (
  gameId: number,
  fetchData: () => void,
  addPlayerHandler: (player: any) => void,
  updateHandler: (args: any) => void
) => {
  useEffect(() => {
    console.log("update");
    const socket = io(process.env.REACT_APP_SERVER_URL as string);

    socket.emit("join", String(gameId));
    socket.io.on("reconnect", () => socket.emit("join", String(gameId)));
    socket.on("refresh", fetchData);
    socket.on("addPlayer", addPlayerHandler);
    socket.on("update", updateHandler);

    return () => {
      socket.disconnect();
    };
  }, [gameId, fetchData]);
};
