// 2475. Number of Unequal Triplets in Array
// https://leetcode.com/problems/number-of-unequal-triplets-in-array/
// T.C.: O(n^3)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var unequalTriplets = function (nums) {
  let count = 0;
  const n = nums.length;
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        if (nums[i] !== nums[j] && nums[j] !== nums[k] && nums[k] !== nums[i]) {
          count++;
        }
      }
    }
  }
  return count;
};

var nums = [4, 4, 2, 4, 3];
var expected = 3;
var result = unequalTriplets(nums);
console.log(result, result === expected);

var nums = [1, 1, 1, 1, 1];
var expected = 0;
var result = unequalTriplets(nums);
console.log(result, result === expected);
