import GameCard from "./game-card/GameCard";
import styles from "./gameList.module.scss";
import { IGameCard } from "../../types/Game";
import { FC } from "react";
import withLoading from "../hoc/withLoading";

interface GameListProps {
  games: IGameCard[];
}

const GameList: FC<GameListProps> = ({ games }) => {
  return (
    <div className={styles.gameList}>
      {games.map((game, i) => (
        <GameCard game={game} key={i} />
      ))}
    </div>
  );
};

export default withLoading(GameList);
