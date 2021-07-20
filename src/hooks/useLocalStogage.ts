import { useEffect, useState } from "react";
import { Todo } from "../interface";

const useLocalStorage = ({todos}: {todos: Todo[]}): {currentTodos: Todo[]} => {

   const [currentTodos, setCurrentTodos] = useState<Todo[]>(() => {
            try {
             const item: string | null = localStorage.getItem('todos');
             return item ? JSON.parse(item) : [];
            } catch (error) {
              return [] as Todo[];
            }
   });

   useEffect(() => {
      
   }, [todos]);

   return {currentTodos};
};

export default useLocalStorage;