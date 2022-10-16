// https://leetcode.com/problems/binary-search/
// 704. Binary Search
var search = function (nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    nums[mid] < target ? (left = mid + 1) : (right = mid - 1);
  }
  return -1;
};

var nums = [-1, 0, 3, 5, 9, 12],
  target = 9;
var expected = 4;
console.log(search(nums, target), expected);

var nums = [-1, 0, 3, 5, 9, 12],
  target = 2;
var expected = -1;
console.log(search(nums, target), expected);
