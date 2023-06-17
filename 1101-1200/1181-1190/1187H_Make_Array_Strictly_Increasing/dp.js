// 1187. Make Array Strictly Increasing
// https://leetcode.com/problems/make-array-strictly-increasing/
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var makeArrayIncreasing = function (arr1, arr2) {
  const n = arr1.length;
  arr2 = [...new Set(arr2)];
  const m = arr2.length;
  arr2.sort((a, b) => a - b);
  arr1.unshift(-1);
  const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(Number.MAX_VALUE));
  for (let i = 0; i <= m; i++) dp[0][i] = 0;
  // dp[i][j] means min to make first i element increasing by replacing ith element with jth element
  // dp[i][j] = Math.min(dp[i - 1][k] where k < j)
  // dp[i][m] = min to make first i element increasing by not replacing
  // dp[i][m] = Math.min(dp[i - 1][k] where arr2[k] < arr1[i], dp[i - 1][m] if arr1[i - 1] < arr1[i]);
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < m; j++) {
      if (j > 0) {
        dp[i][j] = Math.min(dp[i][j], dp[i - 1][j - 1] + 1);
      }
      if (arr1[i - 1] < arr2[j]) {
        dp[i][j] = Math.min(dp[i][j], dp[i - 1][m] + 1);
      }
    }

    if (arr1[i - 1] < arr1[i]) {
      dp[i][m] = dp[i - 1][m];
    }

    for (let j = 0; j < m && arr2[j] < arr1[i]; j++) {
      dp[i][m] = Math.min(dp[i][m], dp[i - 1][j]);
    }
  }

  let result = Number.MAX_VALUE;
  for (let i = 0; i <= m; i++) {
    result = Math.min(result, dp[n][i]);
  }
  return result === Number.MAX_VALUE ? -1 : result;
};

var arr1 = [1, 5, 3, 6, 7],
  arr2 = [1, 3, 2, 4];
var expected = 1;
var result = makeArrayIncreasing(arr1, arr2);
console.log(result, result === expected);

var arr1 = [1, 5, 3, 6, 7],
  arr2 = [4, 3, 1];
var expected = 2;
var result = makeArrayIncreasing(arr1, arr2);
console.log(result, result === expected);

var arr1 = [1, 5, 3, 6, 7],
  arr2 = [1, 6, 3, 3];
var expected = -1;
var result = makeArrayIncreasing(arr1, arr2);
console.log(result, result === expected);
