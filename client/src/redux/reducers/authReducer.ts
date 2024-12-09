import { createSlice } from "@reduxjs/toolkit";
import { authenticateUser, logout } from "../actions/authActions";
import { IUser } from "../../types/User";

interface AuthState {
  user: IUser | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authenticateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(authenticateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(authenticateUser.rejected, (state) => {
        state.loading = false;
        state.error = "An error occurred! Try later or contact support.";
      });

    builder
      .addCase(logout.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(logout.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to log out. Please try again.";
      });
  },
});

export default authSlice.reducer;
