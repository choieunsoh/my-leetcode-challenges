// 873. Length of Longest Fibonacci Subsequence
// https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/description/
// T.C.: O(n^2)
// S.C.: O(n^2)
/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function (arr) {
  const dp = new Map();
  const set = new Set(arr);
  const k = 1e9;
  for (let i = 2; i < arr.length; i++) {
    const c = arr[i];
    for (let j = 1; j < i; j++) {
      const b = arr[j];
      const a = c - b;
      if (a >= b || !set.has(a)) continue;
      dp.set(k * b + c, (dp.get(k * a + b) ?? 2) + 1);
    }
  }
  return Math.max(0, ...dp.values());
};

var arr = [1, 2, 3, 4, 5, 6, 7, 8];
var expected = 5;
var result = lenLongestFibSubseq(arr);
console.log(result, result === expected);

var arr = [1, 3, 7, 11, 12, 14, 18];
var expected = 3;
var result = lenLongestFibSubseq(arr);
console.log(result, result === expected);
