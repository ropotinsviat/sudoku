import CirclePicture from "../../../ui/picture/Picture";
import formatTime from "../../../../utils/formatTime";
import { IPlayer } from "../../../../types/Player";
import styles from "./playerCard.module.scss";

export default function PlayerCard({ player }: { player: IPlayer }) {
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
}
