// 940. Distinct Subsequences II
// https://leetcode.com/problems/distinct-subsequences-ii/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {number}
 */
var distinctSubseqII = function (s) {
  const MOD = 1e9 + 7;
  const lastOccurrence = new Array(26).fill(-1);
  const dp = new Array(s.length + 1).fill(0);
  dp[0] = 1;

  for (let i = 0; i < s.length; i++) {
    const charIndex = s.charCodeAt(i) - 97;
    dp[i + 1] = (dp[i] * 2) % MOD;
    if (lastOccurrence[charIndex] !== -1) {
      dp[i + 1] = (dp[i + 1] - dp[lastOccurrence[charIndex]] + MOD) % MOD;
    }
    lastOccurrence[charIndex] = i;
  }

  return (dp[s.length] - 1 + MOD) % MOD;
};

var s = 'abc';
var expected = 7;
var result = distinctSubseqII(s);
console.log(result, result === expected);

var s = 'aba';
var expected = 6;
var result = distinctSubseqII(s);
console.log(result, result === expected);

var s = 'aaa';
var expected = 3;
var result = distinctSubseqII(s);
console.log(result, result === expected);
