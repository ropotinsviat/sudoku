import CirclePicture from "../../../ui/picture/Picture";
import formatTime from "../../../../utils/formatTime";
import { IPlayer } from "../../../../types/Player";
import styles from "./playerCard.module.scss";

export default function PlayerCard({
  player,
  unsolved,
}: {
  player: IPlayer;
  unsolved: number | null;
}) {
  return (
    <div className={styles.playerCard}>
      <CirclePicture src={player.picture} />
      <div className={styles.info}>
        <div>{player.name}</div>
        {player.hasOwnProperty("solved") && (
          <div className={styles.stats}>
            <div>
              {player.completionTime
                ? formatTime(player.completionTime)
                : `${player.solved}/${unsolved}`}
            </div>
            {player.mistakes > 0 && (
              <div className={styles.mistakes}>{player.mistakes}</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
