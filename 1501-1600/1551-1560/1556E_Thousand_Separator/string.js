// 1556. Thousand Separator
// https://leetcode.com/problems/thousand-separator/
// T.C.: O(log n)
// S.C.: O(1)
/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function (n) {
  let s = n.toString();
  let result = '';
  for (let i = s.length - 1, count = 0; i >= 0; i--) {
    if (count === 3) {
      result = '.' + result;
      count = 0;
    }
    result = s[i] + result;
    count++;
  }
  return result;
};

var n = 987;
var expected = '987';
var result = thousandSeparator(n);
console.log(result, result === expected);

var n = 1234;
var expected = '1.234';
var result = thousandSeparator(n);
console.log(result, result === expected);

var n = 0;
var expected = '0';
var result = thousandSeparator(n);
console.log(result, result === expected);

var n = 1;
var expected = '1';
var result = thousandSeparator(n);
console.log(result, result === expected);

var n = 123456789;
var expected = '123.456.789';
var result = thousandSeparator(n);
console.log(result, result === expected);
