import { configureStore } from '@reduxjs/toolkit';
import timerReducer from '../features/timer/timerSlice';

export const store = configureStore({
  reducer: {
    timer: timerReducer, // Lägg till andra reducerare här om du har fler features
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;