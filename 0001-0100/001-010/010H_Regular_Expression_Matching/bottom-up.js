// https://leetcode.com/problems/regular-expression-matching/
// 10. Regular Expression Matching
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = (s, p) => {
  const dp = Array(s.length + 1)
    .fill(0)
    .map(() => Array(p.length + 1).fill(false));
  dp[s.length][p.length] = true;

  for (let i = s.length; i >= 0; i--) {
    for (let j = p.length - 1; j >= 0; j--) {
      const match = i < s.length && (s[i] === p[j] || p[j] === '.');
      if (j < p.length - 1 && p[j + 1] === '*') {
        dp[i][j] = dp[i][j + 2] || (match && dp[i + 1][j]);
      } else {
        dp[i][j] = match && dp[i + 1][j + 1];
      }
    }
  }

  return dp[0][0];
};

var s = 'aa',
  p = 'a';
var expected = false;
console.log(isMatch(s, p), expected);

var s = 'aa',
  p = 'a*';
var expected = true;
console.log(isMatch(s, p), expected);

var s = 'ab',
  p = '.*';
var expected = true;
console.log(isMatch(s, p), expected);
