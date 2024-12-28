import Sudoku from "./sudoku/Sudoku";
import CopyBoard from "../common/copy-board/CopyBoard";
import { useGameContext } from "../../context/GameContext";
import PlayersBoard from "./players-board/PlayersBoard";
import { useSelector } from "react-redux";
import { selectAuthUser } from "../../redux/selectors/authSelectors";
import Button from "../common/button/Button";
import styles from "./game.module.scss";
import { useAsync } from "../../hooks/useAsynk";
import { useMemo } from "react";
import { sortPlayers } from "../../utils/sortPlayers";

const Game: React.FC = () => {
  const user = useSelector(selectAuthUser);
  const { gameData, startGame, players } = useGameContext();
  const { execute: startGameAsync, loading } = useAsync(startGame);

  const sortedPlayers = useMemo(() => sortPlayers(players), [players]);

  return (
    <div className={styles.game}>
      <PlayersBoard players={sortedPlayers} />
      {gameData.startTime ? (
        <Sudoku />
      ) : (
        <div className={styles.copyStart}>
          <CopyBoard link={window.location.href} />
          {gameData?.ownerId === user?.userId && (
            <Button onClick={startGameAsync} loading={loading}>
              Start
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default Game;
