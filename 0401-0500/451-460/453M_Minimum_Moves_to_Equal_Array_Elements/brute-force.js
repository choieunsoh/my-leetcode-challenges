// 453. Minimum Moves to Equal Array Elements
// https://leetcode.com/problems/minimum-moves-to-equal-array-elements/description/
// T.C.: O(n^2 * k)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
  let min = 0;
  let max = nums.length - 1;
  let count = 0;
  while (true) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[max] < nums[i]) {
        max = i;
      }
      if (nums[min] > nums[i]) {
        min = i;
      }
    }
    if (nums[max] === nums[min]) {
      break;
    }
    for (let i = 0; i < nums.length; i++) {
      if (i !== max) {
        nums[i]++;
      }
    }
    count++;
  }
  return count;
};

var nums = [1, 2, 3];
var expected = 3;
var result = minMoves(nums);
console.log(result, result === expected);

var nums = [1, 1, 1];
var expected = 0;
var result = minMoves(nums);
console.log(result, result === expected);
