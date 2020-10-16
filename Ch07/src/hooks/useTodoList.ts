import { useState } from 'react';
import { Todo } from '../types/todoList';

const useTodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filterDoneTodo, setFilterDoneTodo] = useState<boolean>(false);

  const addTodo = (todo: Todo) => {
    setTodos([
      ...todos,
      todo,
    ]);
  };

  const deleteTodo = (id: number) => {
    const newTodos = todos.filter((todo: Todo) => (
      todo.id !== id
    ));
 
    setTodos(newTodos);
  };

  const switchTodoDoneStatus = (id: number) => {
    const targetTodoIndex = todos.findIndex(
      (todo: Todo) => todo.id === id
    );
 
    const newTodos = [...todos];
 
    newTodos[targetTodoIndex] = {
      ...newTodos[targetTodoIndex],
      done: !newTodos[targetTodoIndex].done,
    };
 
    setTodos(newTodos);
  };

  const switchFilterDoneTodo = () => {
    setFilterDoneTodo(!filterDoneTodo);
  };


  let workTodos = todos;
  if (filterDoneTodo) {
    workTodos = todos.filter(todo => !todo.done);
  }

  return {
    todos: workTodos,
    addTodo,
    switchTodoDoneStatus,
    deleteTodo,
    filterDoneTodo,
    switchFilterDoneTodo,
  } as const;
};

export default useTodoList;
