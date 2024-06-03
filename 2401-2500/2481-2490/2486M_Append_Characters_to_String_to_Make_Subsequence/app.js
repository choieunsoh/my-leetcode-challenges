// 2486. Append Characters to String to Make Subsequence
// https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function (s, t) {
  let sIndex = 0;
  let tIndex = 0;
  while (sIndex < s.length) {
    if (s[sIndex] === t[tIndex]) {
      tIndex++;
    }
    sIndex++;
  }
  return t.length - tIndex;
};

var s = 'coaching',
  t = 'coding';
var expected = 4;
var result = appendCharacters(s, t);
console.log(result, result === expected);

var s = 'abcde',
  t = 'a';
var expected = 0;
var result = appendCharacters(s, t);
console.log(result, result === expected);

var s = 'z',
  t = 'abcde';
var expected = 5;
var result = appendCharacters(s, t);
console.log(result, result === expected);
