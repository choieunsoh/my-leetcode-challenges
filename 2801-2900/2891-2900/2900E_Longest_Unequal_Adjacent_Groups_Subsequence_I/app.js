// 2900. Longest Unequal Adjacent Groups Subsequence I
// https://leetcode.com/problems/longest-unequal-adjacent-groups-subsequence-i/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
var getLongestSubsequence = function (words, groups) {
  const n = words.length;
  const result = [words[0]];
  for (let i = 1; i < n; i++) {
    if (groups[i] !== groups[i - 1]) {
      result.push(words[i]);
    }
  }
  return result;
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
