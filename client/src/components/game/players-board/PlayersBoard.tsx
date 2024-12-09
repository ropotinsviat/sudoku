import styles from "./playersBoard.module.scss";
import { useMemo } from "react";
import { useGameContext } from "../../../context/GameContext";
import PlayerCard from "./player-card/PlayerCard";
import { sortPlayers } from "../../../utils/sortPlayers";

export default function PlayersBoard() {
  const { players, gameData } = useGameContext();

  const sortedPlayers = useMemo(() => sortPlayers(players), [players]);

  return (
    <>
      {!!players.length && (
        <div className={styles.wrapper}>
          <div className={styles.playersBoard}>
            {sortedPlayers.map((player, i) => (
              <PlayerCard
                player={player}
                key={i}
                unsolved={gameData.unsolved}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
