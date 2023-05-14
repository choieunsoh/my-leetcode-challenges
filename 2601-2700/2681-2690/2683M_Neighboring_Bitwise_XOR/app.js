// 2683. Neighboring Bitwise XOR
// https://leetcode.com/problems/neighboring-bitwise-xor/
/**
 * @param {number[]} derived
 * @return {boolean}
 */
var doesValidArrayExist = function (derived) {
  let bit = 0;
  for (let i = 0; i < derived.length; i++) {
    bit ^= derived[i];
  }
  if (bit === 0) return true;

  bit = 1;
  for (let i = 0; i < derived.length; i++) {
    bit ^= derived[i];
  }

  return bit === 1;
};

var derived = [1, 1, 0];
var expected = true;
var result = doesValidArrayExist(derived);
console.log(result, result === expected);

var derived = [1, 1];
var expected = true;
var result = doesValidArrayExist(derived);
console.log(result, result === expected);

var derived = [1, 0];
var expected = false;
var result = doesValidArrayExist(derived);
console.log(result, result === expected);
