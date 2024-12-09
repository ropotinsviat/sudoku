import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducers/authReducer";
import { authenticateUser } from "../actions/authActions";

const store = configureStore({
  reducer: { auth: authReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

store.dispatch(authenticateUser());

export default store;
