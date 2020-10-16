import { createStore } from 'redux';
import todos from '../reducers/todo';

export type rootState = ReturnType<typeof todos>;

export default createStore(todos);
