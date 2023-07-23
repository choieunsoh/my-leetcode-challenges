// 2788. Split Strings by Separator
// https://leetcode.com/problems/split-strings-by-separator/
/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function (words, separator) {
  return words.join(separator).split(separator).filter(Boolean);
};

var words = ['one.two.three', 'four.five', 'six'],
  separator = '.';
var expected = ['one', 'two', 'three', 'four', 'five', 'six'];
var result = splitWordsBySeparator(words, separator);
console.log(result, result.join() === expected.join());

var words = ['$easy$', '$problem$'],
  separator = '$';
var expected = ['easy', 'problem'];
var result = splitWordsBySeparator(words, separator);
console.log(result, result.join() === expected.join());

var words = ['|||'],
  separator = '|';
var expected = [];
var result = splitWordsBySeparator(words, separator);
console.log(result, result.join() === expected.join());
