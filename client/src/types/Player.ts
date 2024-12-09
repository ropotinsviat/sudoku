export interface IPlayer {
  userId: number;
  completionTime: number | null | undefined;
  mistakes: number;
  name: string;
  picture: string;
  solved: number;
}
