// 1503. Last Moment Before All Ants Fall Out of a Plank
// https://leetcode.com/problems/last-moment-before-all-ants-fall-out-of-a-plank/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number} n
 * @param {number[]} left
 * @param {number[]} right
 * @return {number}
 */
var getLastMoment = function (n, left, right) {
  let result = 0;
  for (const num of left) {
    result = Math.max(result, num);
  }
  for (const num of right) {
    result = Math.max(result, n - num);
  }
  return result;
};

var n = 4,
  left = [4, 3],
  right = [0, 1];
var expected = 4;
var result = getLastMoment(n, left, right);
console.log(result, result === expected);

var n = 7,
  left = [],
  right = [0, 1, 2, 3, 4, 5, 6, 7];
var expected = 7;
var result = getLastMoment(n, left, right);
console.log(result, result === expected);

var n = 7,
  left = [0, 1, 2, 3, 4, 5, 6, 7],
  right = [];
var expected = 7;
var result = getLastMoment(n, left, right);
console.log(result, result === expected);
