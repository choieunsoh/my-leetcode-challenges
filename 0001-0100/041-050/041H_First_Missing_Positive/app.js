// https://leetcode.com/problems/first-missing-positive/
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  let result = 1;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 1) continue;
    if (nums[i] > result) break;
    if (nums[i] === result) result++;
  }
  return result;
};

var nums = [2, 1];
console.log(firstMissingPositive(nums));

var nums = [1, 1];
console.log(firstMissingPositive(nums));

var nums = [-2];
console.log(firstMissingPositive(nums));

var nums = [0];
console.log(firstMissingPositive(nums));

var nums = [2];
console.log(firstMissingPositive(nums));

var nums = [1];
console.log(firstMissingPositive(nums));

var nums = [7, 8, 9, 11, 12];
console.log(firstMissingPositive(nums));

var nums = [1, 2, 0];
console.log(firstMissingPositive(nums));

var nums = [3, 4, -1, 1];
console.log(firstMissingPositive(nums));

var nums = [3, 2];
console.log(firstMissingPositive(nums));

var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 20];
console.log(firstMissingPositive(nums));
