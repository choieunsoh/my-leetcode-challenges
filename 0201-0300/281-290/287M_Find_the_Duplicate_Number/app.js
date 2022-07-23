// https://leetcode.com/problems/find-the-duplicate-number/
// 287. Find the Duplicate Number
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let result = -1;
  for (let i = 0; i < nums.length; i++) {
    const curr = Math.abs(nums[i]);
    if (nums[curr] < 0) {
      result = curr;
      break;
    }
    nums[curr] *= -1;
  }
  for (let i = 0; i < nums.length; i++) {
    nums[i] = Math.abs(nums[i]);
  }
  return result;
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
