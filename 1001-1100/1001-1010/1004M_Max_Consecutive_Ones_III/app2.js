// 1004. Max Consecutive Ones III
// https://leetcode.com/problems/max-consecutive-ones-iii/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let left = 0;
  let maxCount = 0;
  let zeroCount = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      zeroCount++;
    }

    while (zeroCount > k) {
      if (nums[left] === 0) {
        zeroCount--;
      }
      left++;
    }

    maxCount = Math.max(maxCount, right - left + 1);
  }

  return maxCount;
};

var nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0],
  k = 2;
var expected = 6;
var result = longestOnes(nums, k);
console.log(result, result === expected);

var nums = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1],
  k = 3;
var expected = 10;
var result = longestOnes(nums, k);
console.log(result, result === expected);

var nums = [0, 0, 1, 1, 1, 0, 0],
  k = 0;
var expected = 3;
var result = longestOnes(nums, k);
console.log(result, result === expected);
