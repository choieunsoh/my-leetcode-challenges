// https://leetcode.com/problems/rotate-array/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function rotate(nums, k) {
  k = k % nums.length;
  const mid = nums.length - k;
  reverse(nums, 0, mid - 1);
  reverse(nums, mid, nums.length - 1);
  reverse(nums, 0, nums.length - 1);

  console.log(nums.join(' '));

  function reverse(nums, start, end) {
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
    }
  }
}

var nums = [1, 2, 3, 4, 5, 6, 7],
  k = 3;
rotate(nums, k);

(nums = [-1, -100, 3, 99]), (k = 2);
rotate(nums, k);
