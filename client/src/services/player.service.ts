import { displayMessage } from "../components/notification/Notification";
import { IPlayer } from "../types/Player";

export function addPlayer(newPlayer: IPlayer, prevPlayers: IPlayer[]) {
  const alreadyIn = prevPlayers.some((p) => p.userId === newPlayer.userId);
  return alreadyIn ? prevPlayers : [...prevPlayers, newPlayer];
}

export function updatePlayer(updatedPlayer: IPlayer, prevPlayers: IPlayer[]) {
  if (updatedPlayer.completionTime)
    setTimeout(
      () =>
        displayMessage({ message: `${updatedPlayer.name} has just solved!` }),
      500
    );

  return prevPlayers.map((player) =>
    player.userId === updatedPlayer.userId ? updatedPlayer : player
  );
}
