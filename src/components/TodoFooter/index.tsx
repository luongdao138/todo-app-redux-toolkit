import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { changeMode, clear } from '../../features/todos/todoSlice';
import { Todo } from '../../interface';
import { Text, Wrapper, Button, Content, ButtonWrapper, ButtonFilter,SmallScreenWrapper } from './TodoFooter.styles';

const TodoFooter = () => {
 const dispatch = useAppDispatch();
 const {filterMode, list} = useAppSelector(state => state.todos);
 const itemLeft = useAppSelector(state => state.itemLeft);
 const getAllTodos = (): Todo[] => localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos') as string) : [];
 const handleChangeFilterMode = (mode: string): void => {
      if(mode !== filterMode) {
          dispatch(changeMode({mode}));
      }
 }

 return (
  <>
   {
      getAllTodos().length > 0 && <>
      <Wrapper>
   <Content justify='space-between'>
    <div style={{display: 'flex', alignItems: 'center'}}>
    <Text> {itemLeft} items left</Text>

    </div>
    <ButtonWrapper disappear={true}>     
      <ButtonFilter active={filterMode === 'all'} onClick={() => handleChangeFilterMode('all')}>
         <Text>All</Text>
      </ButtonFilter>
      <ButtonFilter active={filterMode === 'active'} onClick={() => handleChangeFilterMode('active')}>
         <Text>Active</Text>
      </ButtonFilter>
      <ButtonFilter active={filterMode === 'completed'} onClick={() => handleChangeFilterMode('completed')}>
         <Text>Completed</Text>
      </ButtonFilter>
    </ButtonWrapper>
    {
        list.some(t => t.isComplete) && <Button onClick={() => dispatch(clear())}>
      <Text>
       Clear completed
      </Text>
    </Button>
    }
   </Content>
  </Wrapper>
   <SmallScreenWrapper>
   <Content justify='center'>
     <ButtonWrapper disappear={false}>     
      <ButtonFilter active={filterMode === 'all'} onClick={() => handleChangeFilterMode('all')}>
         <Text>All</Text>
      </ButtonFilter>
      <ButtonFilter active={filterMode === 'active'} onClick={() => handleChangeFilterMode('active')}>
         <Text>Active</Text>
      </ButtonFilter>
      <ButtonFilter active={filterMode === 'completed'} onClick={() => handleChangeFilterMode('completed')}>
         <Text>Completed</Text>
      </ButtonFilter>
    </ButtonWrapper>
   </Content>
   </SmallScreenWrapper>
      </>
   }
  </>
 )
}

export default TodoFooter
