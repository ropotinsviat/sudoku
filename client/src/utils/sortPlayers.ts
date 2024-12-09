import { IPlayer } from "../types/Player";

export const sortPlayers = (players: IPlayer[]) =>
  players.sort((a, b) => {
    const aHasCompletion = !!a.completionTime;
    const bHasCompletion = !!b.completionTime;
    const aWrong = a.mistakes || 0;
    const bWrong = b.mistakes || 0;

    if (aHasCompletion && bHasCompletion) {
      if (aWrong !== bWrong) return aWrong - bWrong;
      return (a?.completionTime ?? 0) - (b?.completionTime ?? 0);
    }
    if (aHasCompletion) return -1;
    if (bHasCompletion) return 1;

    if (aWrong !== bWrong) return aWrong - bWrong;

    const aSolved = a.solved || 0;
    const bSolved = b.solved || 0;

    return bSolved - aSolved;
  });
