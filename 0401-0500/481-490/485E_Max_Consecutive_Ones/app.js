// https://leetcode.com/problems/max-consecutive-ones/
// 485. Max Consecutive Ones
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let max = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    nums[i] === 1 ? count++ : (count = 0);
    if (count > max) max = count;
  }

  return max;
};

var nums = [1, 1, 0, 1, 1, 1];
var expected = 3;
console.log(findMaxConsecutiveOnes(nums), expected);

var nums = [1, 0, 1, 1, 0, 1];
var expected = 2;
console.log(findMaxConsecutiveOnes(nums), expected);
