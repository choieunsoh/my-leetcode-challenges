// 115. Distinct Subsequences
// https://leetcode.com/problems/distinct-subsequences/description/
// T.C.: O(m*n)
// S.C.: O(n)
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
  const M = s.length;
  const N = t.length;
  const dp = new Array(N).fill(0);
  let prev = 1;
  // Iterate over the strings in reverse so as to
  // satisfy the way we've modeled our recursive solution
  for (let i = M - 1; i >= 0; i--) {
    // At each step we start with the last value in
    // the row which is always 1. Notice how we are
    // starting the loop from N - 1 instead of N like
    // in the previous solution.
    prev = 1;
    for (let j = N - 1; j >= 0; j--) {
      // Record the current value in this cell so that
      // we can use it to calculate the value of dp[j - 1]
      const old_dpj = dp[j];
      // If the characters match, we add the
      // result of the next recursion call (in this
      // case, the value of a cell in the dp table
      if (s.charAt(i) == t.charAt(j)) {
        dp[j] += prev;
      }
      // Update the prev variable
      prev = old_dpj;
    }
  }
  return dp[0];
};

var s = 'rabbbit',
  t = 'rabbit';
var expected = 3;
var result = numDistinct(s, t);
console.log(result, result === expected);

var s = 'babgbag',
  t = 'bag';
var expected = 5;
var result = numDistinct(s, t);
console.log(result, result === expected);
