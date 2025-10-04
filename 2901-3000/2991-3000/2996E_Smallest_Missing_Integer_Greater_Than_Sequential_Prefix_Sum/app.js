// 2996. Smallest Missing Integer Greater Than Sequential Prefix Sum
// https://leetcode.com/problems/smallest-missing-integer-greater-than-sequential-prefix-sum/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingInteger = function (nums) {
  if (nums.length === 1) return nums[0] + 1;

  let sum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1] + 1) {
      break;
    }
    sum += nums[i];
  }

  const seen = new Set(nums);
  while (seen.has(sum)) {
    sum++;
  }
  return sum;
};

var nums = [1, 2, 3, 2, 5];
var expected = 6;
var result = missingInteger(nums);
console.log(result, result == expected);

var nums = [3, 4, 5, 1, 12, 14, 13];
var expected = 15;
var result = missingInteger(nums);
console.log(result, result == expected);

var nums = [29, 30, 31, 32, 33, 34, 35, 36, 37];
var expected = 297;
var result = missingInteger(nums);
console.log(result, result == expected);

var nums = [38];
var expected = 39;
var result = missingInteger(nums);
console.log(result, result == expected);

var nums = [23, 24, 25, 4, 5, 1];
var expected = 72;
var result = missingInteger(nums);
console.log(result, result == expected);
