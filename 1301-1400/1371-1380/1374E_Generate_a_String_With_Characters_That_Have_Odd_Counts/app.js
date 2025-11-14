// 1374. Generate a String With Characters That Have Odd Counts
// https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function (n) {
  if (n % 2 === 1) return 'a'.repeat(n);
  return 'a'.repeat(n - 1) + 'b';
};

var n = 4;
var expected = 'aaab';
var result = generateTheString(n);
console.log(result, result === expected);

var n = 2;
var expected = 'ab';
var result = generateTheString(n);
console.log(result, result === expected);

var n = 7;
var expected = 'aaaaaaa';
var result = generateTheString(n);
console.log(result, result === expected);
