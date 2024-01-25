// 1143. Longest Common Subsequence
// https://leetcode.com/problems/longest-common-subsequence/
// T.C.: O(m*n)
// S.C.: O(n)
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  let memo = new Array(text2.length + 1).fill(0);
  for (let p1 = text1.length - 1; p1 >= 0; p1--) {
    const curr = new Array(text2.length + 1).fill(0);
    for (let p2 = text2.length - 1; p2 >= 0; p2--) {
      if (text1.charAt(p1) === text2.charAt(p2)) {
        curr[p2] = 1 + memo[p2 + 1];
      } else {
        curr[p2] = Math.max(memo[p2], curr[p2 + 1]);
      }
    }
    memo = curr;
  }
  return memo[0];
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
