import { displayMessage } from "../components/notification/Notification";
import { IPlayer } from "../types/Player";

interface UpdateData {
  userId: number;
  correct: boolean;
  completionTime?: string;
}

export function addPlayer(newPlayer: IPlayer, prevPlayers: IPlayer[]) {
  const alreadyIn = prevPlayers.some((p) => p.userId === newPlayer.userId);
  return alreadyIn ? prevPlayers : [...prevPlayers, newPlayer];
}

export function updatePlayer(
  { userId, correct, completionTime }: UpdateData,
  prevPlayers: IPlayer[]
) {
  const playerName = completionTime
    ? prevPlayers.find((player) => player.userId === userId)?.name
    : null;
  if (playerName && completionTime) {
    setTimeout(
      () =>
        displayMessage({
          message: `${playerName} has just solved!`,
        }),
      500
    );
  }
  return prevPlayers.map((player) =>
    player.userId === userId
      ? {
          ...player,
          completionTime: completionTime ? Number(completionTime) : null,
          solved: player.solved + Number(correct),
          mistakes: player.mistakes + Number(!correct),
        }
      : player
  );
}
