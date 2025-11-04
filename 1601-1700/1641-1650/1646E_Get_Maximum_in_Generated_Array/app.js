// 1646. Get Maximum in Generated Array
// https://leetcode.com/problems/get-maximum-in-generated-array/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function (n) {
  const nums = [0, 1];
  if (n < 2) return nums[n];
  for (let i = 1; i <= n; i++) {
    if (2 * i <= n) nums[2 * i] = nums[i];
    if (2 * i + 1 <= n) nums[2 * i + 1] = nums[i] + nums[i + 1];
  }
  return Math.max(...nums);
};

var n = 7;
var expected = 3;
var result = getMaximumGenerated(n);
console.log(result, result === expected);

var n = 2;
var expected = 1;
var result = getMaximumGenerated(n);
console.log(result, result === expected);

var n = 3;
var expected = 2;
var result = getMaximumGenerated(n);
console.log(result, result === expected);

var n = 0;
var expected = 0;
var result = getMaximumGenerated(n);
console.log(result, result === expected);

var n = 1;
var expected = 1;
var result = getMaximumGenerated(n);
console.log(result, result === expected);
