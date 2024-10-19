// 1545. Find Kth Bit in Nth Binary String
// https://leetcode.com/problems/find-kth-bit-in-nth-binary-string/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
var findKthBit = function (n, k) {
  /*
  S1 = "0"
  Si = Si - 1 + "1" + reverse(invert(Si - 1)) for i > 1
  S1=0
  S2=011
  S3=0111001
  S4=011100110110001
  S5=0111001101100011011100100110001
  */

  let invertCount = 0;
  let len = (1 << n) - 1; // Length of Sn is 2^n - 1
  while (k > 1) {
    const halfLen = len >> 1;

    // If k is in the middle, return based on inversion count
    if (k === halfLen + 1) {
      return invertCount % 2 === 0 ? '1' : '0';
    }

    // If k is in the second half, invert and mirror
    if (k > len / 2) {
      k = len + 1 - k; // Mirror position
      invertCount++; // Increment inversion count
    }

    len = halfLen; // Reduce length for next iteration
  }

  // For the first position, return based on inversion count
  return invertCount % 2 === 0 ? '0' : '1';
};

var n = 3,
  k = 1;
var expected = '0';
var result = findKthBit(n, k);
console.log(result, result === expected);

var n = 4,
  k = 11;
var expected = '1';
var result = findKthBit(n, k);
console.log(result, result === expected);

var n = 4,
  k = 8;
var expected = '1';
var result = findKthBit(n, k);
console.log(result, result === expected);

var n = 4,
  k = 6;
var expected = '0';
var result = findKthBit(n, k);
console.log(result, result === expected);

var n = 5,
  k = 31;
var expected = '1';
var result = findKthBit(n, k);
console.log(result, result === expected);
