// 2311. Longest Binary Subsequence Less Than or Equal to K
// https://leetcode.com/problems/longest-binary-subsequence-less-than-or-equal-to-k/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubsequence = function (s, k) {
  const n = s.length;
  const bits = k.toString(2).length;
  let count = 0;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    const ch = s[n - 1 - i];
    if (ch === '0') {
      count++;
    } else {
      const value = 1 << i;
      if (i < bits && sum + value <= k) {
        count++;
        sum += value;
      }
    }
  }

  return count;
};

var s = '1001010',
  k = 5;
var expected = 5;
var result = longestSubsequence(s, k);
console.log(result, result === expected);

var s = '00101001',
  k = 1;
var expected = 6;
var result = longestSubsequence(s, k);
console.log(result, result === expected);
