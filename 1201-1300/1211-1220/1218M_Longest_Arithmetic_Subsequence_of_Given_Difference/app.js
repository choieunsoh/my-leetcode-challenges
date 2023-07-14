// 1218. Longest Arithmetic Subsequence of Given Difference
// https://leetcode.com/problems/longest-arithmetic-subsequence-of-given-difference/
/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
var longestSubsequence = function (arr, difference) {
  let result = 1;
  const dp = new Map();
  for (const num of arr) {
    const target = num - difference;
    const length = dp.get(target) ?? 0;
    dp.set(num, length + 1);
    result = Math.max(result, length + 1);
  }
  return result;
};

var arr = [1, 2, 3, 4],
  difference = 1;
var expected = 4;
var result = longestSubsequence(arr, difference);
console.log(result, result === expected);

var arr = [1, 3, 5, 7],
  difference = 1;
var expected = 1;
var result = longestSubsequence(arr, difference);
console.log(result, result === expected);

var arr = [1, 5, 7, 8, 5, 3, 4, 2, 1],
  difference = -2;
var expected = 4;
var result = longestSubsequence(arr, difference);
console.log(result, result === expected);
