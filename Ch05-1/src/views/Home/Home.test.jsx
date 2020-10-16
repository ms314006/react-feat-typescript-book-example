import 'regenerator-runtime/runtime';
import 'core-js/stable'; 
import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { render, waitFor } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom/matchers';
import user from '../../reducers/user';
import Home from './Home.jsx';

expect.extend({ toBeInTheDocument });
 
test('The view will display user information from api after Home rendered', async () => {
  // Arrange
  global.fetch = jest.fn().mockResolvedValue(
    { json: () => ({ user: '神 Q 超人' }) }
  );
  const store = createStore(
    combineReducers({ user }),
    applyMiddleware(thunk),
  );
  const { getByText } = render(
    <Provider store={store}>
      <Home />
    </Provider>
  );

  await waitFor(() => {
    expect(getByText(/神 Q 超人/)).toBeInTheDocument();
  });
});
