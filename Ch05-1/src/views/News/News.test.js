import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import {
  toBeInTheDocument,
  toHaveTextContent
} from '@testing-library/jest-dom/matchers';
import news from '../../reducers/news';
import News from './News.jsx';

expect.extend({ toBeInTheDocument, toHaveTextContent });
 
test('The page will change to news information when I clicked the news item.', () => {
  // Arrange
  const store = createStore(combineReducers({ news }));
  const { getByText } = render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/news']}>
        <News />
      </MemoryRouter>
    </Provider>
  );
 
  // Act
  fireEvent.click(getByText('第一筆最新消息'));
 
  // Assert
  expect(getByText('您正在閱讀 第一筆最新消息')).toBeInTheDocument();
  expect(getByText('這裡是第一筆哦！')).toBeInTheDocument();
});

test('The News list will add a new news if I use NewsForm create.', () => {
  // Arrange
  const store = createStore(combineReducers({ news }));
  const { getByText, getByPlaceholderText, getAllByRole } = render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/news']}>
        <News />
      </MemoryRouter>
    </Provider>
  );
 
  // Act
  fireEvent.change(
    getByPlaceholderText('請輸入名稱'), { target: { value: '測試名稱' } }
  );
  fireEvent.change(
    getByPlaceholderText('請輸入敘述'), { target: { value: '測試敘述' } }
  );
  fireEvent.click(getByText('新增最新消息'));
 
  // Assert
  const newsList = getAllByRole('link');
  expect(newsList.length).toBe(4);
  expect(newsList[3]).toHaveTextContent('測試名稱');
});

test('The News item will remove from news list if I click it‘s delete button', () => {
  const store = createStore(combineReducers({ news }));
  const { queryByText, getAllByText, getAllByRole } = render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/news']}>
        <News />
      </MemoryRouter>
    </Provider>
  );
 
  const deleteNewsBtns = getAllByText('刪除');
  fireEvent.click(deleteNewsBtns[0]);

  const newsList = getAllByRole('link');
  expect(newsList.length).toBe(2);
  expect(queryByText('第一筆最新消息')).not.toBeInTheDocument();
});
