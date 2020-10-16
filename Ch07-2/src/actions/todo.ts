import { Todo } from '../types/todoList';
 
interface AddTodo {
  type: 'ADD_TODO'
  payload: Todo
};
 
interface DeleteAdd {
  type: 'DELETE_TODO'
  payload: number,
};
 
interface SwitchTodoDoneStatus {
  type: 'SWITCH_TODO_DONE_STATUS',
  payload: number,
};
 
interface SwitchFilterDoneTodo {
  type: 'SWITCH_FILTER_DONE_TODO',
};

interface GetTodoById {
  type: 'GET_TODO_BY_ID',
  payload: number,
};
 
export const addTodo = (todo: Todo): AddTodo => ({
  type: 'ADD_TODO',
  payload: todo,
});
 
export const deleteTodo = (id: number): DeleteAdd => ({
  type: 'DELETE_TODO',
  payload: id,
});
 
export const switchTodoDoneStatus = (id: number): SwitchTodoDoneStatus => ({
  type: 'SWITCH_TODO_DONE_STATUS',
  payload: id,
});
 
export const switchFilterDoneTodo = (): SwitchFilterDoneTodo => ({
  type: 'SWITCH_FILTER_DONE_TODO',
});
 
export const getTodoById = (id :number): GetTodoById => ({
  type: 'GET_TODO_BY_ID',
  payload: id,
});

export type TodoActionTypes = AddTodo | DeleteAdd | SwitchTodoDoneStatus | SwitchFilterDoneTodo | GetTodoById;
