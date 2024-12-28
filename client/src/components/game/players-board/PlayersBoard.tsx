import { FC } from "react";
import styles from "./playersBoard.module.scss";
import PlayerCard from "./player-card/PlayerCard";
import { IPlayer } from "../../../types/Player";

interface PlayersBoardProps {
  players: IPlayer[];
}

const PlayersBoard: FC<PlayersBoardProps> = ({ players }) => {
  return (
    <>
      {!!players.length && (
        <div className={styles.wrapper}>
          <div className={styles.playersBoard}>
            {players.map((player, i) => (
              <PlayerCard player={player} key={i} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default PlayersBoard;
