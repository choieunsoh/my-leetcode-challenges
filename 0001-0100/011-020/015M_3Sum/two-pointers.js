// 15. 3Sum
// https://leetcode.com/problems/3sum/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const result = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
};

function compare(a, b) {
  a.sort((a, b) => a - b);
  b.sort((a, b) => a - b);
  return a.join() === b.join();
}

var nums = [-1, 0, 1, 2, -1, -4];
var expected = [
  [-1, -1, 2],
  [-1, 0, 1],
];
var result = threeSum(nums);
console.log(result, compare(result, expected));

var nums = [0, 1, 1];
var expected = [];
var result = threeSum(nums);
console.log(result, compare(result, expected));

var nums = [0, 0, 0];
var expected = [[0, 0, 0]];
var result = threeSum(nums);
console.log(result, compare(result, expected));

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
var result = threeSum(nums);
console.log(result, compare(result, expected));
