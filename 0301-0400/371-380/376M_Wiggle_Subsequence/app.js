// 376. Wiggle Subsequence
// https://leetcode.com/problems/wiggle-subsequence/
/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
  const n = nums.length;
  if (n < 2) return n;
  let prevDiff = nums[1] - nums[0];
  let result = prevDiff === 0 ? 1 : 2;
  for (let i = 2; i < n; i++) {
    const currDiff = nums[i] - nums[i - 1];
    if ((prevDiff <= 0 && currDiff > 0) || (prevDiff >= 0 && currDiff < 0)) {
      prevDiff = currDiff;
      result++;
    }
  }

  return result;
};

var nums = [1, 7, 4, 9, 2, 5];
var expected = 6;
var result = wiggleMaxLength(nums);
console.log(result, result === expected);

var nums = [1, 17, 5, 10, 13, 15, 10, 5, 16, 8];
var expected = 7;
var result = wiggleMaxLength(nums);
console.log(result, result === expected);

var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var expected = 2;
var result = wiggleMaxLength(nums);
console.log(result, result === expected);

var nums = [1, 2, 2];
var expected = 2;
var result = wiggleMaxLength(nums);
console.log(result, result === expected);

var nums = [1, 2];
var expected = 2;
var result = wiggleMaxLength(nums);
console.log(result, result === expected);

var nums = [1, 1];
var expected = 1;
var result = wiggleMaxLength(nums);
console.log(result, result === expected);

var nums = [3, 3, 3, 2, 5];
var expected = 3;
var result = wiggleMaxLength(nums);
console.log(result, result === expected);
