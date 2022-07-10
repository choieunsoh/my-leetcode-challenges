// https://leetcode.com/problems/3sum/
// 15. 3Sum
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  function moveLeft(left, right) {
    left++;
    while (left < right && nums[left] === nums[left - 1]) left++;
    return left;
  }
  function moveRight(left, right) {
    right--;
    while (left < right && nums[right] === nums[right + 1]) right--;
    return right;
  }

  const result = [];
  nums.sort((a, b) => a - b);
  for (let index = 0; index < nums.length - 2; index++) {
    if (index > 0 && nums[index] === nums[index - 1]) continue;

    const target = 0 - nums[index];
    let left = index + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = nums[left] + nums[right];
      if (sum === target) {
        result.push([nums[index], nums[left], nums[right]]);
        left = moveLeft(left, right);
        right = moveRight(left, right);
      } else if (sum < target) {
        left = moveLeft(left, right);
      } else {
        right = moveRight(left, right);
      }
    }
  }

  return result;
};

var nums = [-1, 0, 1, 2, -1, -4];
var expected = [
  [-1, -1, 2],
  [-1, 0, 1],
];
console.log(threeSum(nums));

var nums = [0, 1, 1];
var expected = [];
console.log(threeSum(nums));

var nums = [0, 0, 0];
var expected = [[0, 0, 0]];
console.log(threeSum(nums));

var nums = [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4];
var expected = [
  [-4, 0, 4],
  [-4, 1, 3],
  [-3, -1, 4],
  [-3, 0, 3],
  [-3, 1, 2],
  [-2, -1, 3],
  [-2, 0, 2],
  [-1, -1, 2],
  [-1, 0, 1],
];
console.log(threeSum(nums));
