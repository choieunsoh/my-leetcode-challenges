// 1556. Thousand Separator
// https://leetcode.com/problems/thousand-separator/
// T.C.: O(log n)
// S.C.: O(1)
/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function (n) {
  // `\B` = non-word boundary
  // `(?=(\d{3})+(?!\d))` = lookahead for groups of 3 digits not followed by another digit
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
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
