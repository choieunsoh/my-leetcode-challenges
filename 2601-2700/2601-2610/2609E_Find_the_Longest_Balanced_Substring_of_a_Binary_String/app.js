// 2609. Find the Longest Balanced Substring of a Binary String
// https://leetcode.com/problems/find-the-longest-balanced-substring-of-a-binary-string/
/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestBalancedSubstring = function (s) {
  let result = 0;
  let [zeroes, ones] = [0, 0];
  for (var i = 0; i <= s.length; i++) {
    const bit = s[i] ?? '0';
    if (bit === '0') {
      if (ones > 0) {
        result = Math.max(result, 2 * Math.min(zeroes, ones));
        [zeroes, ones] = [0, 0];
      }
      zeroes++;
    } else {
      ones++;
    }
  }
  return result;
};

var s = '01000111';
var expected = 6;
var result = findTheLongestBalancedSubstring(s);
console.log(result, result === expected);

var s = '00111';
var expected = 4;
var result = findTheLongestBalancedSubstring(s);
console.log(result, result === expected);

var s = '111';
var expected = 0;
var result = findTheLongestBalancedSubstring(s);
console.log(result, result === expected);
