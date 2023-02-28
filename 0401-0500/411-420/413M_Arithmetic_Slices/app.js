// 413. Arithmetic Slices
// https://leetcode.com/problems/arithmetic-slices/
/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function (nums) {
  if (nums.length < 3) return 0;

  const n = nums.length;
  let result = 0;
  let count = 0;
  let prevDiff = nums[0] - nums[1];
  for (let i = 2; i < n; i++) {
    const diff = nums[i - 1] - nums[i];
    if (prevDiff === diff) {
      count++;
    } else {
      count = 0;
      prevDiff = diff;
    }
    result += count;
  }

  return result;
};

var nums = [1, 2, 3, 4];
var expected = 3;
var result = numberOfArithmeticSlices(nums);
console.log(result, result === expected);

var nums = [1];
var expected = 0;
var result = numberOfArithmeticSlices(nums);
console.log(result, result === expected);

var nums = [1, 2, 3, 4, 5, 6];
var expected = 10;
var result = numberOfArithmeticSlices(nums);
console.log(result, result === expected);

var nums = [1, 2, 3, 8, 9, 10];
var expected = 2;
var result = numberOfArithmeticSlices(nums);
console.log(result, result === expected);
