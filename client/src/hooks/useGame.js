import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import GameService from "../API/GameService";
import useGameSocket from "./useGameSocket";
import { updateBoardCell } from "../utils/updateBoardCell";
import { useNavigate } from "react-router-dom";
import { displayError } from "../utils/displayMessage";

export function useGame(gameId) {
  const { user } = useAuth();
  const [players, setPlayers] = useState([]);
  const [board, setBoard] = useState([]);
  const [gameData, setGameData] = useState({});
  const navigate = useNavigate();

  useGameSocket(gameId, setPlayers);

  const startGame = async () => await GameService.start(gameId);

  const onCellPut = async (val, selectedCell, noteMode) => {
    const newBoard = await updateBoardCell(
      board,
      selectedCell,
      val,
      noteMode,
      gameId
    );
    setBoard(newBoard);
  };

  const sendMessage = async (message) =>
    await GameService.sendMessage(gameId, message);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      if (user)
        try {
          const game = await GameService.join(gameId, { signal });
          setPlayers(game.players);

          setGameData({
            startTime: game.startTime,
            ownerId: game.ownerId,
            unsolved: game.unsolved,
          });

          if (localStorage.getItem("recentGameId") === gameId) {
            const recentNotes = JSON.parse(localStorage.getItem("recentNotes"));
            if (recentNotes)
              for (const key in recentNotes)
                if (recentNotes.hasOwnProperty(key)) {
                  const row = Math.floor(key / 10);
                  const col = key % 10;
                  game.board[row][col] = recentNotes[key];
                }
          } else {
            localStorage.setItem("recentGameId", gameId);
            localStorage.removeItem("recentNotes");
          }

          setBoard(game.board);
        } catch (e) {
          displayError(e?.response?.data?.message || "Server error");
          navigate("/");
        }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [user, gameId]);

  return { players, board, gameData, onCellPut, startGame, sendMessage };
}
