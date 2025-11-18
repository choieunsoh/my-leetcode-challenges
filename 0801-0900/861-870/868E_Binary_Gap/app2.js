// 868. Binary Gap
// https://leetcode.com/problems/binary-gap/description/
// T.C.: O(log n)
// S.C.: O(log n)
/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function (n) {
  const bits = new Array(32).fill(0);
  let t = 0;
  for (let i = 0; i < 32; i++) {
    if (((n >> i) & 1) != 0) {
      bits[t++] = i;
    }
  }

  let result = 0;
  for (let i = 0; i < t - 1; i++) {
    result = Math.max(result, bits[i + 1] - bits[i]);
  }
  return result;
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
