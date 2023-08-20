// 2828. Check if a String Is an Acronym of Words
// https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/
/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function (words, s) {
  return words.map((word) => word[0]).join('') === s;
};

var words = ['alice', 'bob', 'charlie'],
  s = 'abc';
var expected = true;
var result = isAcronym(words, s);
console.log(result, result === expected);

var words = ['an', 'apple'],
  s = 'a';
var expected = false;
var result = isAcronym(words, s);
console.log(result, result === expected);

var words = ['never', 'gonna', 'give', 'up', 'on', 'you'],
  s = 'ngguoy';
var expected = true;
var result = isAcronym(words, s);
console.log(result, result === expected);
