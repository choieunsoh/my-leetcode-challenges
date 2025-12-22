// 960. Delete Columns to Make Sorted III
// https://leetcode.com/problems/delete-columns-to-make-sorted-iii/description/
// T.C.: O(n*w^2)
// S.C.: O(w)
/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
  const w = strs[0].length;
  const dp = new Array(w).fill(1);
  for (let i = w - 2; i >= 0; i--) {
    search: for (let j = i + 1; j < w; j++) {
      for (const str of strs) {
        if (str[i] > str[j]) {
          continue search;
        }
      }
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }

  const kept = Math.max(...dp);
  return w - kept;
};

var strs = ['babca', 'bbazb'];
var expected = 3;
var result = minDeletionSize(strs);
console.log(result, result === expected);

var strs = ['edcba'];
var expected = 4;
var result = minDeletionSize(strs);
console.log(result, result === expected);

var strs = ['ghi', 'def', 'abc'];
var expected = 0;
var result = minDeletionSize(strs);
console.log(result, result === expected);
