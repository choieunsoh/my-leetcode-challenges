// 1639. Number of Ways to Form a Target String Given a Dictionary
// https://leetcode.com/problems/number-of-ways-to-form-a-target-string-given-a-dictionary/
/**
 * @param {string[]} words
 * @param {string} target
 * @return {number}
 */
var numWays = function (words, target) {
  const m = target.length;
  const k = words[0].length;
  const a = 'a'.charCodeAt(0);
  const MOD = 1e9 + 7;
  const count = Array.from({ length: 26 }, () => Array(k).fill(0));
  for (let j = 0; j < k; j++) {
    for (const word of words) {
      const char = word.charCodeAt(j) - a;
      count[char][j]++;
    }
  }

  const dp = Array.from({ length: m + 1 }, () => Array(k + 1).fill(0));
  dp[0][0] = 1;
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j < k; j++) {
      const char = target.charCodeAt(i) - a;
      if (i < m) {
        dp[i + 1][j + 1] += count[char][j] * dp[i][j];
        dp[i + 1][j + 1] %= MOD;
      }
      dp[i][j + 1] += dp[i][j];
      dp[i][j + 1] %= MOD;
    }
  }
  return dp[m][k];
};

var words = ['acca', 'bbbb', 'caca'],
  target = 'aba';
var expected = 6;
var result = numWays(words, target);
console.log(result, result === expected);

var words = ['abba', 'baab'],
  target = 'bab';
var expected = 4;
var result = numWays(words, target);
console.log(result, result === expected);
