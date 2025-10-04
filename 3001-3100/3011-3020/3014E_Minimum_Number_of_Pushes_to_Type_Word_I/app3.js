// 3014. Minimum Number of Pushes to Type Word I
// https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-i/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function (word) {
  const n = word.length;
  let totalPushes = 0;
  let count = 0;
  let pushes = 1;
  for (let i = 0; i < n; i++) {
    count++;
    if (count === 9) {
      count = 1;
      pushes++;
    }
    totalPushes += pushes;
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
