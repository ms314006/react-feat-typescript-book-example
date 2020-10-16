import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Filter from './Filter';
import TodoItem from './TodoItem';
import Form from './Form'
import { addTodo, deleteTodo, switchTodoDoneStatus, switchFilterDoneTodo } from '../../actions/todo';
import { rootState } from '../../store';
import styles from './index.scss';

const TodoList = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.layout}>
      <div className={styles.todoListWrapper}>
        <div className={styles.header}>
          <span className={styles.title}>
            Todo List
          </span>
          <span className={styles.subTitle}>
            Hi here is a sample todo list.
          </span>
        </div>
        <Filter
          filterDoneTodo={useSelector((state: rootState) => state.filterDoneTodo)}
          switchFilterDoneTodo={() => dispatch(switchFilterDoneTodo())}
        />
        <div className={styles.todoList}>
          {
            useSelector((state: rootState) => state.displayTodos).map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                switchTodoDoneStatus={(id) => dispatch(switchTodoDoneStatus(id))}
                deleteTodo={(id) => dispatch(deleteTodo(id))}
              />
            ))
          }
        </div>
        <Form addTodo={(todo) => dispatch(addTodo(todo))} />
      </div>
    </div>
  )
};

export default TodoList;