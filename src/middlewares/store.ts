import {combineReducers, configureStore, ThunkAction, Action} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import logger from 'redux-logger';
import { stuffReducer } from "./stuff/slices/stuff.slice";

export const reducer = combineReducers({
    stuff: stuffReducer,
});
export const store = configureStore({
    reducer: reducer,
    middleware: [thunk, logger]
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
