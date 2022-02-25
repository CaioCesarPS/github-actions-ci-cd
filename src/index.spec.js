const sumNumbers = require('./index')

test('Should return a sum of two numbers', () => {
  expect(sumNumbers(1, 2)).toBe(3)
})