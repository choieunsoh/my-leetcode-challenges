// 1408. String Matching in an Array
// https://leetcode.com/problems/string-matching-in-an-array/description/
// T.C.: O(n^2)
// S.C.: O(n)
/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
  return words.filter((word) => words.some((otherWord) => otherWord !== word && otherWord.includes(word)));
};

var words = ['mass', 'as', 'hero', 'superhero'];
var expected = ['as', 'hero'];
var result = stringMatching(words);
console.log(result, result.sort().join() === expected.sort().join());

var words = ['leetcode', 'et', 'code'];
var expected = ['et', 'code'];
var result = stringMatching(words);
console.log(result, result.sort().join() === expected.sort().join());

var words = ['blue', 'green', 'bu'];
var expected = [];
var result = stringMatching(words);
console.log(result, result.sort().join() === expected.sort().join());

var words = ['leetcoder', 'leetcode', 'od', 'hamlet', 'am'];
var expected = ['leetcode', 'od', 'am'];
var result = stringMatching(words);
console.log(result, result.sort().join() === expected.sort().join());
