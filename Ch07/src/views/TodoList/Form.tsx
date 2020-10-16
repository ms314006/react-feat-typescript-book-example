import React, { useState } from 'react';
import { Todo } from '../../types/todoList';
import styles from './index.scss';

type FormProps = {
  addTodo: (todo: Todo) => void
}

const Form = (props: FormProps) => {
  const [name, setName] = useState<string>('');
  const submitForm = () => {
    const newTodo = { id: Math.random(), name, done: false, };
    props.addTodo(newTodo);
    setName('');
  }
  return (
    <div className={styles.form}>
      <span>Add to the todo list</span>
      <div>
        <input
          type="input"
          className={styles.todoInput}
          value={name}
          onChange={(e) => { setName(e.target.value); }}
        />
        <button type="button" className={styles.submitBtn} onClick={submitForm}>
          ADD
        </button>
      </div>
    </div>
  )
};

export default Form;
