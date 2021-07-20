import { Wrapper } from "./TodoList.styles";
import {useAppSelector} from '../../app/hooks';
import { Todo } from "../../interface";
import TodoItem from "../TodoItem";
 
const TodoList = () => {

 const list: Todo[] = useAppSelector(state => state.todos.list);

 return (
  <Wrapper>
     {
       list.map((todo: Todo) => <TodoItem todo={todo} key={todo.id}/>)
     }
  </Wrapper>
 )
}

export default TodoList;
