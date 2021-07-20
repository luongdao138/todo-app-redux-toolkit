import { createSlice,PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../../interface';
import {v4 as uuidv4} from 'uuid';

interface StateType {
    list: Todo[];
    filterMode: string;
}

const initTodos: Todo[] = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos') as string) : ([] as Todo[]);

const initialState: StateType = {
    list: initTodos,
    filterMode: 'all'
}

const todosSlice = createSlice({
      name: 'todos',
      initialState,
      reducers: {
         add: {
            prepare: (payload: {desc: string}) => {
               const {desc} = payload;
               return {
                  payload: {
                     desc,
                     id: uuidv4(),
                     isComplete: false
                  }
               }
            },
            reducer: (state, {payload}: PayloadAction<Todo>) => {
                   let currentTodos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos') as string) : ([] as Todo[]);
                   currentTodos.push(payload);
                   localStorage.setItem('todos', JSON.stringify(currentTodos));
                   if(state.filterMode !== 'completed')
                   state.list.push(payload);
            }
         },
         toggle: (state, {payload}: PayloadAction<{id: string}>) => {
             let todo = state.list.find(t => t.id === payload.id);
             if(!todo) return;
             if(state.filterMode === 'all'){
                todo.isComplete = !todo.isComplete;
             } else {
                state.list = state.list.filter(t => t.id !== payload.id);
             }
             let currentTodos: Todo[] = JSON.parse(localStorage.getItem('todos') as string);
             todo = currentTodos.find(t => t.id === payload.id);
             if(!todo) return;
             todo.isComplete = !todo?.isComplete;
             localStorage.setItem('todos', JSON.stringify(currentTodos));
            
         },
         remove: (state, {payload}: PayloadAction<{id: string}>) => {
            let todoIndex: number = state.list.findIndex(t => t.id === payload.id);
             if(todoIndex !== -1) state.list.splice(todoIndex, 1);
             let currentTodos: Todo[] = JSON.parse(localStorage.getItem('todos') as string);
             todoIndex = currentTodos.findIndex(t => t.id === payload.id);
             currentTodos.splice(todoIndex, 1);
             localStorage.setItem('todos', JSON.stringify(currentTodos))
         },
         changeMode: (state, {payload}: PayloadAction<{mode: string}>) => {
                 state.filterMode = payload.mode; 
                 let currentTodos: Todo[] = JSON.parse(localStorage.getItem('todos') as string);
                 if(payload.mode === 'active') state.list = currentTodos.filter(t => !t.isComplete);
                 else if(payload.mode === 'completed') state.list = currentTodos.filter(t => t.isComplete); 
                 else state.list = currentTodos;
         },
         clear: (state) => {
            state.list = state.list.filter(t => !t.isComplete);
            let currentTodos: Todo[] = JSON.parse(localStorage.getItem('todos') as string);
            currentTodos = currentTodos.filter(t => !t.isComplete);
            localStorage.setItem('todos', JSON.stringify(currentTodos))
         },
         checkAll: (state, {payload}: PayloadAction<{isCheckedAll: boolean}>) => {
             state.list.forEach(t => t.isComplete = payload.isCheckedAll);
             let currentTodos: Todo[] = JSON.parse(localStorage.getItem('todos') as string);
             currentTodos.forEach(t => t.isComplete = payload.isCheckedAll);
             if((payload.isCheckedAll && state.filterMode === 'completed') || (!payload.isCheckedAll && state.filterMode === 'active')) {
                 state.list = currentTodos;
             }
             if((payload.isCheckedAll && state.filterMode === 'active') || (!payload.isCheckedAll && state.filterMode === 'completed')) {
                 state.list = [];
             }
             localStorage.setItem('todos', JSON.stringify(currentTodos))
         },
         edit: (state, {payload}: PayloadAction<{id: string, desc: string}>) => {
                  let todo = state.list.find(t => t.id === payload.id) ;
                  if(!todo) return;
                  todo.desc = payload.desc;
                  let currentTodos: Todo[] = JSON.parse(localStorage.getItem('todos') as string);
                  todo = currentTodos.find(t => t.id === payload.id) ;
                  if(!todo) return;
                  todo.desc = payload.desc;
                  localStorage.setItem('todos', JSON.stringify(currentTodos))
 
         }
      },
      extraReducers: {
          
      }
});

export const { add, toggle,remove, changeMode, clear, checkAll, edit } = todosSlice.actions;

export default todosSlice.reducer;