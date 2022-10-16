// 75. Sort Colors
// https://leetcode.com/problems/sort-colors/
var sortColors = function (nums: number[]): void {
  let [left, mid, right] = [0, 0, nums.length - 1];
  while (mid <= right) {
    switch (nums[mid]) {
      case 0:
        [nums[left], nums[mid]] = [nums[mid], nums[left]];
        left++;
        mid++;
        break;
      case 1:
        mid++;
        break;
      case 2:
        [nums[mid], nums[right]] = [nums[right], nums[mid]];
        right--;
        break;
    }
  }
};

var nums = [2, 0, 2, 1, 1, 0];
var expected = [0, 0, 1, 1, 2, 2];
sortColors(nums);
console.log(nums, expected, nums.join() === expected.join());

var nums = [2, 0, 1];
var expected = [0, 1, 2];
sortColors(nums);
console.log(nums, expected, nums.join() === expected.join());
