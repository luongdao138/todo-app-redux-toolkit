import { Wrapper, Item, Space, EditWrapper, Input, Form, Icon, CompleteIcon, DeleteIcon } from "./TodoItem.styles"
import {Todo} from '../../interface';
import useToggleEdit from "../../hooks/useToggleEdit";
import { useAppDispatch } from "../../app/hooks";
import { edit, remove, toggle } from "../../features/todos/todoSlice";
import { FormEvent, useState } from "react";

const TodoItem = ({todo}: {todo: Todo}) => {
 const dispatch = useAppDispatch();
 const toggleTodo = (id: string): void => {
   dispatch(toggle({id}));
 };
 const { selectedTodo, openEditForm, closeEditForm } = useToggleEdit();
 const [temp, setTemp] = useState<string>(todo.desc || '');

 const handleEditTodo = (e: FormEvent):void => {
   e.preventDefault();
   if(!temp || !temp.length) {
      setTemp(todo.desc);
      closeEditForm();
      return;
   }

   dispatch(edit({
      id: todo.id,
      desc: temp
   }));
   closeEditForm();
 }

 return (
  <Wrapper>
       <EditWrapper disappear={selectedTodo?.id !== todo.id}>
        <Space onClick={closeEditForm}/>
        <Form onSubmit={handleEditTodo}>
          <Input type='text' value={temp} onChange={e => setTemp(e.target.value)}/>
        </Form>
      </EditWrapper>
      {
         selectedTodo?.id !== todo.id && <>
           {
              todo.isComplete ? <CompleteIcon onClick={() => toggleTodo(todo.id)} /> : <Icon onClick={() => toggleTodo(todo.id)}/>
           } 
           <DeleteIcon onClick={() => dispatch(remove({id: todo.id}))} />
         </>
      }
      <Item onClick={closeEditForm} disappear={selectedTodo?.id === todo.id} onDoubleClick={() => openEditForm(todo)} completed={todo.isComplete}>{todo.desc}</Item>
  </Wrapper>
 )
}

export default TodoItem
