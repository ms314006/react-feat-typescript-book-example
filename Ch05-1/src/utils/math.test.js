import { addTwoNumbers } from './math';
 
test('The result of addTwoNumbers will be 5 if use 3 and 2', () => {
  /* 測試內容 */
  const expected = 5; // Arrange
 
  const result = addTwoNumbers(3, 2); // Act
 
  expect(result).toBe(expected); // Assert
});
