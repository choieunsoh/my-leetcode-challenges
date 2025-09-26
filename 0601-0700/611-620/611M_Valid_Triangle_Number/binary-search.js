// 611. Valid Triangle Number
// https://leetcode.com/problems/valid-triangle-number/
// T.C.: O(n^2 log n)
// S.C.: O(log n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function (nums) {
  let count = 0;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    let k = i + 2;
    for (let j = i + 1; j < nums.length - 1 && nums[i] !== 0; j++) {
      k = binarySearch(nums, k, nums.length - 1, nums[i] + nums[j]);
      count += k - j - 1;
    }
  }
  return count;

  function binarySearch(nums, left, right, target) {
    while (right >= left && right < nums.length) {
      const mid = (left + right) >> 1;
      if (nums[mid] >= target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return left;
  }
};

var nums = [2, 2, 3, 4];
var expected = 3;
var result = triangleNumber(nums);
console.log(result, result === expected);

var nums = [4, 2, 3, 4];
var expected = 4;
var result = triangleNumber(nums);
console.log(result, result === expected);

var nums = [7, 0, 0, 0];
var expected = 0;
var result = triangleNumber(nums);
console.log(result, result === expected);
