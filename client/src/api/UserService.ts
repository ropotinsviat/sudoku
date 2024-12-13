import api from "./api";
import { IUser } from "../types/User";

export default class UserService {
  static async authenticate() {
    const { data } = await api.post<IUser>("/auth/me");
    return data;
  }
}
