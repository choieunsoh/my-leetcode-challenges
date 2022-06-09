// https://leetcode.com/problems/add-binary/
// 67. Add Binary
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let i = 1;
  let carry = 0;
  let result = '';
  while (a.length - i >= 0 && b.length - i >= 0) {
    let c = carry + +a[a.length - i] + +b[b.length - i];
    carry = c > 1 ? 1 : 0;
    c = c % 2;
    result = c + result;
    i++;
  }

  while (a.length - i >= 0) {
    let c = carry + +a[a.length - i];
    carry = c > 1 ? 1 : 0;
    c = c % 2;
    result = c + result;
    i++;
  }

  while (b.length - i >= 0) {
    let c = carry + +b[b.length - i];
    carry = c > 1 ? 1 : 0;
    c = c % 2;
    result = c + result;
    i++;
  }

  return carry === 1 ? carry + result : result;
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
