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
  const nums = n.toString().split('');
  let base = 10 ** (nums.length - 1);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== '0') {
      result.push(Number(nums[i]) * base);
    }
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
