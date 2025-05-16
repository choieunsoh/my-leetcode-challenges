// 2901. Longest Unequal Adjacent Groups Subsequence II
// https://leetcode.com/problems/longest-unequal-adjacent-groups-subsequence-ii/description/
// T.C.: O(n^2 * L)
// S.C.: O(n)
/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
var getWordsInLongestSubsequence = function (words, groups) {
  const n = groups.length;
  const dp = new Array(n).fill(1);
  const prev = new Array(n).fill(-1);
  let maxIndex = 0;
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (check(words[i], words[j]) && dp[j] + 1 > dp[i] && groups[i] !== groups[j]) {
        dp[i] = dp[j] + 1;
        prev[i] = j;
      }
    }
    if (dp[i] > dp[maxIndex]) {
      maxIndex = i;
    }
  }

  const result = [];
  for (let i = maxIndex; i >= 0; i = prev[i]) {
    result.push(words[i]);
  }
  result.reverse();
  return result;

  function check(s1, s2) {
    if (s1.length !== s2.length) {
      return false;
    }
    let diff = 0;
    for (let i = 0; i < s1.length; i++) {
      if (s1[i] !== s2[i]) {
        if (++diff > 1) {
          return false;
        }
      }
    }
    return diff === 1;
  }
};

var words = ['bab', 'dab', 'cab'],
  groups = [1, 2, 2];
var expected = ['bab', 'dab'];
var result = getWordsInLongestSubsequence(words, groups);
console.log(result, result.join() === expected.join());

var words = ['a', 'b', 'c', 'd'],
  groups = [1, 2, 3, 4];
var expected = ['a', 'b', 'c', 'd'];
var result = getWordsInLongestSubsequence(words, groups);
console.log(result, result.join() === expected.join());
