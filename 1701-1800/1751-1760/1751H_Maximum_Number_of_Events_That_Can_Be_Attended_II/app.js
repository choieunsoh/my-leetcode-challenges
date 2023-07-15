// 1751. Maximum Number of Events That Can Be Attended II
// https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended-ii/
/**
 * @param {number[][]} events
 * @param {number} k
 * @return {number}
 */
var maxValue = function (events, k) {
  events.sort((a, b) => a[0] - b[0]);
  const n = events.length;
  const nextIndices = new Array(n);
  const dp = Array.from({ length: k + 1 }, () => new Array(n).fill(-1));
  for (let i = 0; i < n; i++) {
    nextIndices[i] = binarySearch(events[i][1]);
  }
  dfs(0, k);
  return dp[k][0];

  function dfs(currIndex, remain) {
    if (remain === 0 || currIndex === n) {
      return 0;
    }
    if (dp[remain][currIndex] !== -1) {
      return dp[remain][currIndex];
    }

    const nextIndex = nextIndices[currIndex];
    const take = events[currIndex][2] + dfs(nextIndex, remain - 1);
    const skip = dfs(currIndex + 1, remain);
    dp[remain][currIndex] = Math.max(take, skip);
    return dp[remain][currIndex];
  }

  function binarySearch(target) {
    let left = 0;
    let right = n;
    while (left < right) {
      const mid = (left + right) >> 1;
      if (events[mid][0] <= target) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    return left;
  }
};

var events = [
    [1, 2, 4],
    [3, 4, 3],
    [2, 3, 1],
  ],
  k = 2;
var expected = 7;
var result = maxValue(events, k);
console.log(result, result === expected);

var events = [
    [1, 2, 4],
    [3, 4, 3],
    [2, 3, 10],
  ],
  k = 2;
var expected = 10;
var result = maxValue(events, k);
console.log(result, result === expected);

var events = [
    [1, 1, 1],
    [2, 2, 2],
    [3, 3, 3],
    [4, 4, 4],
  ],
  k = 3;
var expected = 9;
var result = maxValue(events, k);
console.log(result, result === expected);
