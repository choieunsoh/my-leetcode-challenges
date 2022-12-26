// 139. Word Break
// https://leetcode.com/problems/word-break/
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const wordSet = new Set(wordDict);
  const dp = Array(s.length + 1).fill(false);
  dp[0] = true;
  for (let right = 1; right <= s.length; right++) {
    for (let left = 0; left < right; left++) {
      const word = s.substring(left, right);
      if (dp[left] && wordSet.has(word)) {
        dp[right] = true;
        break;
      }
    }
  }
  return dp[s.length];
};

var s = 'leetcode',
  wordDict = ['leet', 'code'];
var expected = true;
var result = wordBreak(s, wordDict);
console.log(result, result === expected);

var s = 'applepenapple',
  wordDict = ['apple', 'pen'];
var expected = true;
var result = wordBreak(s, wordDict);
console.log(result, result === expected);

var s = 'catsandog',
  wordDict = ['cats', 'dog', 'sand', 'and', 'cat'];
var expected = false;
var result = wordBreak(s, wordDict);
console.log(result, result === expected);
