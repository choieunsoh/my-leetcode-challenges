// 2255. Count Prefixes of a Given String
// https://leetcode.com/problems/count-prefixes-of-a-given-string/
// T.C.: O(n*m)
// S.C.: O(1)
/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function (words, s) {
  let count = 0;
  for (const word of words) {
    if (s.startsWith(word)) count++;
  }
  return count;
};

var words = ['a', 'b', 'c', 'ab', 'bc', 'abc'],
  s = 'abc';
var expected = 3;
var result = countPrefixes(words, s);
console.log(result, result === expected);

var words = ['a', 'a'],
  s = 'aa';
var expected = 2;
var result = countPrefixes(words, s);
console.log(result, result === expected);
