// 476. Number Complement
// https://leetcode.com/problems/number-complement/description/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  // bitmask has the same length as num and contains only ones 1...1
  let bitmask = num;
  bitmask |= bitmask >> 1;
  bitmask |= bitmask >> 2;
  bitmask |= bitmask >> 4;
  bitmask |= bitmask >> 8;
  bitmask |= bitmask >> 16;
  return num ^ bitmask;
};

var num = 5;
var expected = 2;
var result = findComplement(num);
console.log(result, result === expected);

var num = 1;
var expected = 0;
var result = findComplement(num);
console.log(result, result === expected);
