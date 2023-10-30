// 397. Integer Replacement
// https://leetcode.com/problems/integer-replacement/
// T.C.: O(log n)
// S.C.: O(n)
/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function (n, memo = new Map()) {
  if (n === 1) return 0;
  if (memo.has(n)) return memo.get(n);
  let result = 1;
  if (n & 1) {
    result += Math.min(integerReplacement(n + 1, memo), integerReplacement(n - 1, memo));
  } else {
    result += integerReplacement(n / 2, memo);
  }
  memo.set(n, result);
  return result;
};

var n = 8;
var expected = 3;
var result = integerReplacement(n);
console.log(result, result === expected);

var n = 7;
var expected = 4;
var result = integerReplacement(n);
console.log(result, result === expected);

var n = 4;
var expected = 2;
var result = integerReplacement(n);
console.log(result, result === expected);

var n = 9;
var expected = 4;
var result = integerReplacement(n);
console.log(result, result === expected);
