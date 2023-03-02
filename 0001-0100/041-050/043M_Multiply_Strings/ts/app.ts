// 43. Multiply Strings
// https://leetcode.com/problems/multiply-strings/
var multiply = function (num1: string, num2: string): string {
  if (num1 === '0' || num2 === '0') return '0';
  const n1 = num1.length;
  const n2 = num2.length;
  const result = Array(n1 + n2).fill(0);
  for (let i = n1 - 1; i >= 0; i--) {
    for (let j = n2 - 1; j >= 0; j--) {
      const x = Number(num1.charAt(i));
      const y = Number(num2.charAt(j));
      const index = i + j + 1;
      const carry = result[index];
      const xy = x * y + carry;
      result[index] = xy % 10;
      result[index - 1] += (xy / 10) | 0;
    }
  }
  if (result[0] === 0) return result.slice(1).join('');
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
