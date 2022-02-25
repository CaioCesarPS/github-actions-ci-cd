const { returnString, sumNumbers } = require('./index');

test('Should return a sum of two numbers', () => {
  expect(sumNumbers(1, 2)).toBe(3);
});

test('Should return a string', () => {
  expect(returnString()).toBe('Hello World');
});
