import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import GameService from "../API/GameService";
import useGameSocket from "./useGameSocket";
import { updateBoardCell } from "../utils/updateBoardCell";
import { useNavigate } from "react-router-dom";
import { displayError } from "../utils/displayMessage";
import { IPlayer, IGame, ICell, ISelectedCell } from "../types/types";
import setNotes from "../utils/setNotes";

export function useGame(gameId: number) {
  const { user } = useAuth();
  const [players, setPlayers] = useState<IPlayer[]>([]);
  const [board, setBoard] = useState<ICell[][]>([]);
  const [gameData, setGameData] = useState<IGame>({
    startTime: "",
    unsolved: 0,
    ownerId: -1,
  });
  const navigate = useNavigate();

  useGameSocket(gameId, setPlayers);

  const startGame = async () => await GameService.start(gameId);

  const onCellPut = async (
    val: number,
    selectedCell: ISelectedCell,
    noteMode: boolean
  ) => {
    const newBoard = await updateBoardCell(
      board,
      selectedCell,
      val,
      noteMode,
      gameId
    );
    setBoard(newBoard);
  };

  const sendMessage = async (message: string) =>
    await GameService.sendMessage(gameId, message);

  useEffect(() => {
    let abort = false;

    const fetchData = async () => {
      if (user)
        try {
          const game = await GameService.join(gameId);
          if (abort) return;
          setPlayers(game.players);

          setGameData({
            startTime: game.startTime || null,
            ownerId: game.ownerId || null,
            unsolved: game.unsolved || null,
          });

          setNotes(gameId, game.board);

          setBoard(game.board);
        } catch (e: any) {
          displayError(e?.response?.data?.message || "Server error");
          navigate("/");
        }
    };

    fetchData();

    return () => {
      abort = true;
    };
  }, [user, gameId]);

  return { players, board, gameData, onCellPut, startGame, sendMessage };
}
