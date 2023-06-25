// 2749. Minimum Operations to Make the Integer Zero
// https://leetcode.com/problems/minimum-operations-to-make-the-integer-zero/
/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var makeTheIntegerZero = function (num1, num2) {
  if (num1 < num2) return -1;
  for (let steps = 0; steps <= 100; steps++) {
    const diff = BigInt(num1 - num2 * steps);
    if (diff < 0n) return -1;
    const bits = countBits(diff);
    if (bits <= steps && steps <= diff) {
      return steps;
    }
  }
  return -1;

  function countBits(num) {
    let count = 0n;
    while (num) {
      count += num & 1n;
      num >>= 1n;
    }
    return count;
  }
};

var num1 = 3,
  num2 = -2;
var expected = 3;
var result = makeTheIntegerZero(num1, num2);
console.log(result, result === expected);

var num1 = 5,
  num2 = 7;
var expected = -1;
var result = makeTheIntegerZero(num1, num2);
console.log(result, result === expected);

var num1 = 16,
  num2 = 10;
var expected = -1;
var result = makeTheIntegerZero(num1, num2);
console.log(result, result === expected);

var num1 = 112577768,
  num2 = -501662198;
var expected = 16;
var result = makeTheIntegerZero(num1, num2);
console.log(result, result === expected);
