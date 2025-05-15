// 2900. Longest Unequal Adjacent Groups Subsequence I
// https://leetcode.com/problems/longest-unequal-adjacent-groups-subsequence-i/description/
// T.C.: O(n^2)
// S.C.: O(n)
/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
var getLongestSubsequence = function (words, groups) {
  const n = words.length;
  const dp = new Array(n).fill(1);
  const prev = new Array(n).fill(-1);
  let maxLen = 1;
  let endIndex = 0;
  for (let i = 1; i < n; i++) {
    let bestLen = 1;
    let bestPrev = -1;
    for (let j = i - 1; j >= 0; j--) {
      if (groups[i] !== groups[j] && dp[j] + 1 > bestLen) {
        bestLen = dp[j] + 1;
        bestPrev = j;
      }
    }
    dp[i] = bestLen;
    prev[i] = bestPrev;
    if (dp[i] > maxLen) {
      maxLen = dp[i];
      endIndex = i;
    }
  }

  const result = [];
  for (let i = endIndex; i !== -1; i = prev[i]) {
    result.push(words[i]);
  }
  return result.reverse();
};

var words = ['e', 'a', 'b'],
  groups = [0, 0, 1];
var expected = ['e', 'b'];
var result = getLongestSubsequence(words, groups);
console.log(result, result.join() === expected.join());

var words = ['a', 'b', 'c', 'd'],
  groups = [1, 0, 1, 1];
var expected = ['a', 'b', 'c'];
var result = getLongestSubsequence(words, groups);
console.log(result, result.join() === expected.join());
