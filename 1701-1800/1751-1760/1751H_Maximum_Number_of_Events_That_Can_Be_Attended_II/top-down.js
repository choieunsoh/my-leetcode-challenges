// 1751. Maximum Number of Events That Can Be Attended II
// https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended-ii/
// T.C.: O(k*n log n)
// S.C.: O(k*n)
/**
 * @param {number[][]} events
 * @param {number} k
 * @return {number}
 */
var maxValue = function (events, k) {
  events.sort((a, b) => a[0] - b[0]);
  const n = events.length;
  const dp = Array.from({ length: k + 1 }, () => new Array(n).fill(-1));
  return dfs(0, k);

  function dfs(curIndex, count) {
    if (count === 0 || curIndex === n) {
      return 0;
    }
    if (dp[count][curIndex] !== -1) {
      return dp[count][curIndex];
    }
    const nextIndex = bisectRight(events, events[curIndex][1]);
    const skip = dfs(curIndex + 1, count);
    const take = events[curIndex][2] + dfs(nextIndex, count - 1);
    dp[count][curIndex] = Math.max(skip, take);
    return dp[count][curIndex];
  }

  function bisectRight(events, target) {
    let left = 0;
    let right = events.length;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
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
