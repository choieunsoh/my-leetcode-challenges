// 189. Rotate Array
// https://leetcode.com/problems/rotate-array/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  k %= nums.length;
  const mid = nums.length - k;
  reverse(nums, 0, mid - 1);
  reverse(nums, mid, nums.length - 1);
  reverse(nums, 0, nums.length - 1);

  function reverse(nums, left, right) {
    while (left < right) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
      right--;
    }
  }
};

var nums = [1, 2, 3, 4, 5, 6, 7],
  k = 3;
var expected = [5, 6, 7, 1, 2, 3, 4];
rotate(nums, k);
console.log(nums, nums.join() === expected.join());

var nums = [-1, -100, 3, 99],
  k = 2;
var expected = [3, 99, -1, -100];
rotate(nums, k);
console.log(nums, nums.join() === expected.join());
