// 2683. Neighboring Bitwise XOR
// https://leetcode.com/problems/neighboring-bitwise-xor/
/**
 * @param {number[]} derived
 * @return {boolean}
 */
var doesValidArrayExist = function (derived) {
  let curr = false;
  for (const bit of derived) {
    if (bit) curr = !curr;
  }

  return !curr;
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
