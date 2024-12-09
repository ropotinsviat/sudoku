import GameCard from "./game-card/GameCard";
import styles from "./gameList.module.scss";
import { IGameCard } from "../../types/Game";

export default function GameList({ games }: { games: IGameCard[] }) {
  return (
    <div className={styles.gameList}>
      {games.map((game, i) => (
        <GameCard game={game} key={i} />
      ))}
    </div>
  );
}
