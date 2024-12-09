import Sudoku from "./sudoku/Sudoku";
import CopyBoard from "../ui/copy-board/CopyBoard";
import { useGameContext } from "../../context/GameContext";
import PlayersBoard from "./players-board/PlayersBoard";
import { useSelector } from "react-redux";
import { selectAuthUser } from "../../redux/selectors/authSelectors";
import Button from "../ui/button/Button";
import styles from "./game.module.scss";
import { useAsync } from "../../hooks/useAsynk";
import Loading from "../ui/loading/Loading";

export default function GameContent() {
  const user = useSelector(selectAuthUser);
  const { gameData, startGame } = useGameContext();

  const { execute: startGameAsync, loading } = useAsync(startGame);

  return (
    <div className={styles.game}>
      <PlayersBoard />
      {gameData.startTime ? (
        <Sudoku />
      ) : (
        <div className={styles.copyStart}>
          <CopyBoard link={window.location.href} />
          {gameData?.ownerId === user?.userId &&
            (loading ? (
              <Loading />
            ) : (
              <Button onClick={startGameAsync}>Start</Button>
            ))}
        </div>
      )}
    </div>
  );
}
