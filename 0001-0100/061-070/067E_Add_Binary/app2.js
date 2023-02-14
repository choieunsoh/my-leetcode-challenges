// 67. Add Binary
// https://leetcode.com/problems/add-binary/
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  let result = '';
  while (carry || i >= 0 || j >= 0) {
    const A = +a.charAt(i--) ?? 0;
    const B = +b.charAt(j--) ?? 0;
    const sum = carry + A + B;
    carry = sum >> 1;
    result = (sum & 1) + result;
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
