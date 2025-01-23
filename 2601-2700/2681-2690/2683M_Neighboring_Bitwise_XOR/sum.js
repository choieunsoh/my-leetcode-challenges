// 2683. Neighboring Bitwise XOR
// https://leetcode.com/problems/neighboring-bitwise-xor/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} derived
 * @return {boolean}
 */
var doesValidArrayExist = function (derived) {
  let sum = 0;
  for (const num of derived) {
    sum += num;
  }
  return sum % 2 === 0;
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
