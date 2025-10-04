// 3010. Divide an Array Into Subarrays With Minimum Cost I
// https://leetcode.com/problems/divide-an-array-into-subarrays-with-minimum-cost-i/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumCost = function (nums) {
  const min1 = nums[0];
  let min2 = Infinity;
  let min3 = Infinity;
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    if (num < min2) {
      min3 = min2;
      min2 = num;
    } else if (num < min3) {
      min3 = num;
    }
  }
  return min1 + min2 + min3;
};

var nums = [1, 2, 3, 12];
var expected = 6;
var result = minimumCost(nums);
console.log(result, result === expected);

var nums = [5, 4, 3];
var expected = 12;
var result = minimumCost(nums);
console.log(result, result === expected);

var nums = [10, 3, 1, 1];
var expected = 12;
var result = minimumCost(nums);
console.log(result, result === expected);

var nums = [10, 3, 2, 1, 7, 9, 2, 1, 1, 2];
var expected = 12;
var result = minimumCost(nums);
console.log(result, result === expected);
