// 930. Binary Subarrays With Sum
// https://leetcode.com/problems/binary-subarrays-with-sum/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
  let result = 0;
  let left = 0;
  let right = 0;
  let leftSum = 0;
  let rightSum = 0;
  for (let i = 0; i < nums.length; i++) {
    leftSum += nums[i];
    while (left < i && leftSum > goal) {
      leftSum -= nums[left++];
    }

    rightSum += nums[i];
    while (right < i && (rightSum > goal || (rightSum === goal && nums[right] === 0))) {
      rightSum -= nums[right++];
    }

    if (leftSum === goal) {
      result += right - left + 1;
    }
  }
  return result;
};

var nums = [1, 0, 1, 0, 1],
  goal = 2;
var expected = 4;
var result = numSubarraysWithSum(nums, goal);
console.log(result, result === expected);

var nums = [0, 0, 0, 0, 0],
  goal = 0;
var expected = 15;
var result = numSubarraysWithSum(nums, goal);
console.log(result, result === expected);

var nums = [1, 0, 0, 1, 0, 1],
  goal = 2;
var expected = 5;
var result = numSubarraysWithSum(nums, goal);
console.log(result, result === expected);
