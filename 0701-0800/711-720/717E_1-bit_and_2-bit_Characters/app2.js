// 717. 1-bit and 2-bit Characters
// https://leetcode.com/problems/1-bit-and-2-bit-characters/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function (bits) {
  let i = bits.length - 2;
  while (i >= 0 && bits[i] > 0) {
    i--;
  }
  return (bits.length - i) % 2 == 0;
};

var bits = [1, 0, 0];
var expected = true;
var result = isOneBitCharacter(bits);
console.log(result, result === expected);

var bits = [1, 1, 1, 0];
var expected = false;
var result = isOneBitCharacter(bits);
console.log(result, result === expected);
