// 3038. Maximum Number of Operations With the Same Score I
// https://leetcode.com/problems/maximum-number-of-operations-with-the-same-score-i/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxOperations = function (nums) {
  let count = 1;
  const sum = nums[0] + nums[1];
  for (let i = 2; i < nums.length; i += 2) {
    const currSum = nums[i] + nums[i + 1];
    if (currSum !== sum) break;
    count++;
  }
  return count;
};

var nums = [3, 2, 1, 4, 5];
var expected = 2;
var result = maxOperations(nums);
console.log(result, result === expected);

var nums = [1, 5, 3, 3, 4, 1, 3, 2, 2, 3];
var expected = 2;
var result = maxOperations(nums);
console.log(result, result === expected);

var nums = [5, 3];
var expected = 1;
var result = maxOperations(nums);
console.log(result, result === expected);
