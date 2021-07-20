import { useEffect, useRef } from 'react';
import { Todo } from './../interface';
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { reset, select } from '../features/todos/selectedTodoSlice';
import { edit } from '../features/todos/todoSlice';

type HookType = {
   openEditForm: (todo: Todo) => void,
   closeEditForm: ({id, desc}: {id: string, desc: string}) => void,
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

    const closeEditForm = ({id, desc}: {id: string, desc: string}) => { 
        if(ref.current){
          dispatch(reset());
          if(desc && desc.length > 0) {
            dispatch(edit({id, desc}));
          }
        }
    };
    
    return {
     selectedTodo,
     openEditForm,
     closeEditForm
    }
}

export default useToggleEdit;