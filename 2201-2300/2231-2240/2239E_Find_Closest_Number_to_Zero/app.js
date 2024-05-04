// 2239. Find Closest Number to Zero
// https://leetcode.com/problems/find-closest-number-to-zero/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function (nums) {
  let result = nums[0];
  let minDiff = Number.MAX_SAFE_INTEGER;
  for (const num of nums) {
    const diff = Math.abs(num);
    if (diff < minDiff) {
      minDiff = diff;
      result = num;
    } else if (diff === minDiff) {
      result = Math.max(result, num);
    }
  }
  return result;
};

var nums = [-4, -2, 1, 4, 8];
var expected = 1;
var result = findClosestNumber(nums);
console.log(result, result === expected);

var nums = [2, -1, 1];
var expected = 1;
var result = findClosestNumber(nums);
console.log(result, result === expected);

var nums = [-100, -100];
var expected = -100;
var result = findClosestNumber(nums);
console.log(result, result === expected);

var nums = [2, 1, 1, -1, 100000];
var expected = 1;
var result = findClosestNumber(nums);
console.log(result, result === expected);
