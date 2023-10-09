// 1002. Find Common Characters
// https://leetcode.com/problems/find-common-characters/
// T.C.: O(m * n)
// S.C.: O(n)
/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  const result = [];
  for (const char of words[0]) {
    if (words.every((word) => word.includes(char))) {
      result.push(char);
      words = words.map((word) => word.replace(char, ''));
    }
  }
  return result;
};

var words = ['bella', 'label', 'roller'];
var expected = ['e', 'l', 'l'];
var result = commonChars(words);
console.log(result, result.sort().join() === expected.sort().join());

var words = ['cool', 'lock', 'cook'];
var expected = ['c', 'o'];
var result = commonChars(words);
console.log(result, result.sort().join() === expected.sort().join());
