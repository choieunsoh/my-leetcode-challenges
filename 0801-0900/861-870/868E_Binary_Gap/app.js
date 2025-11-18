// 868. Binary Gap
// https://leetcode.com/problems/binary-gap/description/
// T.C.: O(log n)
// S.C.: O(1)
/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function (n) {
  let lastBit = -1;
  let maxGap = 0;
  for (let bit = 0; bit < 32; bit++) {
    if ((n >> bit) & (1 === 1)) {
      if (lastBit !== -1) {
        maxGap = Math.max(maxGap, bit - lastBit);
      }
      lastBit = bit;
    }
  }
  return maxGap;
};

var n = 22;
var expected = 2;
var result = binaryGap(n);
console.log(result, result === expected);

var n = 8;
var expected = 0;
var result = binaryGap(n);
console.log(result, result === expected);

var n = 5;
var expected = 2;
var result = binaryGap(n);
console.log(result, result === expected);
