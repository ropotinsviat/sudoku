import { useState } from "react";
import { addPlayer, updatePlayer } from "../../services/player.service";
import { IPlayer } from "../../types/Player";

export function usePlayers() {
  const [players, setPlayers] = useState<IPlayer[]>([]);

  function addNewPlayer(player: any) {
    setPlayers((prev) => addPlayer(player, prev));
  }

  function updateExistingPlayer(args: any) {
    setPlayers((prev) => updatePlayer(args, prev));
  }

  return { players, setPlayers, addNewPlayer, updateExistingPlayer };
}
