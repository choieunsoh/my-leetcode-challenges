// 3697. Compute Decimal Representation
// https://leetcode.com/problems/compute-decimal-representation/description/
// T.C.: O(log n)
// S.C.: O(1)
/**
 * @param {number} n
 * @return {number[]}
 */
var decimalRepresentation = function (n) {
  const result = [];
  let base = 1;
  while (base * 10 <= n) {
    base *= 10;
  }

  while (n > 0) {
    const digit = (n / base) | 0;
    if (digit !== 0) {
      result.push(digit * base);
    }
    n %= base;
    base /= 10;
  }
  return result;
};

var n = 537;
var expected = [500, 30, 7];
var result = decimalRepresentation(n);
console.log(result, result.join() === expected.join());

var n = 102;
var expected = [100, 2];
var result = decimalRepresentation(n);
console.log(result, result.join() === expected.join());

var n = 6;
var expected = [6];
var result = decimalRepresentation(n);
console.log(result, result.join() === expected.join());
