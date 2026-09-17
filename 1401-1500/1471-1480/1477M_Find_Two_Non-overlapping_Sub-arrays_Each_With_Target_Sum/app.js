// 1477. Find Two Non-overlapping Sub-arrays Each With Target Sum
// https://leetcode.com/problems/find-two-non-overlapping-sub-arrays-each-with-target-sum/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var minSumOfLengths = function (arr, target) {
  const n = arr.length;
  let result = n + 1;
  let sum = 0;
  let left = 0;
  const dp = new Array(n + 1).fill(n);
  for (let right = 0; right < n; right++) {
    sum += arr[right];
    while (sum > target) {
      sum -= arr[left++];
    }
    dp[right + 1] = dp[right];
    if (sum === target) {
      const length = right - left + 1;
      result = Math.min(result, length + dp[left]);
      dp[right + 1] = Math.min(dp[right], length);
    }
  }
  return result === n + 1 ? -1 : result;
};

var arr = [3, 2, 2, 4, 3],
  target = 3;
var expected = 2;
var result = minSumOfLengths(arr, target);
console.log(result, result === expected);

var arr = [7, 3, 4, 7],
  target = 7;
var expected = 2;
var result = minSumOfLengths(arr, target);
console.log(result, result === expected);

var arr = [4, 3, 2, 6, 2, 3, 4],
  target = 6;
var expected = -1;
var result = minSumOfLengths(arr, target);
console.log(result, result === expected);
