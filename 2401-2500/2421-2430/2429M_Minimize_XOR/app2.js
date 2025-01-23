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
  let result = num1;
  const targetSetBitsCount = bitCount(num2);
  let setBitsCount = bitCount(num1);
  let currentBit = 0;

  while (setBitsCount < targetSetBitsCount) {
    if (!isSet(result, currentBit)) {
      result = setBit(result, currentBit);
      setBitsCount++;
    }
    currentBit++;
  }

  while (setBitsCount > targetSetBitsCount) {
    if (isSet(result, currentBit)) {
      result = unsetBit(result, currentBit);
      setBitsCount--;
    }
    currentBit++;
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

  function isSet(x, bit) {
    return (x & (1 << bit)) !== 0;
  }

  function setBit(x, bit) {
    return x | (1 << bit);
  }

  function unsetBit(x, bit) {
    return x & ~(1 << bit);
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
