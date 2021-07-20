import { Todo } from './../../interface';
import { createSlice } from '@reduxjs/toolkit';
import { add, remove, toggle,clear, checkAll } from './todoSlice';

const countActiveTodo = (): number => {
     const stringArr: string | null = localStorage.getItem('todos');
     if(!stringArr) return 0;

     const currentTodos: Todo[] = JSON.parse(stringArr);
     return currentTodos.filter(t => !t.isComplete).length;
}

const itemLeftSlice = createSlice({
     name: 'left',
     reducers: {},
     extraReducers: {
       [toggle.type]: (state) => countActiveTodo(),
       [add.type]: (state) => countActiveTodo(),
       [remove.type]: (state) => countActiveTodo(),
       [clear.type]: (state) => countActiveTodo(),
       [checkAll.type]: state => countActiveTodo()
     },
     initialState: countActiveTodo()
});

export default itemLeftSlice.reducer;