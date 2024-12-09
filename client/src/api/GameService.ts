import api from "./api";
import { IGameCard, IGame } from "../types/Game";
import { IPlayer } from "../types/Player";
import { ICellData, ICell } from "../types/Cell";

export interface IGameRequestProduct extends IGame {
  players: IPlayer[];
  board: ICell[][];
}

export default class GameService {
  static async create(options: { difficulty: string; visibility: string }) {
    const { data } = await api.post<number>("/games", options);
    return data;
  }

  static async start(gameId: number) {
    await api.put(`/games/${gameId}`);
  }

  static async join(gameId: number) {
    const { data } = await api.post<IGameRequestProduct>(
      `/games/${gameId}/players`
    );
    return data;
  }

  static async putCell(gameId: number, cellData: ICellData) {
    const { data } = await api.put<boolean>(`/games/${gameId}/cells`, cellData);
    return data;
  }

  static async sendMessage(gameId: number, message: string) {
    await api.post(`/games/${gameId}/messages`, { message });
  }

  static async getAll() {
    const { data } = await api.get<IGameCard[]>("/games");
    return data;
  }
}
