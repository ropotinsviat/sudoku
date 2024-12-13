import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useGameSocket } from "./useGameSocket";
import { useBoard } from "./useBoard";
import { usePlayers } from "./usePlayers";
import { useCallback, useEffect, useState } from "react";
import { setNotes } from "../../services/notes.service";
import GameService from "../../api/GameService";
import { displayError } from "../../components/notification/Notification";
import { selectAuthUser } from "../../redux/selectors/authSelectors";

export function useGame(gameId: number) {
  const user = useSelector(selectAuthUser);
  const navigate = useNavigate();
  const { board, setBoard, updateCell } = useBoard(gameId);
  const { players, setPlayers, addNewPlayer, updateExistingPlayer } =
    usePlayers();
  const [gameData, setGameData] = useState({ startTime: "", ownerId: -1 });

  const fetchData = useCallback(async () => {
    if (user) {
      try {
        const game = await GameService.join(gameId);
        setBoard(game.board);
        setPlayers(game.players);
        setGameData({ startTime: game.startTime, ownerId: game.ownerId });
        setNotes(gameId, game.board);
      } catch (e: any) {
        displayError(e?.response?.data?.message || "Server error");
        navigate("/");
      }
    }
  }, [user, gameId, navigate]);

  useGameSocket(gameId, fetchData, addNewPlayer, updateExistingPlayer);

  useEffect(() => {
    fetchData();
  }, [gameId, user]);

  return { players, board, gameData, onCellPut: updateCell };
}
