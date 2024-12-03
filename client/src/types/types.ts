export type IUser = {
  userId: number;
  name: string;
  picture: string;
} | null;

export interface IGameCard {
  gameId: number;
  difficulty: string;
  playerCount: number;
  timeSinceStart: string;
}

export type ICell =
  | { value: number; correct?: boolean; initial?: boolean }
  | number[];

export interface IPlayer {
  userId: number;
  completionTime: number | null | undefined;
  mistakes: number;
  name: string;
  picture: string;
  solved: number;
}

export interface IGame {
  ownerId: number | null;
  startTime: string | null;
  unsolved: number | null;
}

export interface ICellData {
  val: number;
  row: number;
  col: number;
}

export interface ISelectedCell {
  row: number | null;
  col: number | null;
}
