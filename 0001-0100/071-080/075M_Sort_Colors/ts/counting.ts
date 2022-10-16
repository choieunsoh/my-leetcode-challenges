// 75. Sort Colors
// https://leetcode.com/problems/sort-colors/
var sortColors = function (nums: number[]): void {
  const counters = [0, 0, 0];
  for (let i = 0; i < nums.length; i++) {
    counters[nums[i]]++;
  }
  let index = 0;
  for (let i = 0; i < counters.length; i++) {
    while (counters[i]) {
      nums[index++] = i;
      counters[i]--;
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
