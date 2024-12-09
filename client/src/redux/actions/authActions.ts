import { createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../../api/UserService";
import { IUser } from "../../types/User";

export const authenticateUser = createAsyncThunk<IUser>(
  "auth/authenticate",
  async () => await authService.authenticate()
);

export const logout = createAsyncThunk<IUser>("auth/logout", async () => {
  localStorage.removeItem("token");
  return await authService.authenticate();
});
