// 31. Next Permutation
// https://leetcode.com/problems/next-permutation/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      const large = nextLarge(i);
      swap(i, large);
      reverse(i + 1);
      return;
    }
  }

  nums.reverse();

  function nextLarge(index) {
    for (let i = nums.length - 1; i > index; i--) {
      if (nums[i] > nums[index]) return i;
    }
  }

  function swap(i, j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  function reverse(start) {
    let end = nums.length - 1;
    while (start < end) {
      swap(start, end);
      start++;
      end--;
    }
  }
};

var nums = [1, 2, 3];
var expected = [1, 3, 2];
nextPermutation(nums);
console.log(nums, nums.join() === expected.join());

var nums = [3, 2, 1];
var expected = [1, 2, 3];
nextPermutation(nums);
console.log(nums, nums.join() === expected.join());

var nums = [1, 1, 5];
var expected = [1, 5, 1];
nextPermutation(nums);
console.log(nums, nums.join() === expected.join());
