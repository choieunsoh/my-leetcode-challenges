// 41. First Missing Positive
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
var expected = 3;
var result = firstMissingPositive(nums);
console.log(result, result === expected);

var nums = [1, 1];
var expected = 2;
var result = firstMissingPositive(nums);
console.log(result, result === expected);

var nums = [-2];
var expected = 1;
var result = firstMissingPositive(nums);
console.log(result, result === expected);

var nums = [0];
var expected = 1;
var result = firstMissingPositive(nums);
console.log(result, result === expected);

var nums = [2];
var expected = 1;
var result = firstMissingPositive(nums);
console.log(result, result === expected);

var nums = [1];
var expected = 2;
var result = firstMissingPositive(nums);
console.log(result, result === expected);

var nums = [7, 8, 9, 11, 12];
var expected = 1;
var result = firstMissingPositive(nums);
console.log(result, result === expected);

var nums = [1, 2, 0];
var expected = 3;
var result = firstMissingPositive(nums);
console.log(result, result === expected);

var nums = [3, 4, -1, 1];
var expected = 2;
var result = firstMissingPositive(nums);
console.log(result, result === expected);

var nums = [3, 2];
var expected = 1;
var result = firstMissingPositive(nums);
console.log(result, result === expected);

var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 20];
var expected = 10;
var result = firstMissingPositive(nums);
console.log(result, result === expected);
