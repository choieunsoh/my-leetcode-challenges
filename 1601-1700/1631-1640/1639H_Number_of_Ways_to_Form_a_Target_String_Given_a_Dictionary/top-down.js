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

  const dp = Array.from({ length: m + 1 }, () => Array(k + 1).fill(-1));
  ways(m, k);
  return dp[m][k];

  function ways(i, j) {
    if (j === 0) return i === 0 ? 1 : 0;
    if (dp[i][j] !== -1) return dp[i][j];
    dp[i][j] = ways(i, j - 1);
    if (i > 0) {
      const char = target.charCodeAt(i - 1) - a;
      dp[i][j] += count[char][j - 1] * ways(i - 1, j - 1);
    }
    dp[i][j] %= MOD;
    return dp[i][j];
  }
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
