// 35. Search Insert Position
// https://leetcode.com/problems/search-insert-position/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  if (target < nums[left]) return left;
  if (target > nums[right]) return right + 1;
  let index = right + 1;
  while (left <= right) {
    const mid = (left + right) >> 1;
    if (nums[mid] >= target) {
      right = mid - 1;
      index = mid;
    } else {
      left = mid + 1;
    }
  }
  return index;
};

var nums = [1, 3, 5, 6],
  target = 5;
var expected = 2;
var result = searchInsert(nums, target);
console.log(result, result === expected);

var nums = [1, 3, 5, 6],
  target = 2;
var expected = 1;
var result = searchInsert(nums, target);
console.log(result, result === expected);

var nums = [1, 3, 5, 6],
  target = 7;
var expected = 4;
var result = searchInsert(nums, target);
console.log(result, result === expected);

var nums = [1, 3, 5, 6],
  target = 6;
var expected = 3;
var result = searchInsert(nums, target);
console.log(result, result === expected);

var nums = [2, 3, 5, 6],
  target = 1;
var expected = 0;
var result = searchInsert(nums, target);
console.log(result, result === expected);
