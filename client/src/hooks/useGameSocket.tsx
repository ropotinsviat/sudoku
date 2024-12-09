import { useEffect } from "react";
import { io } from "socket.io-client";
import { displayMessage } from "../components/notification/Notification";
import { IPlayer } from "../types/Player";
import { addPlayer, updatePlayer } from "../services/player.service";

export default function useGameSocket(
  gameId: number,
  setPlayers: React.Dispatch<React.SetStateAction<IPlayer[]>>,
  fetchData: () => void
) {
  useEffect(() => {
    const socket = io(process.env.REACT_APP_SERVER_URL as string);

    socket.emit("join", String(gameId));

    function addPlayerHandle(newPlayer: IPlayer) {
      setPlayers((prev) => addPlayer(newPlayer, prev));
    }

    function updateHandle(args: any) {
      setPlayers((prev) => updatePlayer(args, prev));
    }

    socket.io.on("reconnect", () => socket.emit("join", gameId));
    socket.on("refresh", fetchData);
    socket.on("addPlayer", addPlayerHandle);
    socket.on("update", updateHandle);
    socket.on("message", displayMessage);

    return () => {
      socket.disconnect();
    };
  }, [gameId, setPlayers]);
}
