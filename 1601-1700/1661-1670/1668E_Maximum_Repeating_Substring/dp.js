// 1668. Maximum Repeating Substring
// https://leetcode.com/problems/maximum-repeating-substring/description/
// T.C.: O(n*m)
// S.C.: O(n)
/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function (sequence, word) {
  const n = sequence.length;
  const m = word.length;

  // dp[i] = maximum k-repeating count ending exactly at index i
  const dp = new Array(n).fill(0);
  let maxK = 0;

  for (let i = m - 1; i < n; i++) {
    // Check if word appears ending at position i
    if (sequence.substring(i - m + 1, i + 1) === word) {
      if (i >= m) {
        dp[i] = dp[i - m] + 1;
      } else {
        dp[i] = 1;
      }
      maxK = Math.max(maxK, dp[i]);
    }
    // else dp[i] remains 0 (already initialized)
  }

  return maxK;
};

var sequence = 'ababc',
  word = 'ab';
var expected = 2;
var result = maxRepeating(sequence, word);
console.log(result, result === expected);

var sequence = 'ababc',
  word = 'ba';
var expected = 1;
var result = maxRepeating(sequence, word);
console.log(result, result === expected);

var sequence = 'ababc',
  word = 'ac';
var expected = 0;
var result = maxRepeating(sequence, word);
console.log(result, result === expected);

var sequence = 'aaabaaaabaaabaaaabaaaabaaaabaaaaba',
  word = 'aaaba';
var expected = 5;
var result = maxRepeating(sequence, word);
console.log(result, result === expected);
