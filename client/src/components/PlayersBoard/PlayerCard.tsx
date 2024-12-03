import CirclePicture from "../Picture/Picture";
import formatTime from "../../utils/formatTime";
import { IPlayer } from "../../types/types";

export default function PlayerCard({
  player,
  unsolved,
}: {
  player: IPlayer;
  unsolved: number | null;
}) {
  return (
    <div className="player-card">
      <CirclePicture src={player.picture} />
      <div className="info">
        <div>{player.name}</div>
        {player.hasOwnProperty("solved") && (
          <div className="stats">
            <div>
              {player.completionTime
                ? formatTime(player.completionTime)
                : `${player.solved}/${unsolved}`}
            </div>
            {player.mistakes > 0 && (
              <div className="mistakes">{player.mistakes}</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
