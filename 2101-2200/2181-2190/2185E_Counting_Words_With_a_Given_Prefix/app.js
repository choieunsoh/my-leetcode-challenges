// 2185. Counting Words With a Given Prefix
// https://leetcode.com/problems/counting-words-with-a-given-prefix/description/
// T.C.: O(n*m)
// S.C.: O(1)
/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function (words, pref) {
  return words.filter((word) => word.startsWith(pref)).length;
};

var words = ['pay', 'attention', 'practice', 'attend'],
  pref = 'at';
var expected = 2;
var result = prefixCount(words, pref);
console.log(result, result === expected);

var words = ['leetcode', 'win', 'loops', 'success'],
  pref = 'code';
var expected = 0;
var result = prefixCount(words, pref);
console.log(result, result === expected);
