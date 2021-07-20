import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import itemLeftSlice from '../features/todos/itemLeftSlice';
import selectedTodo from '../features/todos/selectedTodoSlice';
import todoSlice from '../features/todos/todoSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoSlice,
    selectedTodo: selectedTodo,
    itemLeft: itemLeftSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
