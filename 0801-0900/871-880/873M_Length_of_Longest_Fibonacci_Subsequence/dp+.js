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
  for (let curr = 2; curr < n; curr++) {
    let start = 0;
    let end = curr - 1;
    while (start < end) {
      const pairSum = arr[start] + arr[end];
      if (pairSum > arr[curr]) {
        end--;
      } else if (pairSum < arr[curr]) {
        start++;
      } else {
        dp[end][curr] = dp[start][end] + 1;
        maxLen = Math.max(dp[end][curr], maxLen);
        end--;
        start++;
      }
    }
  }
  return maxLen === 0 ? 0 : maxLen + 2;
};

var arr = [1, 2, 3, 4, 5, 6, 7, 8];
var expected = 5;
var result = lenLongestFibSubseq(arr);
console.log(result, result === expected);

var arr = [1, 3, 7, 11, 12, 14, 18];
var expected = 3;
var result = lenLongestFibSubseq(arr);
console.log(result, result === expected);
