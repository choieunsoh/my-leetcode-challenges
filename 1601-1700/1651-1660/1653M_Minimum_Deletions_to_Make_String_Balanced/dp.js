// 1653. Minimum Deletions to Make String Balanced
// https://leetcode.com/problems/minimum-deletions-to-make-string-balanced/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function (s) {
  const n = s.length;
  const dp = new Array(n + 1).fill(0);
  let bCount = 0;
  for (let i = 0; i < n; i++) {
    // dp[i]: The number of deletions required to
    // balance the substring s[0, i)
    if (s.charAt(i) === 'b') {
      dp[i + 1] = dp[i];
      bCount++;
    } else {
      // Two cases: remove 'a' or keep 'a'
      dp[i + 1] = Math.min(dp[i] + 1, bCount);
    }
  }
  return dp[n];
};

var s = 'aababbab';
var expected = 2;
var result = minimumDeletions(s);
console.log(result, result === expected);

var s = 'bbaaaaabb';
var expected = 2;
var result = minimumDeletions(s);
console.log(result, result === expected);
