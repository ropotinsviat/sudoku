import api from "./api";
import { IUser } from "../types/types";

export default class UserService {
  static async authenticate() {
    const { data } = await api.post<IUser>("/users/me");
    return data;
  }
}
