import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { none, Option, some } from "fp-ts/lib/Option";
import { IUser } from "../../types/user.type";

export interface AppState {
  user: Option<IUser>;
  loading: boolean;
}

const initialState: AppState = {
  user: none,
  loading: true,
};

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    initializeApp: () => initialState,
    loadUser: (state, { payload: user }: PayloadAction<IUser>) => {
      state.user = some(user);
      state.loading = false;
    },
    logout: (state) => {
      state.user = none;
    },
    endLoad: (state) => {
      state.loading = false;
    },
  },
});

export const { loadUser, logout, endLoad, initializeApp } = slice.actions;

export default slice.reducer;
