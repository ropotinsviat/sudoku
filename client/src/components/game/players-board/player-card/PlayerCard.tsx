import CirclePicture from "../../../common/picture/Picture";
import formatTime from "../../../../utils/formatTime";
import { IPlayer } from "../../../../types/Player";
import styles from "./playerCard.module.scss";
import { FC } from "react";

interface PlayerCardProps {
  player: IPlayer;
}

const PlayerCard: FC<PlayerCardProps> = ({ player }) => {
  return (
    <div className={styles.playerCard}>
      <CirclePicture src={player.picture} />
      <div className={styles.info}>
        <div>{player.name}</div>
        <div className={styles.stats}>
          <div>
            {player.completionTime
              ? formatTime(player.completionTime)
              : `${player.solved}%`}
          </div>
          {player.mistakes > 0 && (
            <div className={styles.mistakes}>{player.mistakes}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
