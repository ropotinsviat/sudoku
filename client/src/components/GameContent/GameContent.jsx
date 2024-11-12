import { useAuth } from "../../context/AuthContext";
import Sudoku from "../Sudoku/Sudoku";
import CopyBoard from "../CopyBoard/CopyBoard";
import "../../assets/css/game-page.css";
import { useGameContext } from "../../context/GameContext";
import PlayersBoard from "../PlayersBoard/PlayersBoard";

export default function GameContent() {
  const { user } = useAuth();
  const { gameData, startGame } = useGameContext();

  return (
    <div className="game-page">
      <PlayersBoard />
      {gameData.startTime ? (
        <Sudoku />
      ) : (
        <div className="copy-start">
          <CopyBoard link={window.location.href} />
          {gameData?.ownerId === user?.userId && (
            <button className="my-btn" onClick={startGame}>
              Start
            </button>
          )}
        </div>
      )}
    </div>
  );
}
