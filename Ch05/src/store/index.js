import { createStore, combineReducers, applyMiddleware } from 'redux';  
import thunk from 'redux-thunk';
import news from '../reducers/news'; 
import user from '../reducers/user';

const logger = store => next => (action) => {
  console.log('此次執行：', action);
  console.log('執行之前的 state：', store.getState());
 
  next(action);
 
  console.log('執行之後的 state：', store.getState()); 
  return '我是 logger1 的回傳值';
};

const store = createStore( 
  combineReducers({ news, user }),  
  applyMiddleware(thunk, logger),
);

export default store;
