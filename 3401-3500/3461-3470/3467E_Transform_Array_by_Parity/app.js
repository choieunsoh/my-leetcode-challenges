// 3467. Transform Array by Parity
// https://leetcode.com/problems/transform-array-by-parity/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function (nums) {
  let index = 0;
  for (const num of nums) {
    if (num % 2 === 0) {
      nums[index++] = 0;
    }
  }

  while (index < nums.length) {
    nums[index++] = 1;
  }
  return nums;
};

var nums = [4, 3, 2, 1];
var expected = [0, 0, 1, 1];
var result = transformArray(nums);
console.log(result, result.join() === expected.join());

var nums = [1, 5, 1, 4, 2];
var expected = [0, 0, 1, 1, 1];
var result = transformArray(nums);
console.log(result, result.join() === expected.join());
