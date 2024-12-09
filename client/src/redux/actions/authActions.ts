import { createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../../api/UserService";
import { IUser } from "../../types/User";

export const authenticateUser = createAsyncThunk<IUser>(
  "auth/authenticate",
  async () => {
    const user = await authService.authenticate();
    return user;
  }
);
