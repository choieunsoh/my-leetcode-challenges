// 1545. Find Kth Bit in Nth Binary String
// https://leetcode.com/problems/find-kth-bit-in-nth-binary-string/description/
// T.C.: O(1)
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

  // Find the position of the rightmost set bit in k
  // This helps determine which "section" of the string we're in
  const positionInSection = k & -k;

  // Determine if k is in the inverted part of the string
  // This checks if the bit to the left of the rightmost set bit is 1
  const isInInvertedPart = (((k / positionInSection) >> 1) & 1) === 1;

  // Determine if the original bit (before any inversion) would be 1
  // This is true if k is even (i.e., its least significant bit is 0)
  const originalBitIsOne = (k & 1) === 0;

  if (isInInvertedPart) {
    // If we're in the inverted part, we need to flip the bit
    return originalBitIsOne ? '0' : '1';
  } else {
    // If we're not in the inverted part, return the original bit
    return originalBitIsOne ? '1' : '0';
  }
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
