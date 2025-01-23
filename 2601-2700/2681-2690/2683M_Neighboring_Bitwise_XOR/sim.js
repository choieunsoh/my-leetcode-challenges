// 2683. Neighboring Bitwise XOR
// https://leetcode.com/problems/neighboring-bitwise-xor/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} derived
 * @return {boolean}
 */
var doesValidArrayExist = function (derived) {
  const original = new Array(derived.length + 1).fill(0);
  for (let i = 0; i < derived.length; i++) {
    original[i + 1] = derived[i] ^ original[i];
  }
  if (original.at(-1) === 0) return true;

  original[0] = 1;
  for (let i = 0; i < derived.length; i++) {
    original[i + 1] = derived[i] ^ original[i];
  }
  return original.at(-1) === 1;
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
