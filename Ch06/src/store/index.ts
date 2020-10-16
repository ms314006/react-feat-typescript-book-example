import { createStore, combineReducers, applyMiddleware, Middleware } from 'redux';  
import thunk from 'redux-thunk';
import news from '../reducers/news'; 
import user from '../reducers/user';

const logger: Middleware = store => next => (action) => {
  console.log('此次執行：', action);
  console.log('執行之前的 state：', store.getState());
 
  next(action);
 
  console.log('執行之後的 state：', store.getState()); 
  return '我是 logger1 的回傳值';
};
 
const rootReducer = combineReducers({ news, user });
 
export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(  
  rootReducer,  
  applyMiddleware(thunk, logger),
);

export default store;
