// 762. Prime Number of Set Bits in Binary Representation
// https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation/description/
// T.C.: O(log D)
// S.C.: O(1)
/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function (left, right) {
  const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19]);
  let count = 0;
  for (let num = left; num <= right; num++) {
    const bits = countSetBits(num);
    if (primes.has(bits)) {
      count++;
    }
  }
  return count;

  function countSetBits(n) {
    let count = 0;
    while (n) {
      count++;
      n &= n - 1;
    }
    return count;
  }
};

var left = 6,
  right = 10;
var expected = 4;
var result = countPrimeSetBits(left, right);
console.log(result, result === expected);

var left = 10,
  right = 15;
var expected = 5;
var result = countPrimeSetBits(left, right);
console.log(result, result === expected);
