import { Wrapper } from "./TodoList.styles";
import {useAppSelector} from '../../app/hooks';
import { Todo } from "../../interface";
import TodoItem from "../TodoItem";
 
export interface Props {
   temp: string;
   setTemp: React.Dispatch<React.SetStateAction<string>>
}

const TodoList = ({temp, setTemp}: Props) => {

 const list: Todo[] = useAppSelector(state => state.todos.list);

 return (
  <Wrapper>
     {
       list.map((todo: Todo) => <TodoItem temp={temp} setTemp={setTemp} todo={todo} key={todo.id}/>)
     }
  </Wrapper>
 )
}

export default TodoList;
