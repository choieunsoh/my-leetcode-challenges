// 3330. Find the Original Typed String I
// https://leetcode.com/problems/find-the-original-typed-string-i/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} word
 * @return {number}
 */
var possibleStringCount = function (word) {
  let count = 1;
  for (let i = 1; i < word.length; i++) {
    if (word[i] === word[i - 1]) {
      count++;
    }
  }
  return count;
};

var word = 'abbcccc';
var expected = 5;
var result = possibleStringCount(word);
console.log(result, result === expected);

var word = 'abcd';
var expected = 1;
var result = possibleStringCount(word);
console.log(result, result === expected);

var word = 'aaaa';
var expected = 4;
var result = possibleStringCount(word);
console.log(result, result === expected);

var word = 'ebe';
var expected = 1;
var result = possibleStringCount(word);
console.log(result, result === expected);
