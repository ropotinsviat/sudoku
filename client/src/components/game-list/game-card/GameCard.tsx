import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./gameCard.module.scss";
import { IGameCard } from "../../../types/Game";
import { capitalizeFirstChar } from "../../../utils/capitalizeFirstChar";

interface GameCardProps {
  game: IGameCard;
}

const GameCard: FC<GameCardProps> = ({ game }) => {
  return (
    <Link to={`/${game.gameId}`} className={styles.gameCard}>
      <div>
        <div>
          <strong>#{game.gameId}</strong>
        </div>
        <div>{game.playerCount}/5</div>
      </div>
      <div>{capitalizeFirstChar(game.difficulty)}</div>
      <div>{game.timeSinceStart}</div>
    </Link>
  );
};

export default GameCard;
