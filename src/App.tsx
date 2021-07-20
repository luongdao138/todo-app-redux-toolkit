import { useRef, useState } from "react";
import styled from "styled-components";
import TodoFooter from "./components/TodoFooter";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import GlobalStyle from "./GlobalStyle";
import useEventListener from "./hooks/useEventListener";
import useToggleEdit from "./hooks/useToggleEdit";

const App = () => {

  const listRef = useRef<HTMLDivElement | null>(null);
  const { closeEditForm, selectedTodo } = useToggleEdit();
  const [temp, setTemp] = useState<string>('');

  useEventListener('mousedown', window, (e) => {
        if(!listRef.current?.contains(e.target)) {
          if(!selectedTodo) return;
          closeEditForm({id: selectedTodo.id, desc: temp});
        }
  });

  return (
    <Wrapper>
      <Title>todos</Title>
      <Content>
        <TodoForm/>
        <div ref={listRef}>
        <TodoList temp={temp} setTemp={setTemp} />
        </div>
        <TodoFooter/>
      </Content>
      <div style={{height: '30px'}}></div>
      <GlobalStyle/>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: var(--background-color);
`;

const Content = styled.div`
  width: 92%;
  max-width: 550px;
  margin: auto;
  background-color: #fff;
  box-shadow: 0 3px 7px rgb(0 0 0 / 20%);
  border-radius: 1px;
`;

export const Title = styled.h1`
   color: var(--title-color);
   text-align: center;
   font-size: 100px;
   font-weight: 400;
   margin-bottom: 30px;
`;

export default App;
