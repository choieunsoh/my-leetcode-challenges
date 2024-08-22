// 476. Number Complement
// https://leetcode.com/problems/number-complement/description/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  let bit = 1;
  let x = num;
  while (x > 0) {
    num = num ^ bit;
    bit = bit << 1;
    x = x >> 1;
  }
  return num;
};

var num = 5;
var expected = 2;
var result = findComplement(num);
console.log(result, result === expected);

var num = 1;
var expected = 0;
var result = findComplement(num);
console.log(result, result === expected);
