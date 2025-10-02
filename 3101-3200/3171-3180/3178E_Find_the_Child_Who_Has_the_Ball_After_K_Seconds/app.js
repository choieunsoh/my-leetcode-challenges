// 3178. Find the Child Who Has the Ball After K Seconds
// https://leetcode.com/problems/find-the-child-who-has-the-ball-after-k-seconds/description/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numberOfChild = function (n, k) {
  const nextChildren = n - 1;
  const rounds = (k / nextChildren) | 0;
  const moves = k % nextChildren;
  return rounds % 2 === 0 ? moves : nextChildren - moves;
};

var n = 3,
  k = 5;
var expected = 1;
var result = numberOfChild(n, k);
console.log(result, result === expected);

var n = 5,
  k = 6;
var expected = 2;
var result = numberOfChild(n, k);
console.log(result, result === expected);

var n = 4,
  k = 2;
var expected = 2;
var result = numberOfChild(n, k);
console.log(result, result === expected);

var n = 2,
  k = 1;
var expected = 1;
var result = numberOfChild(n, k);
console.log(result, result === expected);

var n = 2,
  k = 2;
var expected = 0;
var result = numberOfChild(n, k);
console.log(result, result === expected);

var n = 2,
  k = 3;
var expected = 1;
var result = numberOfChild(n, k);
console.log(result, result === expected);

var n = 4,
  k = 4;
var expected = 2;
var result = numberOfChild(n, k);
console.log(result, result === expected);
