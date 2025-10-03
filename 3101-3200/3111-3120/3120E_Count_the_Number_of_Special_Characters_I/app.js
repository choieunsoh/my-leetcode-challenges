// 3120. Count the Number of Special Characters I
// https://leetcode.com/problems/count-the-number-of-special-characters-i/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function (word) {
  const chars = new Set(word);
  const A = 'A'.charCodeAt(0);
  const a = 'a'.charCodeAt(0);
  const uppers = new Array(26).fill(0);
  const lowers = new Array(26).fill(0);
  let count = 0;
  for (const ch of chars) {
    const charCode = ch.charCodeAt(0);
    if (charCode >= A && charCode <= A + 25) {
      uppers[charCode - A]++;
      if (lowers[charCode - A] > 0) {
        count++;
      }
    } else if (charCode >= a && charCode <= a + 25) {
      lowers[charCode - a]++;
      if (uppers[charCode - a] > 0) {
        count++;
      }
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
