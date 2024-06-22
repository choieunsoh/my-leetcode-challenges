// 2743. Count Substrings Without Repeating Character
// https://leetcode.com/problems/count-substrings-without-repeating-character/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {number}
 */
var numberOfSpecialSubstrings = function (s) {
  const a = 'a'.charCodeAt(0);
  const chars = new Array(26).fill(0);
  let result = 0;
  let left = 0;
  for (let right = 0; right < s.length; right++) {
    chars[s.charCodeAt(right) - a]++;
    while (chars[s.charCodeAt(right) - a] > 1) {
      chars[s.charCodeAt(left++) - a]--;
    }
    result += right - left + 1;
  }
  return result;
};

var s = 'abcd';
var expected = 10;
var result = numberOfSpecialSubstrings(s);
console.log(result, result === expected);

var s = 'ooo';
var expected = 3;
var result = numberOfSpecialSubstrings(s);
console.log(result, result === expected);

var s = 'abab';
var expected = 7;
var result = numberOfSpecialSubstrings(s);
console.log(result, result === expected);
