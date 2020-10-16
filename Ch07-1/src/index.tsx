import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import TodoList from './views/TodoList';
 
ReactDOM.render(
  <TodoList />,
  document.getElementById('root')
);
