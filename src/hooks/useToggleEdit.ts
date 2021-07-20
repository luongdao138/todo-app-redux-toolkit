import { useEffect, useRef } from 'react';
import { Todo } from './../interface';
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { reset, select } from '../features/todos/selectedTodoSlice';

type HookType = {
   openEditForm: (todo: Todo) => void,
   closeEditForm: () => void,
   selectedTodo: Todo | null
}

const useToggleEdit = (): HookType => {
    const ref = useRef<Todo | null>(null);
    const selectedTodo = useAppSelector(state => state.selectedTodo);
    const dispatch = useAppDispatch();
    const openEditForm = (todo: Todo) => {
      dispatch(select(todo));
    };

    useEffect(() => {
      ref.current = selectedTodo;
    }, [selectedTodo]);

    const closeEditForm = () => { 
        if(ref.current){
          dispatch(reset());
        }
    };
    
    return {
     selectedTodo,
     openEditForm,
     closeEditForm
    }
}

export default useToggleEdit;