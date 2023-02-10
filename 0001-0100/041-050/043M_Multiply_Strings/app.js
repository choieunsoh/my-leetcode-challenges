// 43. Multiply Strings
// https://leetcode.com/problems/multiply-strings/
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  if (num1 === '0' || num2 === '0') return '0';
  const zero = '0'.charCodeAt(0);
  const result = Array(num1.length + num2.length).fill(0);
  for (let i = num1.length - 1; i >= 0; i--) {
    for (let j = num2.length - 1; j >= 0; j--) {
      const x = num1.charCodeAt(i) - zero;
      const y = num2.charCodeAt(j) - zero;
      const index = i + j + 1;
      const xy = x * y + result[index];
      result[index] = xy % 10;
      result[index - 1] += Math.floor(xy / 10);
    }
  }

  if (result[0] === 0) result.shift();
  return result.join('');
};

var num1 = '2',
  num2 = '3';
var expected = '6';
var result = multiply(num1, num2);
console.log(result, result == expected);

var num1 = '123',
  num2 = '456';
var expected = '56088';
var result = multiply(num1, num2);
console.log(result, result == expected);
