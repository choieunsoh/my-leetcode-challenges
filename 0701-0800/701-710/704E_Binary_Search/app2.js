// https://leetcode.com/problems/binary-search/
// 704. Binary Search
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((right + left) / 2);
    if (nums[mid] === target) return mid;

    if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    }
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
