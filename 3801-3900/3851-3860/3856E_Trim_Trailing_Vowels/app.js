// 3856. Trim Trailing Vowels
// https://leetcode.com/problems/trim-trailing-vowels/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {string}
 */
var trimTrailingVowels = function (s) {
  for (let i = s.length - 1; i >= 0; i--) {
    if ('aeiou'.includes(s[i])) {
      continue;
    } else {
      return s.substring(0, i + 1);
    }
  }
  return '';
};

var s = 'idea';
var expected = 'id';
var result = trimTrailingVowels(s);
console.log(result, result === expected);

var s = 'day';
var expected = 'day';
var result = trimTrailingVowels(s);
console.log(result, result === expected);

var s = 'aeiou';
var expected = '';
var result = trimTrailingVowels(s);
console.log(result, result === expected);
