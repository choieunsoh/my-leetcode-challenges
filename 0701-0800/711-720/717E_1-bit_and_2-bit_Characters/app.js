// https://leetcode.com/problems/1-bit-and-2-bit-characters/
// 717. 1-bit and 2-bit Characters
/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function (bits) {
  let i = 0;
  let last = false;
  while (i < bits.length) {
    last = bits[i] === 0;
    i += bits[i] === 1 ? 2 : 1;
  }
  return last;
};

var bits = [1, 0, 0];
var expected = true;
var result = isOneBitCharacter(bits);
console.log(result, result === expected);

var bits = [1, 1, 1, 0];
var expected = false;
var result = isOneBitCharacter(bits);
console.log(result, result === expected);
