import { useEffect } from "react";
import io from "socket.io-client";
import { toast } from "react-toastify";
import displayMessage from "../utils/displayMessage";

export default function useGameSocket(gameId, setPlayers) {
  useEffect(() => {
    const socket = io(process.env.REACT_APP_SERVER_URL);

    socket.emit("join", gameId);

    function refresh() {
      window.location.reload();
    }

    function addPlayer(newPlayer) {
      setPlayers((prevPlayers) => [...prevPlayers, newPlayer]);
    }

    function update({ userId, correct, completionTime }) {
      setPlayers((prevPlayers) => {
        const playerName = completionTime
          ? prevPlayers.find((player) => player.userId === userId)?.name
          : null;

        if (playerName && completionTime)
          setTimeout(
            () => displayMessage({ message: `${playerName} has just solved!` }),
            500
          );

        return prevPlayers.map((player) =>
          player.userId === userId
            ? {
                ...player,
                completionTime,
                solved: player.solved + +correct,
                mistakes: player.mistakes + !correct,
              }
            : player
        );
      });
    }

    function message(msg) {
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
  }, [gameId]);
}
