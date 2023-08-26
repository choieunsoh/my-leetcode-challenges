// 646. Maximum Length of Pair Chain
// https://leetcode.com/problems/maximum-length-of-pair-chain/
/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function (pairs) {
  let result = 1;
  const n = pairs.length;
  pairs.sort((a, b) => a[0] - b[0]);
  const dp = new Array(n).fill(1);
  for (let i = n - 1; i > -1; i--) {
    for (let j = i + 1; j < n; j++) {
      if (pairs[i][1] < pairs[j][0]) {
        dp[i] = Math.max(dp[i], 1 + dp[j]);
      }
    }
    result = Math.max(result, dp[i]);
  }
  return result;
};

var pairs = [
  [1, 2],
  [2, 3],
  [3, 4],
];
var expected = 2;
var result = findLongestChain(pairs);
console.log(result, result === expected);

var pairs = [
  [1, 2],
  [7, 8],
  [4, 5],
];
var expected = 3;
var result = findLongestChain(pairs);
console.log(result, result === expected);
