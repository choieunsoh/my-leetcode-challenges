// https://leetcode.com/problems/3sum-closest/
// 16. 3Sum Closest
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let result = Infinity;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 1; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === target) return sum;
      sum < target ? left++ : right--;
      if (Math.abs(sum - target) < Math.abs(result - target)) {
        result = sum;
      }
    }
  }
  return result;
};

var nums = [-1, 2, 1, -4],
  target = 1;
var expected = 2;
var result = threeSumClosest(nums, target);
console.log(result, result === expected);

var nums = [0, 0, 0],
  target = 1;
var expected = 0;
var result = threeSumClosest(nums, target);
console.log(result, result === expected);
