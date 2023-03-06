// 324. Wiggle Sort II
// https://leetcode.com/problems/wiggle-sort-ii/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function (nums) {
  const n = nums.length;
  const mid = (n + 1) >> 1;

  nums.sort((a, b) => a - b);
  const leftHalf = nums.slice(0, mid).reverse();
  const rightHalf = nums.slice(mid).reverse();

  for (let i = 0; i < n; i++) {
    if (i % 2 == 0) {
      nums[i] = leftHalf[Math.floor(i / 2)];
    } else {
      nums[i] = rightHalf[Math.floor(i / 2)];
    }
  }
};

var nums = [1, 5, 1, 1, 6, 4];
var expected = [1, 6, 1, 5, 1, 4];
wiggleSort(nums);
console.log(nums, nums.join() === expected.join());

var nums = [1, 3, 2, 2, 3, 1];
var expected = [2, 3, 1, 3, 1, 2];
wiggleSort(nums);
console.log(nums, nums.join() === expected.join());
