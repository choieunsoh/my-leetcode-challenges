// 87. Scramble String
// https://leetcode.com/problems/scramble-string/
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function (s1, s2) {
  var helper = function (s1, s2, dp) {
    if (dp[s1 + s2] != undefined || dp[s2 + s1] != undefined) return dp[s1 + s2];
    else if (s1 == s2) return true;
    else if (s1.length != s2.length) return false;
    else if (s1.length <= 1) return s1 == s2;

    for (let i = 1; i < s1.length; i++) {
      if (
        (helper(s1.slice(0, i), s2.slice(0, i), dp) && helper(s1.slice(i), s2.slice(i), dp)) ||
        (helper(s1.slice(0, i), s2.slice(s1.length - i), dp) && helper(s1.slice(i), s2.slice(0, s1.length - i), dp))
      ) {
        dp[s1 + s2] = true;
        return true;
      }
    }
    dp[s1 + s2] = false;
    return false;
  };
  return helper(s1, s2, {});
};

var s1 = 'great',
  s2 = 'rgeat';
var expected = true;
var result = isScramble(s1, s2);
console.log(result, result === expected);

var s1 = 'abcde',
  s2 = 'caebd';
var expected = false;
var result = isScramble(s1, s2);
console.log(result, result === expected);

var s1 = 'a',
  s2 = 'a';
var expected = true;
var result = isScramble(s1, s2);
console.log(result, result === expected);
