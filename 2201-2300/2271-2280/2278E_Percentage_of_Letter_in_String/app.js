// 2278. Percentage of Letter in String
// https://leetcode.com/problems/percentage-of-letter-in-string/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function (s, letter) {
  let count = 0;
  for (const char of s) {
    if (char === letter) count++;
  }
  return ((100 * count) / s.length) | 0;
};

var s = 'foobar',
  letter = 'o';
var expected = 33;
var result = percentageLetter(s, letter);
console.log(result, result === expected);

var s = 'jjjj',
  letter = 'k';
var expected = 0;
var result = percentageLetter(s, letter);
console.log(result, result === expected);
