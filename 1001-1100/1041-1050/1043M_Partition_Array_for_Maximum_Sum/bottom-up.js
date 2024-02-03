// 1043. Partition Array for Maximum Sum
// https://leetcode.com/problems/partition-array-for-maximum-sum/description/
// T.C.: O(n * k)
// S.C.: O(n)
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioning = function (arr, k) {
  const n = arr.length;
  const dp = new Array(n + 1).fill(0);
  for (let start = n - 1; start >= 0; start--) {
    const end = Math.min(n, start + k);
    let max = 0;
    for (let i = start; i < end; i++) {
      max = Math.max(max, arr[i]);
      const count = i - start + 1;
      const currSum = count * max;
      dp[start] = Math.max(dp[start], currSum + dp[i + 1]);
    }
  }
  return dp[0];
};

var arr = [1, 15, 7, 9, 2, 5, 10],
  k = 3;
var expected = 84;
var result = maxSumAfterPartitioning(arr, k);
console.log(result, result === expected);

var arr = [1, 4, 1, 5, 7, 3, 6, 1, 9, 9, 3],
  k = 4;
var expected = 83;
var result = maxSumAfterPartitioning(arr, k);
console.log(result, result === expected);

var arr = [1],
  k = 1;
var expected = 1;
var result = maxSumAfterPartitioning(arr, k);
console.log(result, result === expected);
