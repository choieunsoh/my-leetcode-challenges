// 873. Length of Longest Fibonacci Subsequence
// https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/description/
// T.C.: O(n^2 log m)
// S.C.: O(n)
/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function (arr) {
  let maxLen = 0;
  const n = arr.length;
  const numSet = new Set(arr);
  for (let start = 0; start < n; ++start) {
    for (let next = start + 1; next < n; ++next) {
      // Start with first two numbers
      let prev = arr[next];
      let curr = arr[start] + arr[next];
      let len = 2;

      // Keep finding next Fibonacci number
      while (numSet.has(curr)) {
        // Update values for next iteration
        [prev, curr] = [curr, curr + prev];
        maxLen = Math.max(maxLen, ++len);
      }
    }
  }
  return maxLen;
};

var arr = [1, 2, 3, 4, 5, 6, 7, 8];
var expected = 5;
var result = lenLongestFibSubseq(arr);
console.log(result, result === expected);

var arr = [1, 3, 7, 11, 12, 14, 18];
var expected = 3;
var result = lenLongestFibSubseq(arr);
console.log(result, result === expected);
