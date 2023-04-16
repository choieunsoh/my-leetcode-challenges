// 1639. Number of Ways to Form a Target String Given a Dictionary
// https://leetcode.com/problems/number-of-ways-to-form-a-target-string-given-a-dictionary/
/**
 * @param {string[]} words
 * @param {string} target
 * @return {number}
 */
var numWays = function (words, target) {
  const MOD = 1e9 + 7;
  const m = target.length;
  const k = words[0].length;
  const a = 'a'.charCodeAt(0);
  const dp = new Array(m + 1).fill(0);
  dp[0] = 1;
  for (let j = 0; j < k; j++) {
    const count = new Array(26).fill(0);
    for (const word of words) {
      const char = word.charCodeAt(j) - a;
      count[char]++;
    }

    for (let i = m - 1; i >= 0; i--) {
      const char = target.charCodeAt(i) - a;
      dp[i + 1] += (dp[i] * count[char]) % MOD;
    }
  }
  return dp[m] % MOD;
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
