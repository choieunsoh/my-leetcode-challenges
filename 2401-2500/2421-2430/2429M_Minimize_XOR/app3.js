// 2429. Minimize XOR
// https://leetcode.com/problems/minimize-xor/description/
// T.C.: O(log n)
// S.C.: O(1)
/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var minimizeXor = function (num1, num2) {
  let setBits = bitCount(num2);
  let result = 0;

  for (let i = 31; i >= 0 && setBits > 0; i--) {
    if (((1 << i) & num1) !== 0) {
      result |= 1 << i;
      setBits--;
    }
  }

  for (let i = 0; i < 32 && setBits > 0; i++) {
    if (((1 << i) & result) === 0) {
      result |= 1 << i;
      setBits--;
    }
  }

  return result;

  function bitCount(n) {
    let bits = 0;
    while (n) {
      bits += n & 1;
      n >>= 1;
    }
    return bits;
  }
};

var num1 = 3,
  num2 = 5;
var expected = 3;
var result = minimizeXor(num1, num2);
console.log(result, result === expected);

var num1 = 1,
  num2 = 12;
var expected = 3;
var result = minimizeXor(num1, num2);
console.log(result, result === expected);
