import { Todo } from '../../interface';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type StateType = Todo | null;

const selectedTodo = createSlice({
   name: 'selectedTodo',
   initialState: null as StateType,
   reducers: {
      select: (_, action: PayloadAction<Todo>) => {
         return action.payload;
      },
      reset: () => {
          return null;
      }
   },
});

export const { select, reset } = selectedTodo.actions;

export default selectedTodo.reducer;