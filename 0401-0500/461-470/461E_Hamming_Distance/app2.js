// 461. Hamming Distance
// https://leetcode.com/problems/hamming-distance/
// Brian Kernighan's Algorithm
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let xor = x ^ y;
  let count = 0;
  while (xor) {
    count++;
    xor = xor & (xor - 1);
  }
  return count;
};

var x = 1,
  y = 4,
  expect = 2;
var result = hammingDistance(x, y);
console.log(result, result === expect);

var x = 3,
  y = 1,
  expect = 1;
var result = hammingDistance(x, y);
console.log(result, result === expect);
