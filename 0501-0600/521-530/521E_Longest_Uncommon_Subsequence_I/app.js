// https://leetcode.com/problems/longest-uncommon-subsequence-i/
// 521. Longest Uncommon Subsequence I
/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function (a, b) {
  if (a === b) return -1;
  return a.length > b.length ? a.length : b.length;
};

var a = 'aba',
  b = 'cdc';
var expected = 3;
var result = findLUSlength(a, b);
console.log(result, result === expected);

var a = 'aaa',
  b = 'bbb';
var expected = 3;
var result = findLUSlength(a, b);
console.log(result, result === expected);

var a = 'aaa',
  b = 'aaa';
var expected = -1;
var result = findLUSlength(a, b);
console.log(result, result === expected);
