/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
/**
 * @param {number[]} derived
 * @return {boolean}
 */
var doesValidArrayExist = function (derived) {
  let bit = 0;
  const n = derived.length;
  for (let i = 0; i < n; i++) {
    bit = derived[i] ^ bit;
  }
  if (bit === 0) return true;
  bit = 1;
  for (let i = 0; i < n; i++) {
    bit = derived[i] ^ bit;
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
