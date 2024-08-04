// 1508. Range Sum of Sorted Subarray Sums
// https://leetcode.com/problems/range-sum-of-sorted-subarray-sums/description/
// T.C.: O(n^2 log n)
// S.C.: O(n^2)
/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function (nums, n, left, right) {
  const sumArray = [];
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum += nums[j];
      sumArray.push(sum);
    }
  }
  sumArray.sort((a, b) => a - b);

  let result = 0;
  const MOD = 1e9 + 7;
  for (let i = left - 1; i <= right - 1; i++) {
    result = (result + sumArray[i]) % MOD;
  }
  return result;
};

var nums = [1, 2, 3, 4],
  n = 4,
  left = 1,
  right = 5;
var expected = 13;
var result = rangeSum(nums, n, left, right);
console.log(result, result === expected);

var nums = [1, 2, 3, 4],
  n = 4,
  left = 3,
  right = 4;
var expected = 6;
var result = rangeSum(nums, n, left, right);
console.log(result, result === expected);

var nums = [1, 2, 3, 4],
  n = 4,
  left = 1,
  right = 10;
var expected = 50;
var result = rangeSum(nums, n, left, right);
console.log(result, result === expected);
