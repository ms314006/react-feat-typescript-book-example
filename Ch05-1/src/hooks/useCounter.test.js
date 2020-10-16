import { renderHook, act } from '@testing-library/react-hooks';
import useCounter from './useCounter';
 
test('The default count will be the received parameter.', () => {
  // Arrange
  const { result } = renderHook(() => useCounter(8, () => {}));
  const expected = 8;
 
  // Assert
  expect(result.current.count).toBe(expected);
});

test('The default count will be the received parameter.', () => {
  // Arrange
  const { result } = renderHook(() => useCounter(8, () => {}));
  const expected = 24;
 
  // Act
  act(() => { result.current.add(16); });
 
  // Assert
  expect(result.current.count).toBe(expected);
});

test('The callback function will executed after the add executed.', () => {
  // Arrange
  const mockCallback = jest.fn();
  const { result } = renderHook(() => useCounter(8, mockCallback));
 
  // Act
  act(() => { result.current.add(16); });
 
  // Assert
  expect(mockCallback.mock.calls.length).toBe(2);
});
