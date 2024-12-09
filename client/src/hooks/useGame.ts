import { useEffect, useState } from "react";
import GameService from "../api/GameService";
import useGameSocket from "./useGameSocket";
import { updateBoardCell } from "../services/board.service";
import { useNavigate } from "react-router-dom";
import { IPlayer } from "../types/Player";
import { IGame } from "../types/Game";
import { ICell, ISelectedCell } from "../types/Cell";
import { setNotes } from "../services/notes.service";
import { useSelector } from "react-redux";
import { displayError } from "../components/notification/Notification";
import { selectAuthUser } from "../redux/selectors/authSelectors";

export function useGame(gameId: number) {
  const user = useSelector(selectAuthUser);
  const [players, setPlayers] = useState<IPlayer[]>([]);
  const [board, setBoard] = useState<ICell[][]>([]);
  const [gameData, setGameData] = useState<IGame>({
    startTime: "",
    unsolved: 0,
    ownerId: -1,
  });
  const [cellBeingPuted, setCellBeingPuted] = useState(false);

  const navigate = useNavigate();

  useGameSocket(gameId, setPlayers, fetchData);

  async function startGame() {
    await GameService.start(gameId);
  }

  async function onCellPut(
    val: number,
    selectedCell: ISelectedCell,
    noteMode: boolean
  ) {
    if (cellBeingPuted) return;
    setCellBeingPuted(true);
    const newBoard = await updateBoardCell(
      board,
      selectedCell,
      val,
      noteMode,
      gameId
    );
    setBoard(newBoard);
    setCellBeingPuted(false);
  }

  async function sendMessage(message: string) {
    await GameService.sendMessage(gameId, message);
  }

  async function fetchData() {
    if (user)
      try {
        const game = await GameService.join(gameId);
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
  }

  useEffect(() => {
    fetchData();
  }, [user, gameId]);

  return { players, board, gameData, onCellPut, startGame, sendMessage };
}
