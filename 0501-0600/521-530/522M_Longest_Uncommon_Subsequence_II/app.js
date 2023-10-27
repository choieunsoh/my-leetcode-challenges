// 522. Longest Uncommon Subsequence II
// https://leetcode.com/problems/longest-uncommon-subsequence-ii/
// T.C.: O(n^2 * m)
// S.C.: O(n)
/**
 * @param {string[]} strs
 * @return {number}
 */
var findLUSlength = function (strs) {
  strs.sort((a, b) => b.length - a.length);
  let result = -1;
  for (let i = 0; i < strs.length; i++) {
    let subsequence = false;
    for (let j = 0; j < strs.length; j++) {
      if (i !== j && isSubsequence(strs[i], strs[j])) {
        subsequence = true;
        break;
      }
    }
    if (!subsequence) {
      result = Math.max(result, strs[i].length);
    }
  }
  return result;

  function isSubsequence(s1, s2) {
    let i = 0;
    for (let j = 0; j < s2.length; j++) {
      if (s1.charAt(i) === s2.charAt(j)) {
        i++;
      }
    }
    return i === s1.length;
  }
};

var strs = ['aba', 'cdc', 'eae'];
var expected = 3;
var result = findLUSlength(strs);
console.log(result, result === expected);

var strs = ['aaa', 'aaa', 'aa'];
var expected = -1;
var result = findLUSlength(strs);
console.log(result, result === expected);
