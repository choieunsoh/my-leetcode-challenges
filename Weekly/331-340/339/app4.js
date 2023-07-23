/**
 * @param {number} n
 * @param {number} p
 * @param {number[]} banned
 * @param {number} k
 * @return {number[]}
 */
var minReverseOperations = function (n, p, banned, k) {
  return [];
};

var n = 4,
  p = 0,
  banned = [1, 2],
  k = 4;
var expected = [0, -1, -1, 1];
var result = minReverseOperations(n, p, banned, k);
console.log(result, result.join() === expected.join());

var n = 5,
  p = 0,
  banned = [2, 4],
  k = 3;
var expected = [0, -1, -1, -1, -1];
var result = minReverseOperations(n, p, banned, k);
console.log(result, result.join() === expected.join());

var n = 4,
  p = 2,
  banned = [0, 1, 3],
  k = 1;
var expected = [-1, -1, 0, -1];
var result = minReverseOperations(n, p, banned, k);
console.log(result, result.join() === expected.join());
