// 3452. Sum of Good Numbers
// https://leetcode.com/problems/sum-of-good-numbers/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumOfGoodNumbers = function (nums, k) {
  let sum = 0;
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    const num = nums[i];
    const leftNum = nums[i - k] ?? 0;
    const rightNum = nums[i + k] ?? 0;
    if (num > leftNum && num > rightNum) {
      sum += num;
    }
  }
  return sum;
};

var nums = [1, 3, 2, 1, 5, 4],
  k = 2;
var expected = 12;
var result = sumOfGoodNumbers(nums, k);
console.log(result, result === expected);

var nums = [2, 1],
  k = 1;
var expected = 2;
var result = sumOfGoodNumbers(nums, k);
console.log(result, result === expected);
