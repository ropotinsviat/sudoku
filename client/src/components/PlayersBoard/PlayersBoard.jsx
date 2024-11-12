import "../../assets/css/players-board.css";
import { useMemo } from "react";
import { useGameContext } from "../../context/GameContext";
import PlayerCard from "./PlayerCard";

export default function PlayersBoard() {
  const { players, gameData } = useGameContext();

  const sortedPlayers = useMemo(() => {
    return players.sort((a, b) => {
      const aHasCompletion = !!a.completionTime;
      const bHasCompletion = !!b.completionTime;
      const aWrong = a.mistakes || 0;
      const bWrong = b.mistakes || 0;

      if (aHasCompletion && bHasCompletion) {
        if (aWrong !== bWrong) return aWrong - bWrong;
        return a.completionTime - b.completionTime;
      }
      if (aHasCompletion) return -1;
      if (bHasCompletion) return 1;

      if (aWrong !== bWrong) return aWrong - bWrong;

      const aSolved = a.solved || 0;
      const bSolved = b.solved || 0;

      return bSolved - aSolved;
    });
  }, [players]);

  return (
    <div className="players-board-wrapper">
      <div className="players-board">
        {sortedPlayers.map((player, i) => (
          <PlayerCard player={player} key={i} unsolved={gameData.unsolved} />
        ))}
      </div>
    </div>
  );
}
