// https://leetcode.com/problems/4sum/
// 18. 4Sum
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < nums.length - 3; i++) {
    for (let j = i + 1; j < nums.length - 2; j++) {
      let left = j + 1;
      let right = nums.length - 1;
      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];
        if (sum === target) {
          result.push([nums[left], nums[right], nums[i], nums[j]]);
          while (nums[left] === nums[left + 1]) left++;
          while (nums[right] === nums[right - 1]) right--;
          left++;
          right--;
        } else if (sum > target) {
          right--;
        } else {
          left++;
        }
      }
      while (nums[j] === nums[j + 1]) j++;
    }
    while (nums[i] === nums[i + 1]) i++;
  }

  return result;
};

function sorted(result) {
  return result.map((nums) => {
    nums.sort((a, b) => a - b);
  });
}

var nums = [1, 0, -1, 0, -2, 2],
  target = 0;
var expected = [
  [-2, -1, 1, 2],
  [-2, 0, 0, 2],
  [-1, 0, 0, 1],
];
var result = fourSum(nums, target);
console.log(result, sorted(result).join() === sorted(expected).join());

var nums = [2, 2, 2, 2, 2],
  target = 8;
var expected = [[2, 2, 2, 2]];
var result = fourSum(nums, target);
console.log(result, sorted(result).join() === sorted(expected).join());

var nums = [-3, -2, -1, 0, 0, 1, 2, 3],
  target = 0;
var expected = [
  [-3, -2, 2, 3],
  [-3, -1, 1, 3],
  [-3, 0, 0, 3],
  [-3, 0, 1, 2],
  [-2, -1, 0, 3],
  [-2, -1, 1, 2],
  [-2, 0, 0, 2],
  [-1, 0, 0, 1],
];
var result = fourSum(nums, target);
console.log(result, sorted(result).join() === sorted(expected).join());

var nums = [
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
  ],
  target = 8;
var expected = [[2, 2, 2, 2]];
var result = fourSum(nums, target);
console.log(result, sorted(result).join() === sorted(expected).join());
