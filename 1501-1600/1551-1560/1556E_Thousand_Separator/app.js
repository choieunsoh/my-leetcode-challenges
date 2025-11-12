// 1556. Thousand Separator
// https://leetcode.com/problems/thousand-separator/
// T.C.: O(log n)
// S.C.: O(1)
/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function (n) {
  let result = '';
  let count = 0;
  while (n > 0) {
    if (count === 3) {
      result = '.' + result;
      count = 0;
    }

    const digit = n % 10;
    n = (n / 10) | 0;
    result = digit + result;
    count++;
  }
  return result || '0';
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
