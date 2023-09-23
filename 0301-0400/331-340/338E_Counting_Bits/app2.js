// 338. Counting Bits
// https://leetcode.com/problems/counting-bits/
// Brian Kernighan's Algorithm
// Bit Trick: n & (n-1) to turn rightmost bit to 0
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const count = Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    count[i] = count[i & (i - 1)] + 1;
  }
  return count;
};

var n = 2;
var expected = [0, 1, 1];
var result = countBits(n);
console.log(result, result.join() === expected.join());

var n = 5;
var expected = [0, 1, 1, 2, 1, 2];
var result = countBits(n);
console.log(result, result.join() === expected.join());
