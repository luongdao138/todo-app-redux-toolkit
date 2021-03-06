import { Wrapper, Item, Space, EditWrapper, Input, Form, Icon, CompleteIcon, DeleteIcon } from "./TodoItem.styles"
import {Todo} from '../../interface';
import useToggleEdit from "../../hooks/useToggleEdit";
import { useAppDispatch } from "../../app/hooks";
import { edit, remove, toggle } from "../../features/todos/todoSlice";
import React, { FormEvent } from "react";
import { Http2ServerRequest } from "http2";

interface Props {
   todo:Todo;
   temp: string;
   setTemp:React.Dispatch<React.SetStateAction<string>>
}

const TodoItem = ({todo, temp, setTemp}: Props) => {
 const dispatch = useAppDispatch();
 const toggleTodo = (id: string): void => {
   dispatch(toggle({id}));
 };
 const { selectedTodo, openEditForm, closeEditForm } = useToggleEdit();
 
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
 };

 const handleBlur = (e: React.FocusEvent<HTMLInputElement>): void => {
     if(temp && temp.length)
     dispatch(edit({
      id: todo.id,
      desc: temp
     }));
 }

 return (
  <Wrapper>
       <EditWrapper disappear={selectedTodo?.id !== todo.id}>
        <Space onClick={() => closeEditForm()}/>
        <Form onSubmit={handleEditTodo}>
          <Input type='text' value={temp} onChange={e => setTemp(e.target.value)}
            onBlur={handleBlur}
          />
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
      <Item onClick={() => closeEditForm()} disappear={selectedTodo?.id === todo.id} onDoubleClick={() => {setTemp(todo.desc); openEditForm(todo)}} completed={todo.isComplete}>{todo.desc}</Item>
  </Wrapper>
 )
}

export default TodoItem
