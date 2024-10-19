// 1545. Find Kth Bit in Nth Binary String
// https://leetcode.com/problems/find-kth-bit-in-nth-binary-string/description/
// T.C.: O(n)
// S.C.: O(n)
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

  // Base case: for S1, return '0'
  if (n === 1) return '0';

  // Calculate the length of Sn
  const len = 1 << n;
  const halfLen = len >> 1;

  // If k is in the first half of the string, recurse with n-1
  if (k < halfLen) {
    return findKthBit(n - 1, k);
  }
  // If k is exactly in the middle, return '1'
  else if (k === halfLen) {
    return '1';
  }
  // If k is in the second half of the string
  else {
    // Find the corresponding bit in the first half and invert it
    const correspondingBit = findKthBit(n - 1, len - k);
    return correspondingBit === '0' ? '1' : '0';
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
