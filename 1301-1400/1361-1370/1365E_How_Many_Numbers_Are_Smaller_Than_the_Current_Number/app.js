// 1365. How Many Numbers Are Smaller Than the Current Number
// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  const result = [...nums];
  result.sort((a, b) => a - b);
  const map = new Map();
  for (let i = 1; i < result.length; i++) {
    if (result[i] !== result[i - 1]) {
      map.set(result[i], i);
    }
  }
  for (let i = 0; i < nums.length; i++) {
    result[i] = map.get(nums[i]) ?? 0;
  }
  return result;
};

var nums = [8, 1, 2, 2, 3];
var expected = [4, 0, 1, 1, 3];
var result = smallerNumbersThanCurrent(nums);
console.log(result, result.join() === expected.join());

var nums = [6, 5, 4, 8];
var expected = [2, 1, 0, 3];
var result = smallerNumbersThanCurrent(nums);
console.log(result, result.join() === expected.join());

var nums = [7, 7, 7, 7];
var expected = [0, 0, 0, 0];
var result = smallerNumbersThanCurrent(nums);
console.log(result, result.join() === expected.join());
