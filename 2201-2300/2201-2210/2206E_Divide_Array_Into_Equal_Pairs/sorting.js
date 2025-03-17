// 2206. Divide Array Into Equal Pairs
// https://leetcode.com/problems/divide-array-into-equal-pairs/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function (nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i += 2) {
    if (nums[i] !== nums[i + 1]) return false;
  }
  return true;
};

var nums = [3, 2, 3, 2, 2, 2];
var expected = true;
var result = divideArray(nums);
console.log(result, result === expected);

var nums = [1, 2, 3, 4];
var expected = false;
var result = divideArray(nums);
console.log(result, result === expected);
