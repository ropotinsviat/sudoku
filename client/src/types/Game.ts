export interface IGameCard {
  gameId: number;
  difficulty: string;
  playerCount: number;
  timeSinceStart: string;
}

export interface IGame {
  ownerId: number;
  startTime: string;
}
