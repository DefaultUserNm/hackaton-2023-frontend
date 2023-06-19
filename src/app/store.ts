import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { reducer } from "./reducer";
import { middleware as apiMiddleware } from '../services/api'

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), apiMiddleware],
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
