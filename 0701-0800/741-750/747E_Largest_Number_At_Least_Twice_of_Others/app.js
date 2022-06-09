// https://leetcode.com/problems/largest-number-at-least-twice-of-others/
// 747. Largest Number At Least Twice of Others
/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  if (nums.length === 1) return 0;

  let max = Math.max(...nums);
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === max) {
      index = i;
    } else {
      if (nums[i] * 2 > max) return -1;
    }
  }

  return index;
};

var nums = [3, 6, 1, 0];
var expected = 1;
console.log(dominantIndex(nums), expected);

var nums = [1, 2, 3, 4];
var expected = -1;
console.log(dominantIndex(nums), expected);

var nums = [1];
var expected = 0;
console.log(dominantIndex(nums), expected);
