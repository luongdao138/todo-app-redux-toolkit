import { FormEvent, useState } from "react"
import { useAppDispatch } from "../../app/hooks";
import { add, checkAll } from "../../features/todos/todoSlice";
import { Todo } from "../../interface";
import { Input, Wrapper, CheckAllIcon } from "./TodoForm.styles"


const TodoForm = () => {
 const getAllTodos = (): Todo[] => localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos') as string) : [];
 const [value, setValue] = useState<string>('');
 const dispatch = useAppDispatch();
 const handleAddTodo = (e: FormEvent) => {
     e.preventDefault();
     if(!value || !value.trim().length) return;
     
     dispatch(add({desc: value}));
     setValue('');
 }  

 const toggleCheckAll = ():void => {
    const isCheckedAll: boolean = getAllTodos().every(t => t.isComplete);
    dispatch(checkAll({isCheckedAll: !isCheckedAll}));
 }

 return (
  <Wrapper>
     <form onSubmit={handleAddTodo}>
       <Input type='text' value={value} onChange={e => setValue(e.target.value)} placeholder='What needs to be done?'/>
       {getAllTodos().length > 0 && <CheckAllIcon onClick={toggleCheckAll} check={getAllTodos().every(t => t.isComplete)}/>}
     </form>
  </Wrapper>
 )
}

export default TodoForm
