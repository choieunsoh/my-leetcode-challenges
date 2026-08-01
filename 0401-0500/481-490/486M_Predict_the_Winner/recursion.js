// 486. Predict the Winner
// https://leetcode.com/problems/predict-the-winner/
// T.C.: O(2^n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function (nums) {
  return maxDiff(nums, 0, nums.length - 1) >= 0;

  function maxDiff(nums, left, right) {
    if (left === right) {
      return nums[left];
    }

    const scoreByLeft = nums[left] - maxDiff(nums, left + 1, right);
    const scoreByRight = nums[right] - maxDiff(nums, left, right - 1);
    return Math.max(scoreByLeft, scoreByRight);
  }
};

var nums = [1, 5, 2];
var expected = false;
var result = PredictTheWinner(nums);
console.log(result, result === expected);

var nums = [1, 5, 233, 7];
var expected = true;
var result = PredictTheWinner(nums);
console.log(result, result === expected);

var nums = [0];
var expected = true;
var result = PredictTheWinner(nums);
console.log(result, result === expected);

var nums = [1, 1];
var expected = true;
var result = PredictTheWinner(nums);
console.log(result, result === expected);

var nums = [1, 2];
var expected = true;
var result = PredictTheWinner(nums);
console.log(result, result === expected);
