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
  const memo = new Array(arr.length);
  return maxSum(arr, k, 0, memo);

  function maxSum(arr, k, start, memo) {
    const n = arr.length;
    if (start >= n) return 0;

    if (memo[start] !== undefined) return memo[start];

    let result = 0;
    let max = 0;
    const end = Math.min(n, start + k);
    for (let i = start; i < end; i++) {
      max = Math.max(max, arr[i]);
      const restSum = maxSum(arr, k, i + 1, memo);
      const count = i - start + 1;
      const currSum = max * count + restSum;
      result = Math.max(result, currSum);
    }
    return (memo[start] = result);
  }
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
