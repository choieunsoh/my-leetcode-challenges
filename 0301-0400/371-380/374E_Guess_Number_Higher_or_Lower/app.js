// https://leetcode.com/problems/guess-number-higher-or-lower/
// 374. Guess Number Higher or Lower
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */
var pick = 0;
var guess = function (num) {
  if (num === pick) return 0;
  if (num < pick) return 1;
  return -1;
};
/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let left = 1;
  let right = n;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const result = guess(mid);
    if (result === 0) return mid;
    result === 1 ? (right = mid - 1) : (left = mid + 1);
  }
  return -1;
};

var n = 10,
  pick = 6;
console.log(n, guessNumber(n), pick);

var n = 1,
  pick = 1;
console.log(n, guessNumber(n), pick);

var n = 2,
  pick = 1;
console.log(n, guessNumber(n), pick);
