// 2210. Count Hills and Valleys in an Array
// https://leetcode.com/problems/count-hills-and-valleys-in-an-array/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function (nums) {
  let result = 0;
  for (let i = 1; i < nums.length - 1; i++) {
    const prev = nums[i - 1];
    while (nums[i] === nums[i + 1]) {
      i++;
    }
    const curr = nums[i];
    const next = nums[i + 1];
    if ((prev < curr && curr > next) || (prev > curr && curr < next)) {
      result++;
    }
  }
  return result;
};

var nums = [2, 4, 1, 1, 6, 5];
var expected = 3;
var result = countHillValley(nums);
console.log(result, result === expected);

var nums = [6, 6, 5, 5, 4, 1];
var expected = 0;
var result = countHillValley(nums);
console.log(result, result === expected);
