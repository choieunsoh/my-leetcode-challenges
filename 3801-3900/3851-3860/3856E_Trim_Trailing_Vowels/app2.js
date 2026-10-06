// 3856. Trim Trailing Vowels
// https://leetcode.com/problems/trim-trailing-vowels/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {string}
 */
var trimTrailingVowels = function (s) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let i = s.length - 1;

  while (vowels.has(s[i])) {
    s = s.slice(0, -1);
    i--;
  }

  return s;
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
