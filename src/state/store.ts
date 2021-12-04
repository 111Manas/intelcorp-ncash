import { Action, configureStore } from "@reduxjs/toolkit";
import app from "../components/app/app.slice";
const middlewareConfiguration = { serializableCheck: false };

export const store = configureStore({
  reducer: { app },
  devTools: {
    name: "Ncaish",
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(middlewareConfiguration),
});

export type State = ReturnType<typeof store.getState>;

export function dispatchOnCall(action: Action) {
  return () => store.dispatch(action);
}
