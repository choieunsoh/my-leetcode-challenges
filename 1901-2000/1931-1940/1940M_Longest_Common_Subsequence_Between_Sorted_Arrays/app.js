// 1940. Longest Common Subsequence Between Sorted Arrays
// https://leetcode.com/problems/longest-common-subsequence-between-sorted-arrays/description/
// T.C.: O(m*n)
// S.C.: O(m*n)
/**
 * @param {number[][]} arrays
 * @return {number[]}
 */
var longestCommonSubsequence = function (arrays) {
  const n = arrays.length;
  const counts = new Map();
  const result = [];
  for (const array of arrays) {
    for (const num of array) {
      counts.set(num, (counts.get(num) ?? 0) + 1);
      if (counts.get(num) === n) {
        result.push(num);
      }
    }
  }

  return result;
};

var arrays = [
  [1, 3, 4],
  [1, 4, 7, 9],
];
var expected = [1, 4];
var result = longestCommonSubsequence(arrays);
console.log(result, result.join() === expected.join());

var arrays = [
  [2, 3, 6, 8],
  [1, 2, 3, 5, 6, 7, 10],
  [2, 3, 4, 6, 9],
];
var expected = [2, 3, 6];
var result = longestCommonSubsequence(arrays);
console.log(result, result.join() === expected.join());

var arrays = [
  [1, 2, 3, 4, 5],
  [6, 7, 8],
];
var expected = [];
var result = longestCommonSubsequence(arrays);
console.log(result, result.join() === expected.join());
