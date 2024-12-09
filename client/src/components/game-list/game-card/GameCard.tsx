import { Link } from "react-router-dom";
import styles from "./gameCard.module.scss";
import { IGameCard } from "../../../types/Game";

export default function GameCard({ game }: { game: IGameCard }) {
  return (
    <Link to={`/${game.gameId}`} className={styles.gameCard}>
      <div>
        <div>
          <strong>#{game.gameId}</strong>
        </div>
        <div>{game.playerCount}/10</div>
      </div>
      <div>{game.difficulty.replace(/^./, (c) => c.toUpperCase())}</div>
      <div>{game.timeSinceStart}</div>
    </Link>
  );
}
