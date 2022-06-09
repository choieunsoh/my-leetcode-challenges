// https://leetcode.com/problems/add-binary/
// 67. Add Binary
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let result = '';
  let carry = 0;

  while (a || b || carry) {
    let sum = +a.slice(-1) + +b.slice(-1) + carry;

    result = (sum % 2) + result;
    carry = sum > 1 ? 1 : 0;

    a = a.slice(0, -1);
    b = b.slice(0, -1);
  }

  return result;
};

var a = '11',
  b = '1';
var expected = '100';
var result = addBinary(a, b);
console.log(result, expected === result);

var a = '1010',
  b = '1011';
var expected = '10101';
var result = addBinary(a, b);
console.log(result, expected === result);
