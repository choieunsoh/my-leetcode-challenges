// 873. Length of Longest Fibonacci Subsequence
// https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/description/
// T.C.: O(n^2)
// S.C.: O(n^2)
/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function (arr) {
  let maxLen = 0;
  const n = arr.length;
  const dp = Array.from({ length: n }, () => new Array(n).fill(0));
  const valueToIndex = new Map();
  for (let next = 0; next < n; next++) {
    valueToIndex.set(arr[next], next);

    for (let curr = 0; curr < next; curr++) {
      const target = arr[next] - arr[curr];
      if (target < arr[curr] && valueToIndex.has(target)) {
        const prev = valueToIndex.get(target);
        dp[curr][next] = dp[prev][curr] + 1;
      } else {
        dp[curr][next] = 2;
      }
      maxLen = Math.max(maxLen, dp[curr][next]);
    }
  }
  return maxLen > 2 ? maxLen : 0;
};

var arr = [1, 2, 3, 4, 5, 6, 7, 8];
var expected = 5;
var result = lenLongestFibSubseq(arr);
console.log(result, result === expected);

var arr = [1, 3, 7, 11, 12, 14, 18];
var expected = 3;
var result = lenLongestFibSubseq(arr);
console.log(result, result === expected);
