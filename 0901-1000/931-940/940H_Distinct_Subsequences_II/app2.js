// 940. Distinct Subsequences II
// https://leetcode.com/problems/distinct-subsequences-ii/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {number}
 */
var distinctSubseqII = function (s) {
  const MOD = 1_000_000_007;
  const n = s.length;
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;

  const last = new Array(26).fill(-1);

  for (let i = 0; i < n; ++i) {
    const x = s.charCodeAt(i) - 'a'.charCodeAt(0);
    dp[i + 1] = (dp[i] * 2) % MOD;
    if (last[x] >= 0) {
      dp[i + 1] -= dp[last[x]];
    }
    dp[i + 1] %= MOD;
    last[x] = i;
  }

  dp[n]--;
  if (dp[n] < 0) {
    dp[n] += MOD;
  }
  return dp[n];
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
