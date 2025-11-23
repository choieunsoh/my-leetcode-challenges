// 3750. Minimum Number of Flips to Reverse Binary String
// https://leetcode.com/problems/minimum-number-of-flips-to-reverse-binary-string/description/
// T.C.: O(log n)
// S.C.: O(1)
/**
 * @param {number} n
 * @return {number}
 */
var minimumFlips = function (n) {
  const bits = (Math.log2(n) | 0) + 1;
  let left = 0;
  let right = bits - 1;
  let flips = 0;
  while (left < right) {
    const leftBit = (n >> left++) & 1;
    const rightBit = (n >> right--) & 1;
    if (leftBit !== rightBit) {
      flips += 2;
    }
  }
  return flips;
};

var n = 7;
var expected = 0;
var result = minimumFlips(n);
console.log(result, result === expected);

var n = 10;
var expected = 4;
var result = minimumFlips(n);
console.log(result, result === expected);
