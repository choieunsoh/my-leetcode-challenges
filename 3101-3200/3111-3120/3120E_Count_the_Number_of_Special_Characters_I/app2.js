// 3120. Count the Number of Special Characters I
// https://leetcode.com/problems/count-the-number-of-special-characters-i/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function (word) {
  const lowerSet = new Set();
  const upperSet = new Set();
  for (const ch of word) {
    if (ch >= 'a' && ch <= 'z') {
      lowerSet.add(ch);
    } else {
      upperSet.add(ch);
    }
  }

  let count = 0;
  for (const ch of lowerSet) {
    if (upperSet.has(ch.toUpperCase())) {
      count++;
    }
  }
  return count;
};

var word = 'aaAbcBC';
var expected = 3;
var result = numberOfSpecialChars(word);
console.log(result, result === expected);

var word = 'abc';
var expected = 0;
var result = numberOfSpecialChars(word);
console.log(result, result === expected);

var word = 'abBCab';
var expected = 1;
var result = numberOfSpecialChars(word);
console.log(result, result === expected);
