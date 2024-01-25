// 1143. Longest Common Subsequence
// https://leetcode.com/problems/longest-common-subsequence/
// T.C.: O(m*n)
// S.C.: O(m*n)
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const memo = Array.from({ length: text1.length + 1 }, () => new Array(text2.length + 1));
  return lcs(0, 0);

  function lcs(p1, p2) {
    if (p1 === text1.length || p2 === text2.length) {
      return 0;
    }

    if (memo[p1][p2] !== undefined) {
      return memo[p1][p2];
    }

    let best = 0;
    if (text1.charAt(p1) === text2.charAt(p2)) {
      // case 1: The first letter of each string is the same.
      best = 1 + lcs(p1 + 1, p2 + 1);
    } else {
      // case 2: The first letter of each string is different.
      best = Math.max(lcs(p1, p2 + 1), lcs(p1 + 1, p2));
    }

    return (memo[p1][p2] = best);
  }
};

var text1 = 'abcde',
  text2 = 'ace';
var expected = 3;
var result = longestCommonSubsequence(text1, text2);
console.log(result, result === expected);

var text1 = 'abc',
  text2 = 'abc';
var expected = 3;
var result = longestCommonSubsequence(text1, text2);
console.log(result, result === expected);

var text1 = 'abc',
  text2 = 'def';
var expected = 0;
var result = longestCommonSubsequence(text1, text2);
console.log(result, result === expected);
