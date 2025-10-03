// 3120. Count the Number of Special Characters I
// https://leetcode.com/problems/count-the-number-of-special-characters-i/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars_alternative = function (word) {
  const lowerExists = new Array(26).fill(false);
  const upperExists = new Array(26).fill(false);

  for (const char of word) {
    if (char >= 'a' && char <= 'z') {
      lowerExists[char.charCodeAt(0) - 'a'.charCodeAt(0)] = true;
    } else if (char >= 'A' && char <= 'Z') {
      upperExists[char.charCodeAt(0) - 'A'.charCodeAt(0)] = true;
    }
  }

  let count = 0;
  for (let i = 0; i < 26; i++) {
    if (lowerExists[i] && upperExists[i]) {
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
