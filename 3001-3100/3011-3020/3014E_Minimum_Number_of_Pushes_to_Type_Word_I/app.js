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
  const m = (n / 8) | 0;
  return 8 * ((m * (m + 1)) / 2) + (m + 1) * (n - 8 * m);
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
