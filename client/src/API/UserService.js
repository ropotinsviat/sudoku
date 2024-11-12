import api from "./api";

export default class UserService {
  static async authenticate() {
    const res = await api.post(`/users/me`);
    return res.data;
  }
}
