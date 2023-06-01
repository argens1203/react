import {
    Action,
    ThunkAction,
    combineReducers,
    configureStore,
} from '@reduxjs/toolkit';

import { stuffReducer } from './stuff/slices/stuff.slice';
import { uiReducer } from './ui/slices';

export const reducer = combineReducers({
    stuff: stuffReducer,
    ui: uiReducer,
});
export const store = configureStore({
    reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
