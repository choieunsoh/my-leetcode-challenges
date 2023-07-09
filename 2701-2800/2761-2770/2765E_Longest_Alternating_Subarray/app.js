// 2765. Longest Alternating Subarray
// https://leetcode.com/problems/longest-alternating-subarray/
/**
 * @param {number[]} nums
 * @return {number}
 */
var alternatingSubarray = function (nums) {
  let [curr, check] = [1, 1];
  let result = -1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] === check) {
      curr++;
      check *= -1;
      result = Math.max(result, curr);
    } else {
      if (nums[i] - nums[i - 1] === 1) {
        [curr, check] = [2, -1];
      } else {
        [curr, check] = [1, 1];
      }
    }
  }
  return result;
};

var nums = [2, 3, 4, 3, 4];
var expected = 4;
var result = alternatingSubarray(nums);
console.log(result, result === expected);

var nums = [4, 5, 6];
var expected = 2;
var result = alternatingSubarray(nums);
console.log(result, result === expected);

var nums = [2, 5, 7];
var expected = -1;
var result = alternatingSubarray(nums);
console.log(result, result === expected);

var nums = [22, 23];
var expected = 2;
var result = alternatingSubarray(nums);
console.log(result, result === expected);

var nums = [14, 30, 29, 49, 3, 23, 44, 21, 26, 52];
var expected = -1;
var result = alternatingSubarray(nums);
console.log(result, result === expected);

var nums = [50, 93, 71, 18, 61, 2, 57, 58];
var expected = 2;
var result = alternatingSubarray(nums);
console.log(result, result === expected);

var nums = [6, 12, 2, 3, 8, 9, 10, 10, 2, 1];
var expected = 2;
var result = alternatingSubarray(nums);
console.log(result, result === expected);
