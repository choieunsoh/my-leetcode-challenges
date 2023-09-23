// 338. Counting Bits
// https://leetcode.com/problems/counting-bits/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const count = Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    count[i] = count[i >> 1] + (i & 1);
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
