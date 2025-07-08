// 1751. Maximum Number of Events That Can Be Attended II
// https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended-ii/
// T.C.: O(n*(k*n + log n))
// S.C.: O(k*n)
/**
 * @param {number[][]} events
 * @param {number} k
 * @return {number}
 */
var maxValue = function (events, k) {
  events.sort((a, b) => a[0] - b[0]);
  const n = events.length;
  const dp = Array.from({ length: k + 1 }, () => Array(n).fill(undefined));
  return dfs(0, 0, -1);

  function dfs(curIndex, count, prevEndingTime) {
    if (curIndex === n || count === k) {
      return 0;
    }

    if (prevEndingTime >= events[curIndex][0]) {
      return dfs(curIndex + 1, count, prevEndingTime);
    }

    if (dp[count][curIndex] !== undefined) {
      return dp[count][curIndex];
    }

    const skip = dfs(curIndex + 1, count, prevEndingTime);
    const take = events[curIndex][2] + dfs(curIndex + 1, count + 1, events[curIndex][1]);
    dp[count][curIndex] = Math.max(skip, take);
    return dp[count][curIndex];
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
