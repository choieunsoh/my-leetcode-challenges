// 1967. Number of Strings That Appear as Substrings in Word
// https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word/
// T.C.: O(n*m)
// S.C.: O(1)
/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function (patterns, word) {
  let count = 0;
  for (const pattern of patterns) {
    if (word.includes(pattern)) {
      count++;
    }
  }
  return count;
};

var patterns = ['a', 'abc', 'bc', 'd'],
  word = 'abc';
var expected = 3;
var result = numOfStrings(patterns, word);
console.log(result, result === expected);

var patterns = ['a', 'b', 'c'],
  word = 'aaaaabbbbb';
var expected = 2;
var result = numOfStrings(patterns, word);
console.log(result, result === expected);

var patterns = ['a', 'a', 'a'],
  word = 'ab';
var expected = 3;
var result = numOfStrings(patterns, word);
console.log(result, result === expected);
