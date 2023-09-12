// 487. Max Consecutive Ones II
// https://leetcode.com/problems/max-consecutive-ones-ii/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let result = 0;
  let left = 0;
  let zeroCount = 0;
  for (let right = 0; right < nums.length; right++) {
    zeroCount += nums[right] === 0;
    while (zeroCount === 2) {
      zeroCount -= nums[left++] === 0;
    }
    result = Math.max(result, right - left + 1);
  }
  return result;
};

var nums = [1, 0, 1, 1, 0];
var expected = 4;
var result = findMaxConsecutiveOnes(nums);
console.log(result, result === expected);

var nums = [1, 0, 1, 1, 0, 1];
var expected = 4;
var result = findMaxConsecutiveOnes(nums);
console.log(result, result === expected);

var nums = [1, 0, 1, 1, 0, 1, 1, 1];
var expected = 6;
var result = findMaxConsecutiveOnes(nums);
console.log(result, result === expected);
