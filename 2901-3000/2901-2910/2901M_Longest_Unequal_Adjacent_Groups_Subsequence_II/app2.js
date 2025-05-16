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
  const n = words.length;
  let max = 1;
  let idx = 0;
  const dp = new Uint16Array(n).fill(1);
  const path = new Uint16Array(n);
  for (let i = n - 1; ~i; i--) {
    const s = words[i];
    for (let j = i + 1; j < n; j++) {
      if (groups[i] === groups[j]) continue;
      const t = words[j];
      if (s.length !== t.length) continue;

      let flag = false;
      let k = -1;
      while (++k < s.length) {
        if (s[k] === t[k]) continue;
        if (flag) {
          k = 99;
        } else {
          flag = true;
        }
      }
      if (k === 100) continue;

      const next = dp[j] + 1;
      if (next > dp[i]) {
        dp[i] = next;
        path[i] = j;
      }
      if (next > max) {
        max = next;
        idx = i;
      }
    }
  }

  const result = new Array(max);
  result[0] = words[idx];
  for (let i = 1; i < max; i++) {
    idx = path[idx];
    result[i] = words[idx];
  }
  return result;
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
