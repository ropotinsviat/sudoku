import api from "./api";

export default class GameService {
  static async create(options) {
    const res = await api.post(`/games`, options);
    return res.data;
  }

  static async start(gameId, options) {
    await api.put(`/games/${gameId}`, options);
  }

  static async join(gameId) {
    const res = await api.post(`/games/${gameId}/players`);
    return res.data;
  }

  static async putCell(gameId, cellData) {
    const res = await api.put(`/games/${gameId}/cells`, cellData);
    return res.data;
  }

  static async sendMessage(gameId, message) {
    await api.post(`/games/${gameId}/messages`, { message });
  }

  static async getAll() {
    const res = await api.get("/games");
    return res.data;
  }
}
