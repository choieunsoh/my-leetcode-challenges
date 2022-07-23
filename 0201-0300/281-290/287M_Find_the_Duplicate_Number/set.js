// https://leetcode.com/problems/find-the-duplicate-number/
// 287. Find the Duplicate Number
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  const seen = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (seen.has(nums[i])) return nums[i];
    seen.add(nums[i]);
  }
  return -1;
};

var nums = [1, 3, 4, 2, 2];
var expected = 2;
console.log(findDuplicate(nums), expected);

var nums = [3, 1, 3, 4, 2];
var expected = 3;
console.log(findDuplicate(nums), expected);

var nums = [3, 1, 5, 4, 2];
var expected = -1;
console.log(findDuplicate(nums), expected);
