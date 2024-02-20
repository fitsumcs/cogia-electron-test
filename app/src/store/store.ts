import { configureStore } from '@reduxjs/toolkit';
import TodoSlice from '../slices/TodoSlice';
const store = configureStore({
  reducer: {
    TodoSlice,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
