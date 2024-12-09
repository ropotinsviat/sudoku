import { createSlice } from "@reduxjs/toolkit";
import { authenticateUser } from "../actions/authActions";
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
  },
});

export default authSlice.reducer;
