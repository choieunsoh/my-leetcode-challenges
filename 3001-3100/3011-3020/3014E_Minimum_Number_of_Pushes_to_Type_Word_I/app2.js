// 3014. Minimum Number of Pushes to Type Word I
// https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-i/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function (word) {
  const n = word.length;
  let totalPushes = 0;

  // Characters assigned to 1-push slots
  let count = Math.min(n, 8);
  totalPushes += count * 1;

  // Characters assigned to 2-push slots
  if (n > 8) {
    count = Math.min(n - 8, 8);
    totalPushes += count * 2;
  }

  // Characters assigned to 3-push slots
  if (n > 16) {
    count = Math.min(n - 16, 8);
    totalPushes += count * 3;
  }

  // Characters assigned to 4-push slots
  if (n > 24) {
    count = n - 24; // Remaining chars
    totalPushes += count * 4;
  }

  return totalPushes;
};

var word = 'abcde';
var expected = 5;
var result = minimumPushes(word);
console.log(result, result === expected);

var word = 'xycdefghij';
var expected = 12;
var result = minimumPushes(word);
console.log(result, result === expected);

var word = 'abcdefghijklmnopqrs';
var expected = 33;
var result = minimumPushes(word);
console.log(result, result === expected);

var word = 'abcdefghijklmnopqrstuvwxyz';
var expected = 56;
var result = minimumPushes(word);
console.log(result, result === expected);
