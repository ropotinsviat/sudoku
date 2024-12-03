import { useEffect } from "react";
import { io } from "socket.io-client";
import displayMessage from "../utils/displayMessage";
import { IPlayer } from "../types/types";

interface Message {
  message: string;
  userName?: string;
}

interface UpdateData {
  userId: number;
  correct: boolean;
  completionTime?: string;
}

export default function useGameSocket(
  gameId: number,
  setPlayers: React.Dispatch<React.SetStateAction<IPlayer[]>>
) {
  useEffect(() => {
    const socket = io(process.env.REACT_APP_SERVER_URL as string);

    socket.emit("join", String(gameId));

    function refresh() {
      window.location.reload();
    }

    function addPlayer(newPlayer: IPlayer) {
      setPlayers((prev) => {
        const alreadyIn = prev.some((p) => p.userId === newPlayer.userId);
        return alreadyIn ? prev : [...prev, newPlayer];
      });
    }

    function update({ userId, correct, completionTime }: UpdateData) {
      setPlayers((prevPlayers) => {
        const playerName = completionTime
          ? prevPlayers.find((player) => player.userId === userId)?.name
          : null;
        if (playerName && completionTime) {
          setTimeout(
            () =>
              displayMessage({
                message: `${playerName} has just solved!`,
              }),
            500
          );
        }
        return prevPlayers.map((player) =>
          player.userId === userId
            ? {
                ...player,
                completionTime: completionTime ? Number(completionTime) : null,
                solved: player.solved + Number(correct),
                mistakes: player.mistakes + Number(!correct),
              }
            : player
        );
      });
    }

    function message(msg: Message): void {
      displayMessage(msg);
    }

    socket.io.on("reconnect", () => socket.emit("join", gameId));

    socket.on("refresh", refresh);
    socket.on("addPlayer", addPlayer);
    socket.on("update", update);
    socket.on("message", message);

    return () => {
      socket.disconnect();
    };
  }, [gameId, setPlayers]);
}
