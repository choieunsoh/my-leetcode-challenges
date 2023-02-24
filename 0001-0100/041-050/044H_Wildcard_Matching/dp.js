// 44. Wildcard Matching
// https://leetcode.com/problems/wildcard-matching/
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  const m = s.length;
  const n = p.length;
  let dp = Array(n + 1).fill(false);
  dp[0] = true;
  for (let i = 1; i <= n; i++) {
    if (p.charAt(i - 1) === '*') {
      dp[i] = dp[i - 1];
    }
  }

  for (let i = 1; i <= m; i++) {
    const current = Array(n + 1).fill(false);
    for (let j = 1; j <= n; j++) {
      const chP = p.charAt(j - 1);
      const chS = s.charAt(i - 1);
      if (chP === '?' || chS === chP) {
        current[j] = current[j] || dp[j - 1];
      } else if (chP === '*') {
        current[j] = current[j - 1] || dp[j];
      }
    }
    dp = current;
  }

  return dp[n];
};

var s = 'aa',
  p = 'aa';
var expected = true;
var result = isMatch(s, p);
console.log(result, result === expected);

var s = 'aa',
  p = 'a';
var expected = false;
var result = isMatch(s, p);
console.log(result, result === expected);

var s = 'aa',
  p = '*';
var expected = true;
var result = isMatch(s, p);
console.log(result, result === expected);

var s = 'cb',
  p = '?a';
var expected = false;
var result = isMatch(s, p);
console.log(result, result === expected);
