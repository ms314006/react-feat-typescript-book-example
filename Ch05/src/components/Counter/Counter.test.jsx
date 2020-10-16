import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom/matchers';
import Counter from './Counter';
 
expect.extend({ toBeInTheDocument });
 
test('The default text display in view will be 目前數字：0', () => {
  // Arrange
  const { getByText } = render(<Counter />);
 
  // Act
  expect(getByText('目前數字：0')).toBeInTheDocument();
});

test('The text of count display in view will from 0 change to 1 after I clicked 點我加一 button', () => {
  // Arrange
  const { getByText, queryByText } = render(<Counter />);
 
  // Act
  fireEvent.click(getByText('點我加一'));
 
  // Assert
  expect(queryByText('目前數字：0')).not.toBeInTheDocument();
  expect(getByText('目前數字：1')).toBeInTheDocument();
});
