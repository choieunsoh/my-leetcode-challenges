// 2914. Minimum Number of Changes to Make Binary String Beautiful
// https://leetcode.com/problems/minimum-number-of-changes-to-make-binary-string-beautiful/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {number}
 */
var minChanges = function (s) {
  // Initialize with first character of string
  let currentChar = s.charAt(0);

  let consecutiveCount = 0;
  let minChangesRequired = 0;

  // Iterate through each character in the string
  for (let i = 0; i < s.length; i++) {
    // If current character matches the previous sequence
    if (s.charAt(i) === currentChar) {
      consecutiveCount++;
      continue;
    }

    // If we have even count of characters, start new sequence
    if (consecutiveCount % 2 === 0) {
      consecutiveCount = 1;
    }
    // If odd count, we need to change current character
    // to match previous sequence
    else {
      consecutiveCount = 0;
      minChangesRequired++;
    }

    // Update current character for next iteration
    currentChar = s.charAt(i);
  }

  return minChangesRequired;
};

var s = '1001';
var expected = 2;
var result = minChanges(s);
console.log(result, result === expected);

var s = '10';
var expected = 1;
var result = minChanges(s);
console.log(result, result === expected);

var s = '0000';
var expected = 0;
var result = minChanges(s);
console.log(result, result === expected);
