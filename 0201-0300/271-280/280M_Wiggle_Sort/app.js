// 280. Wiggle Sort
// https://leetcode.com/problems/wiggle-sort/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function (nums) {
  if (nums.length === 1) return;

  if (nums[0] > nums[1]) {
    [nums[0], nums[1]] = [nums[1], nums[0]];
  }

  let isPeakDirection = true;
  for (let i = 0; i < nums.length - 1; i++) {
    if (isPeakDirection) {
      if (nums[i + 1] < nums[i + 2]) {
        [nums[i + 1], nums[i + 2]] = [nums[i + 2], nums[i + 1]];
      }
    } else {
      if (nums[i + 1] > nums[i + 2]) {
        [nums[i + 1], nums[i + 2]] = [nums[i + 2], nums[i + 1]];
      }
    }
    isPeakDirection = !isPeakDirection;
  }
};

var nums = [3, 5, 2, 1, 6, 4];
var expected = [3, 5, 1, 6, 2, 4];
wiggleSort(nums);
console.log(nums, nums.join() === expected.join());

var nums = [6, 6, 5, 6, 3, 8];
var expected = [6, 6, 5, 6, 3, 8];
wiggleSort(nums);
console.log(nums, nums.join() === expected.join());

var nums = [2, 1];
var expected = [1, 2];
wiggleSort(nums);
console.log(nums, nums.join() === expected.join());

var nums = [3, 2, 1];
var expected = [2, 3, 1];
wiggleSort(nums);
console.log(nums, nums.join() === expected.join());
