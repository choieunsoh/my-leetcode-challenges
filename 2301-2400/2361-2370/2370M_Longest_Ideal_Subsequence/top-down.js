// 2370. Longest Ideal Subsequence
// https://leetcode.com/problems/longest-ideal-subsequence/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestIdealString = function (s, k) {
  const n = s.length;
  const a = 'a'.charCodeAt(0);
  const dp = Array.from({ length: n }, () => new Array(26).fill(-1));

  let result = 0;
  for (let currChar = 0; currChar < 26; currChar++) {
    result = Math.max(result, dfs(n - 1, currChar));
  }
  return result;

  function dfs(index, currChar) {
    if (dp[index][currChar] !== -1) return dp[index][currChar];

    dp[index][currChar] = 0;
    const charIndex = s.charCodeAt(index) - a;
    const match = currChar === charIndex;
    if (match) {
      dp[index][currChar] = 1;
    }

    if (index === 0) return dp[index][currChar];

    dp[index][currChar] = dfs(index - 1, currChar);
    if (!match) return dp[index][currChar];

    for (let nextChar = 0; nextChar < 26; nextChar++) {
      if (Math.abs(currChar - nextChar) <= k) {
        dp[index][currChar] = Math.max(dp[index][currChar], 1 + dfs(index - 1, nextChar));
      }
    }

    return dp[index][currChar];
  }
};

var s = 'acfgbd',
  k = 2;
var expected = 4;
var result = longestIdealString(s, k);
console.log(result, result === expected);

var s = 'abcd',
  k = 3;
var expected = 4;
var result = longestIdealString(s, k);
console.log(result, result === expected);
